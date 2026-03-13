"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className={`fixed bottom-[30px] right-[30px] w-12 h-12 bg-accent text-white border-none rounded-full cursor-pointer flex items-center justify-center z-[999] shadow-[0_4px_20px_rgba(196,80,42,0.3)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-dark hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,80,42,0.4)] ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
