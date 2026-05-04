import { cards, ritualSteps } from "@/lib/content";
import { TarotReading } from "@/components/tarot-reading";
import { Flame, Moon, Stars } from "lucide-react";

export default function TarotPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 text-golden">
              <Moon className="h-4 w-4" />
              Tarot LuzComAromas
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-light leading-tight tracking-[0.04em] text-text-primary sm:text-6xl">
              Os 22 Arcanos Maiores como chamas de sabedoria.
            </h1>
            <div className="section-divider my-8" />
            <p className="max-w-xl font-sans text-base font-light leading-8 tracking-[0.05em] text-text-secondary">
              Cada carta foi reinterpretada no universo LuzComAromas: vela,
              aroma, presença e intenção. Escolha pelo chamado visual e use a
              mensagem como um pequeno ritual para o dia.
            </p>
          </div>

          <div className="mystic-border bg-surface p-5 shadow-aura backdrop-blur">
            <div className="border border-border-subtle bg-gradient-to-br from-deep-soft/70 via-deep to-black/40 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow text-text-muted">
                    Mesa viva
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-light text-text-primary">Escolha sua tiragem</h2>
                </div>
                <Stars className="h-10 w-10 text-golden" />
              </div>

              <p className="mt-6 text-sm leading-7 tracking-[0.05em] text-text-secondary">
                Defina a profundidade da leitura, embaralhe os 22 Arcanos Maiores
                e toque nas cartas que chamarem por você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TarotReading />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="eyebrow text-golden">Baralho completo</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-[0.04em] text-text-primary sm:text-5xl">
            22 caminhos para escutar a própria chama.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.name}
              className="group border border-border-gold bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-golden/70 hover:bg-white/[0.08]"
            >
              <div className={`mb-5 grid h-24 place-items-center bg-gradient-to-br ${card.gradient}`}>
                <card.Icon className="h-10 w-10 text-golden-light drop-shadow-[0_0_18px_rgba(201,168,74,0.45)]" />
              </div>
              <p className="eyebrow text-text-muted">Arcano {card.number} · {card.collection}</p>
              <h3 className="mt-2 font-serif text-2xl font-light text-text-primary">{card.name}</h3>
              <p className="mt-2 font-serif text-lg italic leading-7 text-text-secondary">{card.message}</p>
              <p className="mt-4 border-t border-border-subtle pt-4 text-xs uppercase tracking-[0.18em] text-golden/80">
                {card.ritual}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {ritualSteps.map(({ icon: Icon, title, description }, index) => (
            <div className="border border-border-subtle bg-white/[0.04] p-6" key={title}>
              <Icon className="h-7 w-7 text-golden" />
              <span className="font-serif text-4xl text-golden">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-2xl font-light text-text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-border-gold bg-gradient-to-r from-golden/15 via-intuicao/10 to-transparent p-8 text-center">
          <Flame className="mx-auto h-10 w-10 text-golden" />
          <h2 className="mt-4 font-serif text-4xl font-light text-text-primary">Pronta para receber o recado?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
            A próxima camada pode trazer embaralhamento, revelação por clique,
            carta do dia e recomendação de vela da coleção correspondente.
          </p>
        </div>
      </section>
    </main>
  );
}
