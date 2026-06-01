// Route Handler (servidor) para el formulario de contacto.
// 1) Valida el captcha de Cloudflare Turnstile con la Secret Key (privada).
// 2) Si es válido, envía el email con Resend (API Key privada).
// Ninguna clave sensible queda expuesta en el navegador, y el captcha se valida del lado servidor.

async function safeJson(res: Response, label: string): Promise<Record<string, unknown> | null> {
  const raw = await res.text();
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    console.error(`[api/contacto] ${label} respondió ${res.status} con contenido NO-JSON:\n${raw.slice(0, 400)}`);
    return null;
  }
}

// Escapa caracteres HTML para armar el cuerpo del email de forma segura.
function esc(value: FormDataEntryValue | null): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return Response.json({ success: false, error: "Solicitud inválida." }, { status: 400 });
    }

    const token = formData.get("cf-turnstile-response");
    if (!token || typeof token !== "string") {
      return Response.json(
        { success: false, error: "Completá la verificación de seguridad." },
        { status: 400 }
      );
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("[api/contacto] Falta TURNSTILE_SECRET_KEY en .env.local");
      return Response.json({ success: false, error: "Config del servidor incompleta (captcha)." }, { status: 500 });
    }
    if (!process.env.RESEND_API_KEY) {
      console.error("[api/contacto] Falta RESEND_API_KEY en .env.local");
      return Response.json({ success: false, error: "Config del servidor incompleta (envío)." }, { status: 500 });
    }

    // 1) Verificar el token de Turnstile contra Cloudflare
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });
    const verifyData = await safeJson(verifyRes, "Turnstile siteverify");
    if (!verifyData?.success) {
      console.error("[api/contacto] Turnstile no validó:", JSON.stringify(verifyData));
      return Response.json(
        { success: false, error: "No se pudo verificar el captcha. Probá de nuevo." },
        { status: 403 }
      );
    }

    // 2) Enviar el email con Resend
    const baseSubject = String(formData.get("subject") || "Consulta Comercial - Web El Rosquín");
    const tipoRaw = formData.get("tipo");
    const tipo = typeof tipoRaw === "string" ? tipoRaw : "";
    // El tipo de comercio va también en el asunto para identificar el lead de un vistazo.
    const subject = tipo ? `${baseSubject} · ${tipo}` : baseSubject;
    const email = formData.get("email");
    const html = `
      <h2 style="font-family:sans-serif">${esc(subject)}</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 8px"><strong>Nombre</strong></td><td style="padding:4px 8px">${esc(formData.get("nombre"))}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Empresa</strong></td><td style="padding:4px 8px">${esc(formData.get("empresa"))}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Tipo de comercio</strong></td><td style="padding:4px 8px">${esc(tipo)}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Email</strong></td><td style="padding:4px 8px">${esc(email)}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Teléfono</strong></td><td style="padding:4px 8px">${esc(formData.get("telefono"))}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Provincia</strong></td><td style="padding:4px 8px">${esc(formData.get("provincia"))}</td></tr>
        <tr><td style="padding:4px 8px"><strong>Localidad</strong></td><td style="padding:4px 8px">${esc(formData.get("localidad"))}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:14px"><strong>Mensaje:</strong><br>${esc(formData.get("mensaje")).replace(/\n/g, "<br>")}</p>
    `;

    const sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Web El Rosquín <${process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
        to: [process.env.CONTACT_TO_EMAIL ?? ""],
        ...(typeof email === "string" && email ? { reply_to: email } : {}),
        subject,
        html,
      }),
    });
    const sendData = await safeJson(sendRes, "Resend");
    if (!sendRes.ok || !sendData?.id) {
      console.error("[api/contacto] Resend no envió:", JSON.stringify(sendData));
      return Response.json(
        { success: false, error: "No se pudo enviar el mensaje. Probá de nuevo." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[api/contacto] Error inesperado:", err);
    return Response.json({ success: false, error: "Error interno. Probá de nuevo." }, { status: 500 });
  }
}
