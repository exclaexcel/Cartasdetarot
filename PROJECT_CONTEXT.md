# Contexto do projeto - Oraculo LuzComAromas

Este documento resume a rodada inicial de desenvolvimento para facilitar a continuidade em proximas sessoes.

## Visao geral

O **Oraculo LuzComAromas** e um web app separado, mas visual e conceitualmente integrado ao universo da marca LuzComAromas.

Conceito expandido para as proximas rodadas: **Bruxa dos Dados**.

Este conceito une:

- logica: organizacao, processos, dados, planilhas e tomada de decisao;
- intuicao: magia, rituais, pausas estrategicas, cristais, fases da lua e aromas.

O app deve parecer uma ponte entre clareza operacional e escuta interna: uma experiencia premium para transformar escolhas em pequenos rituais de presenca.

URL de producao:

- https://cartasdetarot.vercel.app

Site principal de referencia:

- https://luzcomaromas.vercel.app

Repositorio de referencia usado para identidade da marca:

- https://github.com/exclaexcel/LuzComAromas_.git

Repositorio do app:

- https://github.com/exclaexcel/Cartasdetarot

## Stack atual

- Next.js 14 com App Router
- React 18
- TypeScript
- Tailwind CSS 3
- Lucide React
- Vercel para deploy

Scripts principais:

```bash
npm install
npm run dev
npm run build
```

## Rotas

- `/` - Home comercial/ritualistica do Oraculo.
- `/cristais` - Catalogo de cristais com imagens e rituais.
- `/tarot` - Experiencia interativa de tiragem de Tarot.

## Identidade visual aplicada

A identidade foi alinhada ao repositorio LuzComAromas.

Principais tokens/padroes:

- Roxo profundo: `#1E1035`
- Fundo escuro: `#0a041a`
- Dourado: `#C9A84A`
- Dourado claro: `#E8CC6C`
- Texto principal: `#EDE6F7`
- Colecoes:
  - Serenidade: `#9B6FC4`
  - Energia: `#C97A4A`
  - Intuicao: `#9A6A8D`
  - Purificacao: `#6FA88A`

Tipografia:

- Serifada: Cormorant Garamond
- Sans/display: Raleway e Montserrat

Linguagem de marca:

- "chama"
- "intencao"
- "ritual"
- "aroma"
- "presenca"
- "pausa"
- "voltar para casa em si"

Tom de voz:

- sensorial, acolhedor e ritualistico;
- evitar linguagem generica/cliche de Tarot;
- conectar sutilmente misticismo e mundo real/corporativo;
- relacionar leituras a gestos simples de autocuidado: acender uma vela, organizar o ambiente, fazer uma pausa estrategica, preparar um cafe de qualidade;
- quando fizer sentido, usar referencias a processos, dados e decisao sem quebrar a atmosfera mistica.

Estilo visual:

- fundo roxo profundo e preto;
- detalhes dourados;
- bordas finas;
- CTAs estritamente retangulares, com `rounded-none`;
- nao usar bordas arredondadas em botoes/CTAs principais;
- atmosfera mistica, sensorial e premium;
- cartas/cristais tratados como extensoes de rituais.

Tokens visuais obrigatorios:

- Fundo principal escuro: `#0a041a`
- Roxo profundo: `#1E1035`
- Dourado: `#C9A84A`
- Dourado claro: `#E8CC6C`
- Texto principal lavanda: `#EDE6F7`
- Serenidade: `#9B6FC4`
- Energia: `#C97A4A`
- Intuicao: `#9A6A8D`
- Purificacao: `#6FA88A`

Regras tecnicas/design system:

- usar Server Components por padrao;
- usar `"use client"` somente quando houver hooks/interatividade;
- manter TypeScript rigoroso;
- nao usar `any`; criar interfaces/tipos para dados;
- usar Tailwind CSS e Lucide React;
- priorizar transicoes cinematograficas suaves, fade-ins e glow sutil;
- preservar misterio: cartas nao devem aparecer como catalogo aberto.

## Funcionalidades implementadas

### Home

Arquivo principal:

- `app/page.tsx`

Inclui:

- Hero com marca Oraculo LuzComAromas.
- CTAs para Tarot e Cristais.
- Indicadores: 22 Arcanos Maiores, 4 colecoes-guia, 1 ritual por vez.
- Secoes de beneficios alinhadas a marca.
- Link de acesso ao site principal LuzComAromas no header/footer.

### Cristais

Arquivo principal:

- `app/cristais/page.tsx`

Dados:

- `lib/content.ts`

Cristais atuais:

- Ametista - Colecao Intuicao
- Quartzo Rosa - Colecao Serenidade
- Citrino - Colecao Energia
- Obsidiana Negra - Colecao Purificacao
- Selenita - Colecao Purificacao
- Olho de Tigre - Colecao Energia

Cada card possui:

- imagem ilustrativa;
- credito/link da imagem;
- colecao associada;
- descricao;
- ritual sugerido;
- propriedades.

Imagens:

- Fonte: Wikimedia Commons.
- Implementacao: `next/image`.
- Configuracao de dominio externo: `next.config.mjs`.

Observacao: as imagens sao boas para uma primeira versao. Para uma identidade mais premium, recomenda-se produzir imagens autorais ou gerar uma colecao propria no estilo LuzComAromas.

### Tarot

Arquivos principais:

- `app/tarot/page.tsx`
- `components/tarot-reading.tsx`
- `lib/content.ts`

O Tarot possui os **22 Arcanos Maiores**, reinterpretados para o universo LuzComAromas.

Cada Arcano possui:

- numero;
- nome;
- arquetipo;
- colecao associada;
- mensagem;
- ritual;
- gradiente visual;
- icone Lucide.

Experiencia interativa atual:

1. Usuario escolhe a tiragem:
   - 1 carta: Chama do dia;
   - 3 cartas: Passado / Presente / Caminho;
   - 5 cartas: Ritual completo.
2. Usuario clica em **Embaralhar**.
3. Baralho aparece oculto com 22 cartas numeradas.
4. Usuario escolhe as cartas pelas costas.
5. Cartas ficam ocultas na mesa ate completar a tiragem.
6. Usuario clica em **Revelar**.
7. O app exibe os Arcanos, mensagens, colecoes e rituais correspondentes.

Decisao importante:

- A pedido da usuaria, a experiencia deve preservar misterio.
- Os 22 Arcanos nao devem aparecer abertos como catalogo publico.
- Nomes/mensagens/rituais aparecem somente depois da revelacao da tiragem.

## Componentes compartilhados

- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/tarot-reading.tsx`

## Arquivos de configuracao relevantes

- `package.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `tsconfig.json`
- `next.config.mjs`
- `app/globals.css`
- `global.d.ts`
- `next-env.d.ts`

## Deploy

Deploy atual em producao:

- https://cartasdetarot.vercel.app

O projeto esta integrado a Vercel via GitHub. Pushes para `main` disparam deploy de producao.

Importante:

- Alguns previews da Vercel podem aparecer protegidos por login.
- A URL publica de producao e `https://cartasdetarot.vercel.app`.

## Commits/entregas principais

Principais entregas feitas nesta rodada:

1. Criacao do app Next.js/Tailwind.
2. Deploy inicial na Vercel.
3. Alinhamento com identidade LuzComAromas.
4. Tarot com 22 Arcanos Maiores.
5. Tiragem interativa com 1, 3 e 5 cartas.
6. Remocao do catalogo aberto de Arcanos para manter misterio.
7. Imagens nos cards de cristais com creditos.

## Validacoes realizadas

O comando abaixo foi rodado com sucesso apos as principais mudancas:

```bash
npm run build
```

Tambem foram usados:

```bash
git diff --check
```

## Pontos de atencao para proximas rodadas

### UX/UI

- Melhorar animacao de virada das cartas.
- Adicionar transicao mais cinematografica no reveal.
- Criar estado visual para carta selecionada na mesa com mais impacto.
- Melhorar feedback mobile ao tocar nas cartas.
- Talvez reduzir textos longos em telas pequenas.

### Tarot

- Criar interpretacao combinada para a tiragem inteira.
- Salvar leitura do dia no localStorage.
- Adicionar "Carta do dia".
- Recomendar uma vela/colecao da LuzComAromas conforme carta dominante.
- Criar compartilhamento da leitura.
- Adicionar audio/ambiencia opcional.

### Cristais

- Adicionar filtros por colecao/intencao.
- Criar pagina individual para cada cristal.
- Recomendar combinacoes: cristal + vela + arcano.
- Considerar imagens autorais para maior consistencia visual.

### Integracao com site principal

- Hoje o app e separado.
- Existe link para `https://luzcomaromas.vercel.app`.
- Futuramente pode ser integrado como:
  - subrota no site principal;
  - subdominio;
  - link no menu do site LuzComAromas.

### Conteudo/marca

- Manter tom sensorial, acolhedor e ritualistico.
- Evitar linguagem generica demais de Tarot.
- Preferir associar cada leitura a um gesto simples e possivel.

## Estado atual esperado

Ao abrir `/tarot`, o usuario deve ver:

- introducao do Tarot LuzComAromas;
- escolha de tiragem;
- botao Embaralhar;
- mesa ritual vazia;
- baralho oculto;
- cartas so reveladas apos completar a tiragem e clicar em Revelar.

Ao abrir `/cristais`, o usuario deve ver:

- cards com imagens;
- creditos das imagens;
- descricao e ritual para cada cristal.

## Proxima melhor evolucao sugerida

Implementar uma revelacao mais premium:

- animacao de virar carta;
- brilho/dourado crescendo;
- mensagem final combinada;
- recomendacao de vela/colecao LuzComAromas;
- opcao "salvar minha leitura de hoje".
