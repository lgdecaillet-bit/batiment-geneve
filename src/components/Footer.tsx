import {
  siteConfig,
  footerServices,
  footerCompany,
} from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/50 pt-20 md:pt-20 px-6 md:px-[60px] pb-8 md:pb-10">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-[60px] max-w-[1200px] mx-auto pb-[60px] border-b border-cream/[0.08]">
        {/* Brand */}
        <div>
          <div className="font-serif text-[22px] tracking-[-0.5px] text-cream">
            {siteConfig.nameParts.prefix}
            <span className="text-accent">{siteConfig.nameParts.accent}</span>
            {siteConfig.nameParts.suffix}
          </div>
          <p className="mt-4 text-sm leading-[1.7] max-w-[300px]">
            {siteConfig.description}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-cream text-[13px] uppercase tracking-[2px] mb-6">
            Services
          </h4>
          <ul className="list-none">
            {footerServices.map((s) => (
              <li key={s} className="mb-3 text-sm">
                <a
                  href="#services"
                  className="footer-link text-cream/50 no-underline"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h4 className="text-cream text-[13px] uppercase tracking-[2px] mb-6">
            Entreprise
          </h4>
          <ul className="list-none">
            {footerCompany.map((item) => (
              <li key={item.label} className="mb-3 text-sm">
                <a
                  href={item.href}
                  className="footer-link text-cream/50 no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-cream text-[13px] uppercase tracking-[2px] mb-6">
            Contact
          </h4>
          <ul className="list-none">
            <li className="mb-3 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="text-cream/50 no-underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="mb-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-cream/50 no-underline"
              >
                {siteConfig.emailDisplay}
              </a>
            </li>
            <li className="mb-3 text-sm">{siteConfig.address}</li>
            <li className="mt-4 text-sm">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-cream/50 no-underline"
              >
                Google Maps →
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto pt-[30px] flex flex-col md:flex-row justify-between text-xs text-center md:text-left gap-2">
        <span>{siteConfig.copyright}</span>
        <span>
          Conception:{" "}
          <a href="#" className="text-accent">
            {siteConfig.designCredit}
          </a>
        </span>
      </div>
    </footer>
  );
}
