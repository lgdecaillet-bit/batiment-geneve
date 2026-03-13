"use client";

import { useState, useEffect } from "react";
import { site, navLinks } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite obtenir un devis.")}`;

  return (
    <nav
      id="mainNav"
      className={`sticky top-0 z-[100] bg-off-white border-b border-slate/[0.08] px-5 md:px-[60px] transition-shadow duration-400 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      {/* Top bar — logo + hamburger */}
      <div className="flex justify-between items-center h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#top" className="flex items-baseline gap-2 no-underline text-slate shrink-0">
          <span className="font-serif text-[22px] md:text-[28px] tracking-[-0.5px]">
            ISO<b className="text-red font-normal">SWISS</b>BAT
          </span>
          <span className="w-px h-5 bg-slate/[0.12] self-center mx-1 hidden sm:block" />
          <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-steel hidden sm:block">
            {site.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none gap-2 items-center h-full">
          {navLinks.map((l) => (
            <li key={l.href} className="h-full flex items-center">
              <a
                href={l.href}
                className="nav-link-ul no-underline text-dark-steel text-[13px] font-semibold px-4 h-full flex items-center transition-colors duration-250 hover:text-slate"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pl-4 border-l border-slate/[0.08] ml-2 h-full flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red text-white px-6 py-2.5 rounded-md text-[13px] font-bold no-underline transition-all duration-300 tracking-[.3px] hover:bg-red-hover hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(185,28,28,0.25)]"
            >
              Devis Gratuit
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-slate transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] pb-5" : "max-h-0"
        }`}
      >
        <ul className="list-none flex flex-col gap-1 border-t border-slate/[0.08] pt-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block no-underline text-dark-steel text-[15px] font-semibold py-3 px-2 rounded-md transition-colors duration-200 hover:bg-concrete hover:text-slate"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-red text-white text-center py-3 rounded-md text-[14px] font-bold no-underline transition-all duration-300 hover:bg-red-hover"
            >
              Devis Gratuit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
