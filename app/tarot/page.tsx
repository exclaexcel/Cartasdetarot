import { cards, ritualSteps } from "@/lib/content";
import { Moon, Sparkles, Stars } from "lucide-react";

export default function TarotPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-200">
              <Moon className="h-4 w-4" />
              Tiragem intuitiva
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Escolha três cartas e deixe o símbolo conversar com a sua alma.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-amethyst-100/80">
              A experiência visual prioriza presença, pausa e encantamento: passado,
              presente e caminho recebem cartas com significados poéticos para guiar uma
              reflexão acolhedora.
            </p>
          </div>

          <div className="mystic-border rounded-[2rem] bg-white/[0.04] p-5 shadow-aura backdrop-blur">
            <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-amethyst-900 via-midnight to-black p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold-200/70">
                    Mesa astral
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-white">Ritual de 3 cartas</h2>
                </div>
                <Stars className="h-10 w-10 text-gold-400" />
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {cards.map((card, index) => (
                  <article
                    className="group relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-gold-400/20 bg-black/30 p-4 transition duration-300 hover:-translate-y-2 hover:border-gold-200/70 hover:shadow-gold"
                    key={card.name}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-35 transition duration-300 group-hover:opacity-55`} />
                    <div className="star-field absolute inset-0 opacity-20" />
                    <div className="relative flex h-full flex-col justify-between rounded-[1.1rem] border border-white/10 bg-midnight/60 p-5 text-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gold-200/70">
                          Carta {index + 1}
                        </p>
                        <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full border border-gold-400/30 bg-white/10 text-gold-200">
                          <card.Icon className="h-12 w-12" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl text-white">{card.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-amethyst-100/75">
                          {card.message}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {ritualSteps.map(({ icon: Icon, title, description }, index) => (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6" key={title}>
              <Icon className="h-7 w-7 text-gold-200" />
              <span className="font-serif text-4xl text-gold-200">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-amethyst-100/70">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-gold-400/20 bg-gradient-to-r from-gold-400/15 via-amethyst-500/10 to-transparent p-8 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-gold-200" />
          <h2 className="mt-4 font-serif text-4xl text-white">Pronta para receber o recado?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-amethyst-100/75">
            Esta versão inicial estabelece a direção visual. A próxima camada pode
            adicionar embaralhamento, revelação por clique e histórico de leituras.
          </p>
        </div>
      </section>
    </main>
  );
}
