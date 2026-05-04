# AGENTS.md

## Cursor Cloud specific instructions

Este repositório é uma aplicação web de **Cartas de Tarot** (Arcanos Maiores) 100% offline, sem dependências externas.

### Como rodar

```bash
python3 server.py
```

O servidor inicia em `http://localhost:3000`. Serve os arquivos estáticos da pasta `public/`.

### Estrutura

- `server.py` — Servidor HTTP (Python stdlib, zero dependências)
- `public/index.html` — Interface principal
- `public/style.css` — Estilos com tema místico
- `public/cartas.js` — Dados dos 22 Arcanos Maiores em português
- `public/app.js` — Lógica de embaralhar, tirar cartas e exibir leituras

### Notas

- **Não precisa de `npm install` ou pip install** — usa apenas Python stdlib (`http.server`).
- Node.js **não está instalado** no ambiente. O servidor usa Python 3.
- O `package.json` existe apenas como metadata; os scripts `start`/`dev` chamam `python3 server.py`.
