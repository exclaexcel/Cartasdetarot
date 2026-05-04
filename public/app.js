document.addEventListener('DOMContentLoaded', () => {
  const btnEmbaralhar = document.getElementById('btn-embaralhar');
  const btnTirar = document.getElementById('btn-tirar');
  const btnTres = document.getElementById('btn-tres');
  const btnReset = document.getElementById('btn-reset');
  const mesa = document.getElementById('mesa');
  const instrucao = document.getElementById('instrucao');
  const leitura = document.getElementById('leitura');

  let baralho = [];
  let embaralhado = false;

  criarEstrelas();

  function criarEstrelas() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
      star.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(star);
    }
  }

  function embaralhar(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function cartaInvertida() {
    return Math.random() < 0.3;
  }

  btnEmbaralhar.addEventListener('click', () => {
    baralho = embaralhar(ARCANOS_MAIORES);
    embaralhado = true;

    instrucao.querySelector('.cristal').textContent = '🃏';
    instrucao.querySelector('p').textContent = 'Cartas embaralhadas! Escolha tirar 1 ou 3 cartas...';
    instrucao.classList.add('embaralhando');
    setTimeout(() => instrucao.classList.remove('embaralhando'), 500);

    btnTirar.disabled = false;
    btnTres.disabled = false;
  });

  function criarCartaDOM(carta, invertida) {
    const container = document.createElement('div');
    container.className = 'carta-container' + (invertida ? ' carta-invertida' : '');

    container.innerHTML = `
      <div class="carta">
        <div class="carta-verso">
          <div class="carta-verso-inner">
            <span class="verso-simbolo">✨</span>
            <span class="verso-texto">Tarot</span>
          </div>
        </div>
        <div class="carta-frente">
          <span class="numero">${carta.numero}</span>
          <span class="simbolo">${carta.simbolo}</span>
          <span class="nome">${carta.nome}</span>
          <span class="elemento">${carta.elemento}</span>
          <span class="tag-invertida">⟲ Invertida</span>
        </div>
      </div>
    `;

    return container;
  }

  function mostrarLeitura(cartas, posicoes) {
    leitura.innerHTML = '';
    leitura.style.display = 'block';

    cartas.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'leitura-carta';

      const significadoTexto = item.invertida ? item.carta.invertida : item.carta.significado;
      const posLabel = posicoes ? posicoes[idx] : '';

      div.innerHTML = `
        <div class="leitura-header">
          ${posLabel ? `<span class="posicao">${posLabel}</span>` : ''}
          <span class="leitura-simbolo">${item.carta.simbolo}</span>
          <h3>${item.carta.nome} (${item.carta.numero})${item.invertida ? ' ⟲' : ''}</h3>
        </div>
        <p class="leitura-significado">${significadoTexto}</p>
        <div class="leitura-palavras">
          ${item.carta.palavrasChave.map(p => `<span class="palavra-chave">${p}</span>`).join('')}
        </div>
      `;

      leitura.appendChild(div);
    });
  }

  function tirarCartas(quantidade) {
    if (!embaralhado) return;

    mesa.innerHTML = '';
    leitura.style.display = 'none';
    leitura.innerHTML = '';

    const selecionadas = baralho.splice(0, quantidade);
    const posicoes = quantidade === 3 ? ['Passado', 'Presente', 'Futuro'] : null;
    const cartasInfo = [];

    selecionadas.forEach((carta, idx) => {
      const invertida = cartaInvertida();
      cartasInfo.push({ carta, invertida });

      const wrapper = document.createElement('div');
      wrapper.style.textAlign = 'center';

      if (posicoes) {
        const label = document.createElement('div');
        label.className = 'tirada-label';
        label.innerHTML = `<span>${posicoes[idx]}</span>`;
        wrapper.appendChild(label);
      }

      const cartaDOM = criarCartaDOM(carta, invertida);
      wrapper.appendChild(cartaDOM);
      mesa.appendChild(wrapper);

      setTimeout(() => {
        cartaDOM.querySelector('.carta').classList.add('virada');
      }, 800 + idx * 400);
    });

    setTimeout(() => {
      mostrarLeitura(cartasInfo, posicoes);
    }, 800 + quantidade * 400 + 300);

    btnEmbaralhar.style.display = 'none';
    btnTirar.style.display = 'none';
    btnTres.style.display = 'none';
    btnReset.style.display = 'inline-block';
  }

  btnTirar.addEventListener('click', () => tirarCartas(1));
  btnTres.addEventListener('click', () => tirarCartas(3));

  btnReset.addEventListener('click', () => {
    mesa.innerHTML = '';
    leitura.style.display = 'none';
    leitura.innerHTML = '';
    embaralhado = false;

    mesa.innerHTML = `
      <div class="instrucao" id="instrucao">
        <div class="cristal">🔮</div>
        <p>Embaralhe as cartas e concentre-se na sua pergunta...</p>
      </div>
    `;

    btnEmbaralhar.style.display = 'inline-block';
    btnTirar.style.display = 'inline-block';
    btnTres.style.display = 'inline-block';
    btnReset.style.display = 'none';
    btnTirar.disabled = true;
    btnTres.disabled = true;
  });
});
