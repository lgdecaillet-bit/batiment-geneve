"use client";

export default function WhatsAppButton() {
  const phone = "41763944218";
  const message = encodeURIComponent(
    "Bonjour, je suis intéressé(e) par vos services. Pourriez-vous me donner plus d'informations ?"
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-[30px] left-[30px] w-14 h-14 bg-[#25D366] text-white border-none rounded-full cursor-pointer flex items-center justify-center z-[999] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#1EB954] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.014-3.178 2.28-.854.18-1.968.324-5.72-1.23-4.804-1.988-7.896-6.862-8.136-7.18-.23-.318-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.002.908.016.292.016.682-.11 1.068.814.39.94 1.33 3.248 1.448 3.484.118.236.196.512.04.83-.158.318-.236.514-.472.794-.236.28-.498.626-.71.84-.236.236-.482.492-.208.966.274.474 1.22 2.012 2.618 3.26 1.8 1.604 3.316 2.1 3.788 2.336.474.236.75.198 1.026-.118.274-.318 1.184-1.382 1.5-1.856.316-.474.632-.394 1.066-.236.434.158 2.742 1.294 3.214 1.53.472.236.788.354.906.55.118.196.118 1.136-.272 2.236z" />
      </svg>
    </a>
  );
}
