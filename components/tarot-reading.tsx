"use client";

import { useMemo, useState } from "react";
import { Flame, RotateCcw, Shuffle, Sparkles } from "lucide-react";
import { cards } from "@/lib/content";

const spreads = [
  {
    id: "daily",
    name: "1 carta",
    subtitle: "Chama do dia",
    count: 1,
    positions: ["Mensagem central"]
  },
  {
    id: "three",
    name: "3 cartas",
    subtitle: "Passado · Presente · Caminho",
    count: 3,
    positions: ["O que pede acolhimento", "O que está aceso agora", "O gesto de integração"]
  },
  {
    id: "five",
    name: "5 cartas",
    subtitle: "Ritual completo",
    count: 5,
    positions: ["Chama", "Sombra", "Aroma", "Conselho", "Integração"]
  }
] as const;

type Spread = (typeof spreads)[number];
type TarotCard = (typeof cards)[number];

function shuffleCards() {
  return [...cards]
    .map((card) => ({ card, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ card }) => card);
}

export function TarotReading() {
  const [spread, setSpread] = useState<Spread>(spreads[1]);
  const [deck, setDeck] = useState<TarotCard[]>(() => shuffleCards());
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [revealed, setRevealed] = useState(false);

  const selectedNames = useMemo(
    () => new Set(selectedCards.map((card) => card.name)),
    [selectedCards]
  );

  const remainingToChoose = spread.count - selectedCards.length;
  const canReveal = selectedCards.length === spread.count && !revealed;

  function resetReading(nextSpread = spread) {
    setSpread(nextSpread);
    setDeck(shuffleCards());
    setSelectedCards([]);
    setRevealed(false);
  }

  function selectCard(card: TarotCard) {
    if (revealed || selectedCards.length >= spread.count || selectedNames.has(card.name)) {
      return;
    }

    setSelectedCards((current) => [...current, card]);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mystic-border bg-surface p-5 shadow-aura backdrop-blur">
        <div className="border border-border-subtle bg-gradient-to-br from-deep-soft/70 via-deep to-black/40 p-6 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="eyebrow text-golden">Escolha sua tiragem</p>
              <h2 className="mt-3 font-serif text-4xl font-light tracking-[0.04em] text-text-primary">
                Acenda o jogo que conversa com o seu momento.
              </h2>
              <p className="mt-5 text-sm leading-7 tracking-[0.04em] text-text-secondary">
                Selecione o tipo de leitura, embaralhe o baralho e toque nas cartas
                que chamarem por você. A mensagem aparece quando a mesa estiver completa.
              </p>

              <div className="mt-8 grid gap-3">
                {spreads.map((item) => {
                  const active = item.id === spread.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => resetReading(item)}
                      className={`border px-5 py-4 text-left transition ${
                        active
                          ? "border-golden bg-golden/10 text-text-primary shadow-gold"
                          : "border-border-subtle bg-white/[0.03] text-text-secondary hover:border-golden/50 hover:text-text-primary"
                      }`}
                    >
                      <span className="block font-serif text-2xl font-light">{item.name}</span>
                      <span className="eyebrow mt-2 block text-golden">{item.subtitle}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => resetReading()}
                className="mt-6 inline-flex items-center justify-center gap-3 border border-golden bg-golden px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-deep transition hover:-translate-y-0.5 hover:bg-golden-light"
              >
                <Shuffle className="h-4 w-4" />
                Embaralhar
              </button>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-4 border-b border-border-subtle pb-5 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow text-text-muted">Mesa ritual</p>
                  <h3 className="mt-2 font-serif text-3xl font-light text-text-primary">
                    {revealed
                      ? "Sua leitura foi revelada"
                      : remainingToChoose > 0
                        ? `Escolha mais ${remainingToChoose} ${remainingToChoose === 1 ? "carta" : "cartas"}`
                        : "Mesa completa"}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    disabled={!canReveal}
                    onClick={() => setRevealed(true)}
                    className="inline-flex items-center gap-2 border border-golden/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-golden transition enabled:hover:bg-golden enabled:hover:text-deep disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <Sparkles className="h-4 w-4" />
                    Revelar
                  </button>
                  <button
                    type="button"
                    onClick={() => resetReading()}
                    className="inline-flex items-center gap-2 border border-border-subtle px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary transition hover:border-golden/50 hover:text-golden"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reiniciar
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {spread.positions.map((position, index) => {
                  const card = selectedCards[index];

                  return (
                    <div key={position} className="min-h-64 border border-border-gold bg-black/20 p-3">
                      <p className="eyebrow mb-3 text-center text-golden">{position}</p>
                      {card ? (
                        <div className="relative flex h-full min-h-52 flex-col justify-between overflow-hidden border border-border-subtle bg-deep/70 p-4 text-center">
                          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-30`} />
                          <div className="star-field absolute inset-0 opacity-[0.15]" />
                          {revealed ? (
                            <div className="relative flex h-full flex-col justify-between gap-5">
                              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-golden/30 bg-white/10 text-golden">
                                <card.Icon className="h-8 w-8" />
                              </div>
                              <div>
                                <p className="eyebrow text-golden">Arcano {card.number}</p>
                                <h4 className="mt-1 font-serif text-2xl font-light text-text-primary">{card.name}</h4>
                                <p className="mt-2 text-xs leading-5 text-text-secondary">{card.message}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="relative grid h-full min-h-44 place-items-center">
                              <div className="grid h-24 w-24 place-items-center rounded-full border border-golden/30 bg-golden/10 text-golden">
                                <Flame className="h-10 w-10 animate-flicker" />
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid h-full min-h-52 place-items-center border border-dashed border-border-subtle text-center">
                          <span className="px-4 font-serif text-lg italic text-text-muted">
                            Aguardando o chamado
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-text-muted">Baralho oculto</p>
                <p className="mt-2 text-sm text-text-secondary">
                  As cartas permanecem em mistério. Toque pelas costas e revele apenas quando a mesa estiver completa.
                </p>
              </div>
              <p className="eyebrow text-golden">
                {selectedCards.length}/{spread.count} escolhidas
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-11">
              {deck.map((card, index) => {
                const selected = selectedNames.has(card.name);
                const disabled = revealed || selected || selectedCards.length >= spread.count;

                return (
                  <button
                    key={card.name}
                    type="button"
                    disabled={disabled}
                    onClick={() => selectCard(card)}
                    className={`group relative min-h-32 overflow-hidden border p-3 transition ${
                      selected
                        ? "border-golden bg-golden/15 text-golden"
                        : "border-border-gold bg-deep/75 text-text-secondary hover:-translate-y-1 hover:border-golden hover:text-golden"
                    } disabled:cursor-not-allowed disabled:opacity-55`}
                    aria-label={`Selecionar carta ${index + 1}`}
                  >
                    <div className="star-field absolute inset-0 opacity-[0.15]" />
                    <div className="relative flex h-full min-h-24 flex-col items-center justify-between">
                      <span className="text-[0.6rem] uppercase tracking-[0.22em]">{selected ? "Escolhida" : "Carta"}</span>
                      <Flame className="h-8 w-8 transition group-hover:scale-110" />
                      <span className="font-serif text-lg">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {revealed && (
            <div className="mt-10 border border-golden/25 bg-golden/10 p-6">
              <p className="eyebrow text-golden">Integração da leitura</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {selectedCards.map((card, index) => (
                  <article key={card.name} className="border border-border-subtle bg-black/15 p-5">
                    <p className="eyebrow text-text-muted">
                      {spread.positions[index]} · {card.collection}
                    </p>
                    <h4 className="mt-2 font-serif text-2xl font-light text-text-primary">{card.archetype}</h4>
                    <p className="mt-3 font-serif text-xl italic leading-8 text-text-primary/85">
                      {card.message}
                    </p>
                    <p className="mt-4 border-t border-border-subtle pt-4 text-xs uppercase leading-6 tracking-[0.18em] text-golden/85">
                      {card.ritual}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
