import { Phone, Mail } from "lucide-react";
import { site } from "@/lib/config";

export default function Topbar() {
  return (
    <div className="hidden md:flex bg-slate text-white/70 text-xs px-6 lg:px-[60px] py-2.5 justify-between items-center tracking-[.3px]">
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-1.5">
          <Phone className="w-[13px] h-[13px] text-red" />
          <a href={site.phoneHref} className="text-white/90 no-underline font-semibold">{site.phone}</a>
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="w-[13px] h-[13px] text-red" />
          <a href={`mailto:${site.email}`} className="text-white/90 no-underline font-semibold">{site.email}</a>
        </span>
      </div>
      <div>
        {site.address} ·{" "}
        <a href={site.siteUrl} target="_blank" rel="noopener noreferrer" className="text-white/90 no-underline font-semibold">
          (ton url)
        </a>
      </div>
    </div>
  );
}
