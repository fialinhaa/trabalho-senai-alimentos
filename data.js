/**
 * DADOS DA CAMPANHA SOLIDARIEDADE EM AÇÃO - INDÚSTRIA UNIDA
 * Projeto Integrado SENAI: Gestão e Organização de Campanha Interna de Alimentos
 * Extraído diretamente da planilha Excel: trabalho senai arredação alimentos.xlsx
 */

const SENAI_PROJECT_DATA = {
  // 1. PLANEJAMENTO
  planejamento: {
    titulo: "Projeto Integrado: Gestão e Organização de Campanha Interna de Alimentos",
    nomeCampanha: "Campanha Solidariedade em Ação - Indústria Unida",
    subtitulo: "Unindo forças por um prato cheio: Indústria Solidária em prol da comunidade",
    contexto: "Campanha social interna organizada pelo setor administrativo para arrecadação de alimentos não perecíveis.",
    funcaoAdministrativa: "Etapa 1: Planejamento",
    objetivoGeral: "Engajar os colaboradores de todos os turnos e setores da indústria na arrecadação voluntária de alimentos não perecíveis.",
    periodo: "01/10/2026 a 30/10/2026 (Duração total de 30 dias corridos)",
    publicoAlvo: "100% dos colaboradores da empresa (Operação / Chão de Fábrica, Logística, Manutenção, Administrativo e Gestão)",
    metaGlobalKg: 600,
    metaCestas: 60,
    pesoCestaKg: 10,
    metaEngajamentoPct: 75,
    recursosMateriais: [
      { item: "Caixas organizadoras plásticas", qtd: "4 unidades", finalidade: "Postos oficiais de coleta nos setores" },
      { item: "Cartazes coloridos A3", qtd: "25 unidades", finalidade: "Comunicação visual e murais informativos" },
      { item: "Fita zebrada/demarcatória de piso", qtd: "2 rolos", finalidade: "Sinalização visual dos pontos de arrecadação" },
      { item: "Balança digital de precisão", qtd: "1 unidade", finalidade: "Pesagem e controle de qualidade semanal" },
      { item: "Fita adesiva reforçada e sacos para cestas", qtd: "Kit completo", finalidade: "Triagem e empacotamento seguro" }
    ],
    acoesPrincipais: [
      "Reunião de kick-off com lideranças e patrocinador",
      "Confecção e posicionamento dos pontos de coleta estratégicos",
      "Lançamento e divulgação ampla (DDS, murais, TV corporativa e e-mails)",
      "Pesagens parciais e atualização semanal do termômetro de arrecadação",
      "Triagem e conferência rigorosa de integridade e validade dos itens",
      "Encerramento, prestação de contas transparente e entrega solene à instituição"
    ]
  },

  // 2. ORGANIZAÇÃO (5W2H)
  organizacao: {
    titulo: "Plano de Ação Operacional - Metodologia 5W2H (30 Dias)",
    descricao: "Mapeamento das 12 ações táticas para garantir a execução com disciplina, responsabilidade e prazos cumpridos.",
    custoTotal: 190.00,
    atividades: [
      {
        id: "A01",
        what: "Reunião de alinhamento e kick-off",
        why: "Definir responsabilidades e validar cronograma geral",
        where: "Sala de Reuniões 02 / Presencial",
        when: "01/10/2026",
        who: "Equipe do Projeto e Gestor",
        how: "Apresentação de slides e validação com as lideranças",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A02",
        what: "Confecção e montagem dos pontos de coleta",
        why: "Garantir pontos visíveis e acessíveis para doações",
        where: "Recepção, Refeitório e Vestiários",
        when: "02/10/2026",
        who: "Assistente Administrativo 1",
        how: "Identificar caixas coletoras com cartazes e fitas adesivas",
        howMuch: 85.00,
        status: "Concluído"
      },
      {
        id: "A03",
        what: "Lançamento oficial da campanha",
        why: "Disseminar a meta de 600 kg para todos os colaboradores",
        where: "Canais digitais e murais da fábrica",
        when: "05/10/2026",
        who: "Assistente Administrativo 2",
        how: "Envio de comunicado via e-mail corporativo e afixação de cartazes",
        howMuch: 45.00,
        status: "Concluído"
      },
      {
        id: "A04",
        what: "Alinhamento nos DDS das equipes operacionais",
        why: "Engajar diretamente os operadores e técnicos de chão de fábrica",
        where: "Linhas de produção / Manutenção",
        when: "06/10/2026",
        who: "Supervisores e Ass. Administrativo 2",
        how: "Apresentação rápida de 5 minutos reforçando os itens prioritários",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A05",
        what: "1ª Pesagem parcial e triagem de qualidade",
        why: "Conferir o ritmo inicial e descartar itens fora da validade",
        where: "Almoxarifado Central",
        when: "09/10/2026",
        who: "Assistente Administrativo 1 e 3",
        how: "Coleta nos postos, pesagem na balança digital e registro em planilha",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A06",
        what: "Divulgação do 1º Termômetro de Arrecadação",
        why: "Estimular a continuidade das doações mostrando o progresso",
        where: "Mural do refeitório e TV Corporativa",
        when: "13/10/2026",
        who: "Assistente Administrativo 2",
        how: "Atualização da arte visual com percentual alcançado na 1ª semana",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A07",
        what: "2ª Pesagem parcial e contagem intermediária",
        why: "Monitorar o fluxo de arrecadação do meio da campanha",
        where: "Almoxarifado Central",
        when: "16/10/2026",
        who: "Assistente Administrativo 1 e 3",
        how: "Recolhimento dos postos, nova pesagem e estocagem em caixas seguras",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A08",
        what: "Divulgação do 2º Termômetro e ranking de setores",
        why: "Fomentar a competição saudável (Gincana Solidária)",
        where: "Mural do refeitório e e-mail",
        when: "20/10/2026",
        who: "Assistente Administrativo 2",
        how: "Publicação de ranking parcial mostrando qual setor arrecadou mais",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A09",
        what: "3ª Pesagem parcial e balanço da reta final",
        why: "Identificar se a meta global está próxima de ser atingida",
        where: "Almoxarifado Central",
        when: "23/10/2026",
        who: "Assistente Administrativo 1 e 3",
        how: "Pesagem dos itens acumulados e revisão dos prazos de validade",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A10",
        what: "Campanha de Contagem Regressiva (Últimos 4 dias)",
        why: "Incentivar as últimas doações para superar o objetivo",
        where: "Mural, WhatsApp institucional e e-mail",
        when: "26/10/2026",
        who: "Assistente Administrativo 2",
        how: "Divulgação do sprint final: faltam poucos quilos para bater a meta",
        howMuch: 0.00,
        status: "Concluído"
      },
      {
        id: "A11",
        what: "Pesagem final, triagem rigorosa e empacotamento",
        why: "Consolidar o volume total e montar as cestas básicas",
        where: "Almoxarifado Geral",
        when: "30/10/2026",
        who: "Equipe Completa de Assistentes",
        how: "Conferência final de pesos, separação por tipo e montagem de cestas",
        howMuch: 60.00,
        status: "Concluído"
      },
      {
        id: "A12",
        what: "Cerimônia de entrega e prestação de contas",
        why: "Transparência com os colaboradores e entrega beneficente",
        where: "Auditório da Empresa e Instituição",
        when: "03/11/2026",
        who: "Equipe do Projeto, Gestor e RH",
        how: "Apresentação dos resultados em reunião geral e entrega física dos alimentos",
        howMuch: 0.00,
        status: "Concluído"
      }
    ]
  },

  // 3. DIREÇÃO (MATRIZ DE RESPONSABILIDADES & COMUNICAÇÃO)
  direcao: {
    titulo: "Matriz de Responsabilidades & Comunicação Estratégica",
    descricao: "Estrutura organizacional, atribuições de liderança e plano multicanal de engajamento.",
    equipe: [
      {
        membro: "Assistente Administrativo 1",
        funcao: "Líder de Infraestrutura e Logística",
        setor: "Administrativo / Logística",
        icone: "truck",
        responsabilidades: "Mapear pontos estratégicos de coleta, confeccionar caixas, recolher doações periodicamente e organizar estocagem no almoxarifado.",
        entregaveis: "Postos instalados; logística de movimentação interna ágil e segurança dos itens estocados."
      },
      {
        membro: "Assistente Administrativo 2",
        funcao: "Líder de Comunicação e Engajamento",
        setor: "Comunicação Interna / RH",
        icone: "megaphone",
        responsabilidades: "Desenvolver peças gráficas e cartazes, redigir comunicados, disparar e-mails, abastecer murais e atualizar termômetros semanais.",
        entregaveis: "Comunicação visual ativa; avisos afixados; boletins semanais publicados com transparência."
      },
      {
        membro: "Assistente Administrativo 3",
        funcao: "Líder de Controle e Qualidade",
        setor: "Administrativo / Controladoria",
        icone: "clipboard-check",
        responsabilidades: "Operar a balança digital, conferir validades e integridade das embalagens, lançar pesagens na planilha e monitorar métricas.",
        entregaveis: "Planilha de dados atualizada em tempo hábil; relatórios de pesagem e indicadores de desempenho confiáveis."
      },
      {
        membro: "Assistente Administrativo 4",
        funcao: "Líder de Articulação e Destinação",
        setor: "Administrativo / Responsabilidade Social",
        icone: "heart-handshake",
        responsabilidades: "Contatar a instituição beneficente, checar demandas prioritárias de alimentos, agendar transporte de entrega e emitir termo de doação.",
        entregaveis: "Ofício de destinação; termo de entrega e recebimento assinado; registro fotográfico oficial."
      },
      {
        membro: "Gestor Administrativo",
        funcao: "Sponsor / Patrocinador do Projeto",
        setor: "Gerência Administrativa",
        icone: "award",
        responsabilidades: "Validar o orçamento, aprovar materiais de divulgação, homologar o plano e negociar liberações com outras gerências.",
        entregaveis: "Aprovação institucional; liberação de recursos; apoio executivo constante."
      },
      {
        membro: "Supervisores de Produção",
        funcao: "Multiplicadores Setoriais",
        setor: "Fábrica / Manutenção / Expedição",
        icone: "users",
        responsabilidades: "Incentivar as equipes de turno, ceder 5 minutos do DDS para divulgações e garantir que as caixas da produção permaneçam preservadas.",
        entregaveis: "Engajamento direto dos operadores e técnicos; adesão expressiva do efetivo fabril."
      }
    ],
    cronogramaComunicacao: [
      {
        data: "05/10/2026",
        canal: "E-mail Geral + Cartazes Murais",
        publico: "Todos os Colaboradores",
        mensagem: "Lançamento Oficial: Por que estamos arrecadando, qual a meta (600 kg) e onde estão os pontos de coleta.",
        objetivo: "Gerar conscientização inicial e abertura oficial da campanha.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "06/10/2026",
        canal: "DDS (Diálogo Diário de Segurança)",
        publico: "Chão de Fábrica e Oficinas",
        mensagem: "Orientações Práticas: O que pode ser doado (arroz, feijão, macarrão, leite em pó, óleo) e cuidados com a embalagem.",
        objetivo: "Esclarecer dúvidas operacionais e garantir participação da linha de frente.",
        responsavel: "Supervisores + Ass. 2"
      },
      {
        data: "09/10/2026",
        canal: "TV Corporativa e WhatsApp Institucional",
        publico: "Todos os Colaboradores",
        mensagem: "Agradecimento aos primeiros doadores e convite para montagem de cestas conjuntas entre colegas de turno.",
        objetivo: "Manter a campanha em evidência na rotina diária.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "13/10/2026",
        canal: "Mural Físico do Refeitório",
        publico: "Todos os Colaboradores",
        mensagem: "Divulgação do Termômetro 1: Atingimos 145 kg na 1ª semana! Fábrica lidera a gincana!",
        objetivo: "Motivar pelo reconhecimento e pelo senso de colaboração coletiva.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "20/10/2026",
        canal: "Mural Físico e TV Corporativa",
        publico: "Todos os Colaboradores",
        mensagem: "Termômetro 2: Já alcançamos 360 kg (60% da meta)! Faltam 240 kg para atingir nosso objetivo solidário!",
        objetivo: "Demonstrar resultado tangível e reforçar que a meta é plenamente viável.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "26/10/2026",
        canal: "E-mail Geral, Murais e WhatsApp",
        publico: "Todos os Colaboradores",
        mensagem: "Contagem Regressiva: Faltam apenas 4 dias! Traga sua doação nesta reta final e ajude a bater a meta!",
        objetivo: "Criar senso de urgência e mobilizar as últimas contribuições.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "30/10/2026",
        canal: "Informativo Geral nos Murais",
        publico: "Todos os Colaboradores",
        mensagem: "Encerramento das Coletas: Caixas sendo recolhidas hoje às 17h para triagem e pesagem final consolidada.",
        objetivo: "Informar encerramento formal da etapa de coleta.",
        responsavel: "Ass. Administrativo 2"
      },
      {
        data: "03/11/2026",
        canal: "Comunicado Oficial e Painéis TV",
        publico: "Toda a Empresa e Diretoria",
        mensagem: "Resultado Final: Meta Superada! 720 kg arrecadados! Fotos da entrega à instituição e nosso sincero obrigado!",
        objetivo: "Transparência, prestação de contas e valorização de todos os colaboradores.",
        responsavel: "Ass. Administrativo 2"
      }
    ]
  },

  // 4. CONTROLE (INDICADORES, PESAGENS E KPIS)
  controle: {
    titulo: "Painel de Controle de Arrecadação e Indicadores de Desempenho",
    descricao: "Acompanhamento quantitativo e qualitativo dos resultados obtidos durante as 4 semanas de ação.",
    totalGeralKg: 720,
    metaGlobalKg: 600,
    percentualGlobal: 120.0,
    totalCestasBasicas: 72, // 720 / 10
    totalColaboradores: 320,
    metaColaboradores: 250,
    adesaoGeralPct: 80,
    metaAdesaoPct: 75,
    custoKgArrecadado: 0.26, // R$ 190 / 720kg
    descarteKg: 1.0,
    taxaAproveitamentoPct: 99.86,
    cumprimento5W2H: 100,

    // Tabela detalhada por tipo de alimento
    alimentos: [
      {
        categoria: "Arroz (kg)",
        nome: "Arroz",
        unidade: "kg",
        semana1: 45,
        semana2: 60,
        semana3: 55,
        semana4: 50,
        totalRealizado: 210,
        metaPlanejada: 180,
        atingidoPct: 116.67,
        situacao: "Meta Atingida",
        cor: "#3b82f6"
      },
      {
        categoria: "Feijão (kg)",
        nome: "Feijão",
        unidade: "kg",
        semana1: 30,
        semana2: 45,
        semana3: 40,
        semana4: 35,
        totalRealizado: 150,
        metaPlanejada: 120,
        atingidoPct: 125.0,
        situacao: "Meta Atingida",
        cor: "#8b5cf6"
      },
      {
        categoria: "Macarrão (kg)",
        nome: "Macarrão",
        unidade: "kg",
        semana1: 25,
        semana2: 35,
        semana3: 30,
        semana4: 30,
        totalRealizado: 120,
        metaPlanejada: 100,
        atingidoPct: 120.0,
        situacao: "Meta Atingida",
        cor: "#f59e0b"
      },
      {
        categoria: "Óleo de Soja (litros/kg)",
        nome: "Óleo de Soja",
        unidade: "litros",
        semana1: 15,
        semana2: 25,
        semana3: 20,
        semana4: 25,
        totalRealizado: 85,
        metaPlanejada: 80,
        atingidoPct: 106.25,
        situacao: "Meta Atingida",
        cor: "#ef4444"
      },
      {
        categoria: "Leite em Pó / Líquido (kg/L)",
        nome: "Leite",
        unidade: "kg/L",
        semana1: 20,
        semana2: 30,
        semana3: 25,
        semana4: 20,
        totalRealizado: 95,
        metaPlanejada: 80,
        atingidoPct: 118.75,
        situacao: "Meta Atingida",
        cor: "#06b6d4"
      },
      {
        categoria: "Outros Não Perecíveis",
        nome: "Outros Alimentos",
        unidade: "kg",
        semana1: 10,
        semana2: 20,
        semana3: 15,
        semana4: 15,
        totalRealizado: 60,
        metaPlanejada: 40,
        atingidoPct: 150.0,
        situacao: "Meta Atingida",
        cor: "#10b981"
      }
    ],

    // Totais semanais de arrecadação
    totaisSemanais: {
      semana1: 145,
      semana2: 215,
      semana3: 185,
      semana4: 175,
      total: 720,
      meta: 600
    },

    // Indicadores gerais de monitoramento
    indicadores: [
      {
        indicador: "Número de Colaboradores Participantes",
        semana1: 62,
        semana2: 98,
        semana3: 84,
        semana4: 76,
        consolidado: "320 pessoas",
        meta: "250 pessoas",
        avaliacao: "Meta de engajamento superada (+28%)",
        status: "Excelente"
      },
      {
        indicador: "Taxa de Adesão do Quadro Geral de Funcionários",
        semana1: "19%",
        semana2: "31%",
        semana3: "26%",
        semana4: "24%",
        consolidado: "80%",
        meta: "75%",
        avaliacao: "Participação ampla de todos os setores e turnos",
        status: "Excelente"
      },
      {
        indicador: "Cumprimento das Atividades do Cronograma (5W2H)",
        semana1: "100%",
        semana2: "100%",
        semana3: "100%",
        semana4: "100%",
        consolidado: "100%",
        meta: "100%",
        avaliacao: "100% das tarefas executadas com rigor no prazo",
        status: "Perfeito"
      },
      {
        indicador: "Itens Descartados por Validade Vencida / Danos",
        semana1: "0 kg",
        semana2: "1 kg",
        semana3: "0 kg",
        semana4: "0 kg",
        consolidado: "1 kg",
        meta: "0 kg",
        avaliacao: "Excelente controle na triagem e conscientização prévia",
        status: "Excelente"
      }
    ]
  },

  // DADOS ESPECÍFICOS PARA DIVULGAÇÃO & ENGAJAMENTO
  divulgacao: {
    pontosColeta: [
      {
        local: "Refeitório Central",
        descricao: "Ponto principal ao lado do mural de avisos. Maior fluxo nos horários de almoço e jantar.",
        horario: "06:00 às 22:00",
        destaque: "Mais movimentado"
      },
      {
        local: "Recepção Principal",
        descricao: "Acesso de visitantes e colaboradores administrativos. Ponto no hall de entrada.",
        horario: "07:30 às 18:00",
        destaque: "Fácil acesso"
      },
      {
        local: "Vestiários / Entrada Operacional",
        descricao: "Estratégico para colaboradores na troca de turnos e entrada da fábrica.",
        horario: "24 Horas",
        destaque: "Turnos A, B e C"
      },
      {
        local: "Hall do Almoxarifado / Fábrica",
        descricao: "Próximo às linhas de produção e área de manutenção.",
        horario: "06:00 às 18:00",
        destaque: "Chão de Fábrica"
      }
    ],
    itensMaisNecessarios: [
      { nome: "Arroz", icon: "🌾", desc: "Tipo 1 ou 2, pacotes de 1kg ou 5kg com embalagem intacta." },
      { nome: "Feijão", icon: "🫘", desc: "Carioca ou Preto, preferência para pacotes de 1kg." },
      { nome: "Macarrão", icon: "🍝", desc: "Espaguete, parafuso ou penne em embalagens lacradas." },
      { nome: "Óleo de Soja", icon: "🌻", desc: "Garrafas PET de 900ml resistentes e bem vedadas." },
      { nome: "Leite em Pó / Longa Vida", icon: "🥛", desc: "Nutrição vital para crianças e idosos assistidos." },
      { nome: "Outros Não Perecíveis", icon: "🥫", desc: "Farinha, açúcar, café, molho de tomate e enlatados." }
    ],
    rankingSetores: [
      { posicao: 1, setor: "Fábrica & Chão de Fábrica (Operação)", arrecadadoKg: 285, pct: 39.6, badge: "Campeão Solidário 🥇" },
      { posicao: 2, setor: "Logística & Expedição", arrecadadoKg: 175, pct: 24.3, badge: "Vice-Campeão 🥈" },
      { posicao: 3, setor: "Manutenção & Engenharia", arrecadadoKg: 145, pct: 20.1, badge: "3º Lugar 🥉" },
      { posicao: 4, setor: "Administrativo, RH & Gestão", arrecadadoKg: 115, pct: 16.0, badge: "Destaque Engajamento 🏅" }
    ],
    faq: [
      {
        q: "Posso doar alimentos que já foram abertos?",
        a: "Não. Por normas sanitárias e de controle de qualidade (rigorosamente inspecionados pela nossa equipe na triagem), somente aceitamos alimentos lacrados e dentro do prazo de validade."
      },
      {
        q: "Qual o destino final dos alimentos arrecadados?",
        a: "Todos os alimentos serão conferidos, separados em cestas básicas padronizadas de 10 kg e entregues formalmente à instituição beneficente cadastrada pelo setor de Responsabilidade Social, com termo de doação e registro fotográfico transparente."
      },
      {
        q: "Posso doar produtos de limpeza ou higiene?",
        a: "O foco prioritário da gincana é em alimentos não perecíveis (arroz, feijão, macarrão, leite, óleo), mas itens essenciais também são bem-vindos para complementar os kits."
      },
      {
        q: "Como saber se meu setor está pontuando na gincana?",
        a: "Ao depositar sua doação nos pontos de coleta, deposite na caixa com a identificação do seu setor ou informe aos multiplicadores durante o DDS diário!"
      }
    ]
  }
};
