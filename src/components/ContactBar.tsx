import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { site } from "@/lib/config";

export default function ContactBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-14 px-5 md:px-[60px] py-8 md:py-12 border-b border-slate/[0.08] items-start md:items-center">
      {[
        { icon: Phone, label: "Téléphone", value: site.phone, href: site.phoneHref },
        { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
        { icon: MapPin, label: "Adresse", value: site.address, href: site.mapsUrl, external: true },
        { icon: Globe, label: "Site web", value: "(ton url)", href: site.siteUrl, external: true },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 text-sm text-steel">
          <div className="w-[42px] h-[42px] bg-red-soft rounded-[10px] flex items-center justify-center flex-shrink-0">
            <item.icon className="w-[18px] h-[18px] text-red" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[1px] mb-0.5">{item.label}</div>
            <a
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="no-underline text-slate font-bold transition-colors duration-300 hover:text-red"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
