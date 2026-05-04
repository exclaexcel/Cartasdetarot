import Link from "next/link";
import { ArrowRight, Gem, MoonStar, Sparkles, Star, WandSparkles } from "lucide-react";
import { homeBenefits, trustSignals } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 star-field opacity-30" />
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amethyst-500/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/[0.04] px-4 py-2 text-sm text-gold-200">
              <Sparkles size={16} />
              Portal de autocuidado, tarot e cristais
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Oráculo
              <span className="block bg-gradient-to-r from-gold-200 via-white to-amethyst-300 bg-clip-text text-transparent">
                LuzComAromas
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/80 sm:text-xl">
              Uma jornada digital magnética para quem busca clareza, acolhimento e beleza ritualística. Descubra cristais,
              explore tiragens visuais e transforme intenção em ação.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tarot"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 px-7 py-4 font-semibold text-midnight shadow-gold transition hover:scale-[1.02]"
              >
                Iniciar tiragem
                <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </Link>
              <Link
                href="/cristais"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-gold-400/60 hover:bg-white/[0.1]"
              >
                Ver cristais
                <Gem size={18} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {trustSignals.map(({ value, label }) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-black/20 p-4 text-center backdrop-blur">
                  <strong className="block font-serif text-3xl text-gold-200">{value}</strong>
                  <span className="text-xs uppercase tracking-[0.28em] text-purple-100/60">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-amethyst-500/30 via-gold-400/10 to-black blur-2xl" />
            <div className="mystic-border relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-eclipse/80 p-7 shadow-aura backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(248,230,160,0.22),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(138,79,255,0.24),transparent_34%)]" />
              <div className="relative flex justify-between text-gold-200">
                <Star className="fill-gold-200/50" />
                <MoonStar size={36} />
              </div>
              <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-full border border-gold-200/30 bg-black/20">
                <div className="absolute h-52 w-52 rounded-full border border-amethyst-300/30" />
                <div className="absolute h-36 w-36 rounded-full border border-gold-200/20" />
                <WandSparkles className="text-gold-200 drop-shadow-[0_0_24px_rgba(248,230,160,0.7)]" size={84} />
              </div>
              <div className="relative rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="font-serif text-3xl text-white">Sua intuição já sabe o caminho.</p>
                <p className="mt-2 text-sm leading-6 text-purple-100/70">
                  O design combina atmosfera premium, foco em conversão e uma navegação leve para jornadas espirituais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.38em] text-gold-200">Experiência do portal</p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-6xl">Beleza, cuidado e conversão em uma só jornada.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeBenefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="mystic-border rounded-[2rem] bg-white/[0.045] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-200/20 to-amethyst-500/20 text-gold-200">
                  <Icon size={26} />
                </div>
                <h3 className="font-serif text-3xl text-white">{title}</h3>
                <p className="mt-4 leading-7 text-purple-100/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-gold-400/20 bg-gradient-to-r from-amethyst-900/80 via-eclipse to-black p-8 shadow-gold sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm uppercase tracking-[0.38em] text-gold-200">Convite</p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Comece pela carta que chama por você.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-purple-100/75">
                A tiragem foi pensada para criar expectativa visual, sensação tátil e conexão emocional desde o primeiro clique.
              </p>
            </div>
            <Link
              href="/tarot"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-midnight transition hover:bg-gold-200"
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
