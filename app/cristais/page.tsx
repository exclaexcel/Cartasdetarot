import { ArrowRight, Gem, Sparkles } from "lucide-react";
import { crystals } from "@/lib/content";

export default function CrystalsPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 star-field opacity-20" />
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-golden/30 bg-golden/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-golden">
              <Gem className="h-4 w-4" />
              Catálogo energético
            </span>
            <h1 className="mt-8 font-serif text-5xl font-light leading-tight tracking-[0.03em] text-text-primary sm:text-6xl">
              Cristais escolhidos como extensão das coleções LuzComAromas.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 tracking-[0.04em] text-text-secondary">
              Cada pedra conversa com um estado de alma: Serenidade, Energia,
              Intuição ou Purificação. A proposta é combinar cristal, aroma e
              intenção em um ritual simples, bonito e possível.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {crystals.map((crystal) => (
            <article
              className="mystic-border group overflow-hidden bg-bg-card/80 p-6 shadow-aura backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-bg-surface"
              key={crystal.name}
            >
              <div
                className={`h-36 rounded-[1.5rem] bg-gradient-to-br ${crystal.gradient} opacity-90 shadow-gold transition duration-300 group-hover:scale-[1.02]`}
              />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-golden/70">
                    {crystal.chakra}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-text-primary">
                    {crystal.name}
                  </h2>
                </div>
                <Sparkles className="mt-2 h-5 w-5 text-golden" />
              </div>
              <p className="mt-4 text-sm leading-7 tracking-[0.04em] text-text-secondary">
                {crystal.description}
              </p>
              <p className="mt-4 border-l border-golden/35 pl-4 font-serif text-lg italic leading-7 text-text-primary/85">
                {crystal.ritual}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {crystal.properties.map((property) => (
                  <span
                    className="border border-golden/20 bg-black/15 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-golden/90"
                    key={property}
                  >
                    {property}
                  </span>
                ))}
              </div>
              <a
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-golden transition hover:text-text-primary"
                href="#consulta"
              >
                Ver ritual sugerido <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24" id="consulta">
        <div className="mx-auto max-w-6xl border border-golden/20 bg-gradient-to-br from-bg-section-mid to-bg-deep p-8 text-center shadow-gold sm:p-12">
          <p className="text-sm uppercase tracking-[0.34em] text-golden">
            Curadoria LuzComAromas
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-text-primary">
            Monte um kit energético para sua fase atual.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-secondary">
            Combine cristais, aromas e cartas simbólicas para criar um ritual
            visualmente encantador e fácil de recomendar dentro da experiência
            do app.
          </p>
        </div>
      </section>
    </main>
  );
}
