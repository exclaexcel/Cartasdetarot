import Link from "next/link";
import { ArrowRight, Flame, Gem, MoonStar, Sparkles, Star, WandSparkles } from "lucide-react";
import { homeBenefits, trustSignals } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 star-field opacity-30" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-golden/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 border border-golden/30 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-golden">
              <Sparkles size={16} />
              Oráculo sensorial LuzComAromas
            </div>
            <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-[0.06em] text-text-primary sm:text-7xl lg:text-8xl">
              Oráculo
              <span className="block text-golden">
                LuzComAromas
              </span>
            </h1>
            <div className="section-divider my-8" />
            <p className="max-w-2xl font-serif text-2xl font-light italic leading-10 text-text-secondary">
              Cada carta, um aroma simbólico. Cada cristal, uma intenção.
              Um portal separado, mas aceso dentro do mesmo universo de cuidado da LuzComAromas.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tarot"
                className="btn-primary group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm"
              >
                Iniciar tiragem
                <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </Link>
              <Link
                href="/cristais"
                className="btn-outline inline-flex items-center justify-center gap-3 px-8 py-4 text-sm"
              >
                Ver cristais
                <Gem size={18} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {trustSignals.map(({ value, label }) => (
                <div key={label} className="border border-golden/20 bg-deep-soft/40 p-4 text-center backdrop-blur">
                  <strong className="block font-serif text-3xl font-light text-golden">{value}</strong>
                  <span className="text-[0.62rem] uppercase tracking-[0.28em] text-text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
            <div className="absolute inset-8 bg-gradient-to-br from-golden/20 via-intuicao/20 to-black blur-2xl" />
            <div className="mystic-border relative flex h-full flex-col justify-between overflow-hidden bg-bg-card p-7 shadow-gold backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,168,74,0.18),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(154,106,141,0.2),transparent_34%)]" />
              <div className="relative flex justify-between text-golden">
                <Star className="fill-golden/50" />
                <MoonStar size={36} />
              </div>
              <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-full border border-golden/30 bg-black/20">
                <div className="absolute h-52 w-52 rounded-full border border-intuicao/30" />
                <div className="absolute h-36 w-36 rounded-full border border-golden/20" />
                <Flame className="animate-flicker text-golden drop-shadow-[0_0_24px_rgba(201,168,74,0.7)]" size={84} />
              </div>
              <div className="relative border border-golden/15 bg-black/25 p-5">
                <p className="font-serif text-3xl font-light text-text-primary">A chama sabe onde tocar.</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Um ritual digital para acolher perguntas, revelar símbolos e guiar pequenos gestos de presença.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.38em] text-golden">Experiência do portal</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-text-primary sm:text-6xl">Aromas que acendem momentos. Cartas que acendem respostas.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeBenefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="mystic-border bg-white/[0.045] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-8 grid h-14 w-14 place-items-center border border-golden/25 bg-golden/10 text-golden">
                  <Icon size={26} />
                </div>
                <h3 className="font-serif text-3xl font-light text-text-primary">{title}</h3>
                <p className="mt-4 leading-7 text-text-secondary">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden border border-golden/20 bg-gradient-to-r from-deep-soft via-deep to-black p-8 shadow-gold sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-golden">Convite</p>
              <h2 className="mt-4 font-serif text-4xl font-light text-text-primary sm:text-5xl">Comece pela carta que chama por você.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                O Tarot agora nasce do mesmo repertório da marca: chama, aroma, pausa, intenção e retorno para casa em si.
              </p>
            </div>
            <Link
              href="/tarot"
              className="btn-primary inline-flex items-center justify-center gap-3 px-7 py-4"
            >
              Abrir Tarot
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
