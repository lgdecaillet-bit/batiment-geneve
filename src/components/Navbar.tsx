"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      id="mainNav"
      className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center backdrop-blur-[20px] border-b border-charcoal/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "py-3 px-6 md:px-[60px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] bg-cream/[0.97]"
          : "py-4 md:py-5 px-6 md:px-[60px] bg-cream/[0.92]"
      }`}
    >
      {/* Logo */}
      <a
        href="#top"
        className="flex items-center gap-3.5 no-underline text-inherit group"
      >
        <div className="w-[42px] h-[42px] bg-charcoal flex items-center justify-center rounded-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F2EDE4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-6h6v6" />
          </svg>
        </div>
        <div className="font-serif text-[22px] tracking-[-0.5px]">
          {siteConfig.nameParts.prefix}
          <span className="text-accent">{siteConfig.nameParts.accent}</span>
          {siteConfig.nameParts.suffix}
        </div>
      </a>

      {/* Nav Links */}
      <ul
        className={`list-none flex gap-9 ${
          mobileOpen
            ? "flex flex-col absolute top-full left-0 right-0 bg-cream p-6 gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-b-2 border-accent md:flex md:flex-row md:static md:p-0 md:shadow-none md:border-0"
            : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={closeMobile}
              className="nav-link no-underline text-charcoal text-sm font-medium tracking-[0.5px] uppercase transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`https://wa.me/41763944218?text=${encodeURIComponent("Bonjour, je suis intéressé(e) par vos services. Pourriez-vous me donner plus d'informations ?")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="nav-link nav-cta-btn no-underline"
          >
            Devis Gratuit
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen
              ? "-rotate-45 translate-x-[5px] -translate-y-[5px]"
              : ""
          }`}
        />
      </button>
    </nav>
  );
}
