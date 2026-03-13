import { site, footerServices, footerNav } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-slate text-white/45 pt-10 md:pt-16 px-5 md:px-[60px] pb-6 md:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-8 lg:gap-12 max-w-[1200px] mx-auto pb-12 border-b border-white/[0.06]">
        {/* Brand */}
        <div>
          <div className="font-serif text-2xl text-white">
            (Nom Entreprise)
          </div>
          <p className="mt-3 text-[13px] leading-[1.7] max-w-[260px]">
            Votre partenaire de confiance pour tous vos travaux de bâtiment dans le canton de Genève. Plâtrerie, peinture, gypserie, isolation et rénovation.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white/85 text-[11px] uppercase tracking-[2.5px] mb-5 font-bold">Services</h4>
          <ul className="list-none">
            {footerServices.map((s) => (
              <li key={s} className="mb-2.5 text-[13px]">
                <a href="#services" className="ft-link text-white/45 no-underline">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white/85 text-[11px] uppercase tracking-[2.5px] mb-5 font-bold">Navigation</h4>
          <ul className="list-none">
            {footerNav.map((l) => (
              <li key={l.label} className="mb-2.5 text-[13px]">
                <a href={l.href} className="ft-link text-white/45 no-underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/85 text-[11px] uppercase tracking-[2.5px] mb-5 font-bold">Contact</h4>
          <address className="not-italic">
            <ul className="list-none">
              <li className="mb-2.5 text-[13px]">
                <a href={site.phoneHref} className="text-white/45 no-underline">{site.phone}</a>
              </li>
              <li className="mb-2.5 text-[13px]">
                <a href={`mailto:${site.email}`} className="text-white/45 no-underline">{site.email}</a>
              </li>
              <li className="mb-2.5 text-[13px]">
                <a href={site.siteUrl} target="_blank" rel="noopener noreferrer" className="text-white/45 no-underline">(ton url)</a>
              </li>
              <li className="text-[13px]">{site.address}</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-6 flex flex-col md:flex-row justify-between text-[11px] text-center md:text-left gap-1.5">
        <span>{site.copyright}</span>
        <span>Site web par <a href="#" className="text-red no-underline">{site.designCredit}</a></span>
      </div>
    </footer>
  );
}
