"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center font-montserrat text-redros font-bold text-sm cursor-pointer hover:gap-1 transition-all duration-200 hover:underline"
    >
      <span>&lt; Volver</span>
    </button>
  );
}
