import { ArrowRight, Gem, Sparkles } from "lucide-react";
import { crystals } from "@/lib/content";

export default function CrystalsPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 star-field opacity-20" />
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-sm text-gold-200">
              <Gem className="h-4 w-4" />
              Catálogo energético
            </span>
            <h1 className="mt-8 font-serif text-5xl leading-tight text-white sm:text-6xl">
              Cristais escolhidos para alinhar intenção, beleza e proteção.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-amethyst-100/80">
              Uma seleção elegante para quem deseja transformar rituais em
              momentos de presença. Cada pedra apresenta propriedades,
              intenções de uso e uma aura visual inspirada em joias naturais.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {crystals.map((crystal) => (
            <article
              className="mystic-border group overflow-hidden rounded-[2rem] bg-white/[0.045] p-6 shadow-aura backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              key={crystal.name}
            >
              <div
                className={`h-36 rounded-[1.5rem] bg-gradient-to-br ${crystal.gradient} opacity-90 shadow-gold transition duration-300 group-hover:scale-[1.02]`}
              />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-gold-200/70">
                    {crystal.chakra}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-white">
                    {crystal.name}
                  </h2>
                </div>
                <Sparkles className="mt-2 h-5 w-5 text-gold-400" />
              </div>
              <p className="mt-4 leading-7 text-amethyst-100/75">
                {crystal.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {crystal.properties.map((property) => (
                  <span
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-gold-200/90"
                    key={property}
                  >
                    {property}
                  </span>
                ))}
              </div>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-200 transition hover:text-white"
                href="#consulta"
              >
                Ver ritual sugerido <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24" id="consulta">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-amethyst-900/80 to-black/60 p-8 text-center shadow-gold sm:p-12">
          <p className="text-sm uppercase tracking-[0.34em] text-gold-200">
            Curadoria LuzComAromas
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white">
            Monte um kit energético para sua fase atual.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-amethyst-100/75">
            Combine cristais, aromas e cartas simbólicas para criar um ritual
            visualmente encantador e fácil de recomendar dentro da experiência
            do app.
          </p>
        </div>
      </section>
    </main>
  );
}
