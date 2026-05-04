import { ExternalLink, Mail, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-golden/20 bg-deep/95 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <div className="mb-4 flex items-baseline font-serif text-2xl tracking-[0.18em]">
            <span className="text-text-primary">Luz</span>
            <span className="text-golden">ComAromas</span>
          </div>
          <div className="mb-4 h-px w-20 bg-gold-line" />
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
            Aromas que acendem momentos. Oráculos que traduzem intenção.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a className="transition hover:text-golden" href="mailto:contato@luzcomaromas.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a className="transition hover:text-golden" href="https://instagram.com/luzcomaromas" rel="noreferrer" target="_blank">
            <Sparkles className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            className="inline-flex items-center gap-2 border border-golden/35 px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-golden transition hover:bg-golden hover:text-deep"
            href="https://luzcomaromas.vercel.app"
            rel="noreferrer"
            target="_blank"
          >
            Site oficial
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
