import Link from "next/link";
import { MoonStar, Sparkles } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/cristais", label: "Cristais" },
  { href: "/tarot", label: "Tarot" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/40 bg-white/5 shadow-aura transition group-hover:border-gold-200/80">
            <MoonStar className="h-5 w-5 text-gold-200" />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold tracking-wide text-white">
              LuzComAromas
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-gold-200/70">
              Oraculo
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2 text-sm text-amethyst-100/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/tarot"
          className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-midnight shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-200 lg:flex"
        >
          <Sparkles className="h-4 w-4" />
          Tirar uma carta
        </Link>
      </nav>
    </header>
  );
}
