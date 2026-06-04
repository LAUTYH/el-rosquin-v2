"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBanner({ src, height = 400 }: { src: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden relative"
      style={{ height }}
    >
      <motion.div
        style={{
          y,
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "140%",
          width: "100%",
          position: "absolute",
          top: "-20%",
          left: 0,
        }}
      />
    </div>
  );
}
