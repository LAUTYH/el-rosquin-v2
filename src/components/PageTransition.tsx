"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FrozenRouter } from "./FrozenRouter";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const variants = {
    initial: () => ({
      opacity: 0
    }),
    enter: {
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
      }
    },
    exit: () => ({
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const
      }
    })
  };

  return (
    // popLayout saca al elemento del flujo del documento al salir, 
    // permitiendo que el nuevo ocupe su lugar y se superpongan
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="w-full bg-[#f4f4f4] origin-top"
      >
        <FrozenRouter>
          {children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
