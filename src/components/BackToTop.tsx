"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className={`fixed bottom-6 right-6 w-11 h-11 bg-red text-white border-none rounded-lg cursor-pointer flex items-center justify-center z-[99] shadow-[0_4px_16px_rgba(185,28,28,0.3)] transition-all duration-400 hover:bg-red-hover hover:-translate-y-[3px] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
    </button>
  );
}
