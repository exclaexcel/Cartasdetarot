import Link from "next/link";
import { ExternalLink, Flame } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-golden/20 bg-deep/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-baseline tracking-[0.08em]">
          <span className="font-serif text-2xl font-light text-lavender transition group-hover:text-text-primary">
            Luz
          </span>
          <span className="font-serif text-2xl font-light text-golden transition group-hover:text-golden-light">
            ComAromas
          </span>
          <span className="ml-3 hidden text-[0.62rem] uppercase tracking-[0.35em] text-lavender/45 sm:inline">
            Oraculo
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-xs uppercase tracking-[0.25em] text-lavender/65 transition hover:border-golden hover:text-golden"
              >
                Site
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-transparent pb-1 text-xs uppercase tracking-[0.25em] text-lavender/65 transition hover:border-golden hover:text-golden"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <Link
          href="/tarot"
          className="hidden items-center gap-2 border border-golden bg-golden px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-deep shadow-gold transition hover:-translate-y-0.5 hover:bg-golden-light lg:flex"
        >
          <Flame className="h-4 w-4" />
          Acender carta
        </Link>
      </nav>
    </header>
  );
}
