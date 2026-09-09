/**
 * APP.JS - LÓGICA E INTERATIVIDADE DO SITE DA CAMPANHA SENAI
 * Integração dos dados do data.js, manipulação do DOM, Chart.js e calculadoras
 */

document.addEventListener('DOMContentLoaded', () => {
  initViewSwitcher();
  initThermometer();
  initImpactCalculator();
  init5W2HTable();
  initCharts();
  initDonationModal();
  initNavbarScroll();
});

/* ==========================================================================
   1. CONTROLE DE VISUALIZAÇÃO (CAMPANHA vs. GESTÃO SENAI)
   ========================================================================== */
function initViewSwitcher() {
  const tabCampanha = document.getElementById('tab-campanha');
  const tabGestao = document.getElementById('tab-gestao');
  const viewCampanha = document.getElementById('view-campanha');
  const viewGestao = document.getElementById('view-gestao');

  function switchView(target) {
    if (target === 'campanha') {
      tabCampanha.classList.add('active');
      tabGestao.classList.remove('active');
      viewCampanha.style.display = 'block';
      viewGestao.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      tabGestao.classList.add('active');
      tabCampanha.classList.remove('active');
      viewCampanha.style.display = 'none';
      viewGestao.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Redesenha gráficos se necessário
      if (window.senaiCharts) {
        Object.values(window.senaiCharts).forEach(chart => chart.resize());
      }
    }
  }

  if (tabCampanha && tabGestao) {
    tabCampanha.addEventListener('click', () => switchView('campanha'));
    tabGestao.addEventListener('click', () => switchView('gestao'));
  }

  // Sub-abas do PODC
  const podcPills = document.querySelectorAll('.podc-pill');
  const podcSections = document.querySelectorAll('.podc-content-section');

  podcPills.forEach(pill => {
    pill.addEventListener('click', () => {
      podcPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const targetId = pill.getAttribute('data-target');
      podcSections.forEach(sec => {
        if (sec.id === targetId) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   2. ANIMAÇÃO DO TERMÔMETRO E CONTADORES
   ========================================================================== */
function initThermometer() {
  const bar = document.getElementById('thermometer-fill');
  const targetPct = SENAI_PROJECT_DATA.controle.percentualGlobal; // 120%

  if (bar) {
    setTimeout(() => {
      // 100% na escala visual equivale a atingir a meta, 120% fica preenchido ao máximo
      bar.style.width = '100%';
    }, 300);
  }

  // Animação de contadores numéricos
  animateNumber('counter-total-kg', 0, 720, 1500, ' kg');
  animateNumber('counter-meta-pct', 0, 120, 1500, '%');
  animateNumber('counter-colaboradores', 0, 320, 1500, '');
  animateNumber('counter-cestas', 0, 72, 1500, '');
}

function animateNumber(elementId, start, end, duration, suffix = '') {
  const el = document.getElementById(elementId);
  if (!el) return;

  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing suave (easeOutQuad)
    const easedProgress = 1 - (1 - progress) * (1 - progress);
    const currentVal = Math.floor(start + range * easedProgress);

    el.innerText = currentVal.toLocaleString('pt-BR') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = end.toLocaleString('pt-BR') + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   3. CALCULADORA DE IMPACTO SOLIDÁRIO
   ========================================================================== */
function initImpactCalculator() {
  const inputKg = document.getElementById('calc-input-kg');
  const resultRefeicoes = document.getElementById('calc-refeicoes');
  const resultCestas = document.getElementById('calc-cestas');
  const resultFamilias = document.getElementById('calc-familias');

  function calculate() {
    const kg = parseFloat(inputKg.value) || 0;
    // 1 kg rende em média 2.5 refeições balanceadas (arroz, feijão, massa)
    const refeicoes = Math.round(kg * 2.5);
    // Cesta básica de 10kg
    const cestas = (kg / 10).toFixed(1);
    // 1 cesta atende uma família de 4 pessoas por ~10 dias
    const familias = Math.floor(kg / 10);

    if (resultRefeicoes) resultRefeicoes.innerText = refeicoes.toLocaleString('pt-BR');
    if (resultCestas) resultCestas.innerText = cestas;
    if (resultFamilias) resultFamilias.innerText = familias;
  }

  if (inputKg) {
    inputKg.addEventListener('input', calculate);
    calculate();
  }
}

/* ==========================================================================
   4. TABELA 5W2H INTERATIVA COM FILTROS
   ========================================================================== */
function init5W2HTable() {
  const tbody = document.getElementById('table-5w2h-body');
  const searchInput = document.getElementById('search-5w2h');
  const filterWho = document.getElementById('filter-who');

  if (!tbody) return;

  const atividades = SENAI_PROJECT_DATA.organizacao.atividades;

  // Preenche opções do filtro de responsável
  if (filterWho) {
    const uniqueWho = [...new Set(atividades.map(a => a.who))];
    uniqueWho.forEach(who => {
      const opt = document.createElement('option');
      opt.value = who;
      opt.textContent = who;
      filterWho.appendChild(opt);
    });
  }

  function renderRows(filtered) {
    tbody.innerHTML = '';
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 2rem; color: #94a3b8;">Nenhuma atividade encontrada com os filtros selecionados.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 800; color: #005caa;">${item.id}</td>
        <td style="font-weight: 700; color: #0f172a;">${item.what}</td>
        <td>${item.why}</td>
        <td><span style="display:inline-block; background:#f1f5f9; padding:2px 8px; border-radius:4px; font-size:0.75rem;">${item.where}</span></td>
        <td style="white-space:nowrap; font-weight:600;">${item.when}</td>
        <td style="font-weight:600; color:#0369a1;">${item.who}</td>
        <td>${item.how}</td>
        <td style="white-space:nowrap; font-weight:700;">${item.howMuch > 0 ? 'R$ ' + item.howMuch.toFixed(2).replace('.', ',') : 'R$ 0,00'}</td>
        <td><span class="status-badge status-concluido">✓ ${item.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function applyFilters() {
    const term = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedWho = filterWho ? filterWho.value : '';

    const filtered = atividades.filter(item => {
      const matchesTerm = !term ||
        item.id.toLowerCase().includes(term) ||
        item.what.toLowerCase().includes(term) ||
        item.why.toLowerCase().includes(term) ||
        item.where.toLowerCase().includes(term) ||
        item.who.toLowerCase().includes(term) ||
        item.how.toLowerCase().includes(term);

      const matchesWho = !selectedWho || item.who === selectedWho;

      return matchesTerm && matchesWho;
    });

    renderRows(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (filterWho) filterWho.addEventListener('change', applyFilters);

  renderRows(atividades);
}

/* ==========================================================================
   5. GRÁFICOS CHART.JS COM DADOS DA PLANILHA
   ========================================================================== */
function initCharts() {
  if (typeof Chart === 'undefined') return;

  window.senaiCharts = {};

  // Gráfico 1: Evolução Semanal da Arrecadação (Barra com Linha de Meta Acumulada)
  const ctxEvolucao = document.getElementById('chart-evolucao');
  if (ctxEvolucao) {
    const totais = SENAI_PROJECT_DATA.controle.totaisSemanais;
    window.senaiCharts.evolucao = new Chart(ctxEvolucao, {
      type: 'bar',
      data: {
        labels: ['Semana 1 (09/10)', 'Semana 2 (16/10)', 'Semana 3 (23/10)', 'Semana 4 (30/10)'],
        datasets: [
          {
            label: 'Arrecadação Semanal (kg)',
            data: [totais.semana1, totais.semana2, totais.semana3, totais.semana4],
            backgroundColor: 'rgba(2, 132, 199, 0.85)',
            borderColor: '#0284c7',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            label: 'Acumulado (kg)',
            data: [145, 145 + 215, 145 + 215 + 185, 720],
            type: 'line',
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.35,
            borderWidth: 3,
            pointBackgroundColor: '#10b981',
            pointRadius: 5,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', weight: '600' } } },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} kg`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' },
            ticks: {
              callback: (val) => `${val} kg`
            }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }

  // Gráfico 2: Distribuição por Tipo de Alimento (Doughnut)
  const ctxAlimentos = document.getElementById('chart-alimentos');
  if (ctxAlimentos) {
    const alimentos = SENAI_PROJECT_DATA.controle.alimentos;
    window.senaiCharts.alimentos = new Chart(ctxAlimentos, {
      type: 'doughnut',
      data: {
        labels: alimentos.map(a => a.nome),
        datasets: [{
          data: alimentos.map(a => a.totalRealizado),
          backgroundColor: alimentos.map(a => a.cor),
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { boxWidth: 14, font: { family: 'Plus Jakarta Sans', size: 12 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = 720;
                const pct = ((ctx.raw / total) * 100).toFixed(1);
                return ` ${ctx.label}: ${ctx.raw} kg (${pct}%)`;
              }
            }
          }
        },
        cutout: '65%'
      }
    });
  }

  // Gráfico 3: Comparativo Planejado vs Realizado (Barras Horizontais)
  const ctxComparativo = document.getElementById('chart-comparativo');
  if (ctxComparativo) {
    const alimentos = SENAI_PROJECT_DATA.controle.alimentos;
    window.senaiCharts.comparativo = new Chart(ctxComparativo, {
      type: 'bar',
      data: {
        labels: alimentos.map(a => a.nome),
        datasets: [
          {
            label: 'Meta Planejada (kg)',
            data: alimentos.map(a => a.metaPlanejada),
            backgroundColor: '#cbd5e1',
            borderRadius: 4
          },
          {
            label: 'Total Realizado (kg)',
            data: alimentos.map(a => a.totalRealizado),
            backgroundColor: '#005caa',
            borderRadius: 4
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', weight: '600' } } }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: { callback: (val) => `${val} kg` }
          }
        }
      }
    });
  }
}

/* ==========================================================================
   6. MODAL DE SIMULAÇÃO / REGISTRO DE DOAÇÃO
   ========================================================================== */
function initDonationModal() {
  const modal = document.getElementById('donation-modal');
  const openBtns = document.querySelectorAll('.btn-open-donation');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('donation-form');
  const successState = document.getElementById('modal-success-state');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    if (form) form.style.display = 'block';
    if (successState) successState.style.display = 'none';
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('donor-name').value;
      const setor = document.getElementById('donor-sector').value;
      const kg = document.getElementById('donor-kg').value;

      form.style.display = 'none';
      if (successState) {
        successState.style.display = 'block';
        const msg = document.getElementById('success-summary');
        if (msg) {
          msg.innerHTML = `Obrigado, <strong>${nome}</strong>! Sua promessa de <strong>${kg} kg</strong> em nome do setor <strong>${setor}</strong> foi registrada. Sua solidariedade transforma vidas!`;
        }
      }
    });
  }
}

/* ==========================================================================
   7. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}
