import { Instagram, Mail, MoonStar } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 font-serif text-xl text-gold-200">
            <MoonStar className="h-5 w-5" />
            Oraculo LuzComAromas
          </div>
          <p>Rituais, cristais e tarot para reconectar intencao, beleza e presenca.</p>
        </div>
        <div className="flex gap-4">
          <a className="transition hover:text-gold-200" href="mailto:contato@luzcomaromas.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a className="transition hover:text-gold-200" href="https://instagram.com" rel="noreferrer" target="_blank">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
