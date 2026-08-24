import { LeagueInfo, SeasonStep, StudentMilestone, CoreValue, GlossaryTerm, ComparisonCriterion } from '../types/first';

export const FIRST_HERO_STATS = [
  { label: 'Países participantes', value: '+110', detail: 'Presença global ativa em 5 continentes' },
  { label: 'Estudantes impactados / ano', value: '+670k', detail: 'Da educação infantil ao ensino médio' },
  { label: 'Bolsas universitárias', value: '+US$ 80M', detail: 'Disponíveis exclusivamente para alunos FIRST' },
  { label: 'Anos de história', value: '35+', detail: 'Fundada em 1989 por Dean Kamen' }
];

export const FIRST_HISTORY = {
  acronymMeaning: 'For Inspiration and Recognition of Science and Technology',
  ptTranslation: 'Para Inspiração e Reconhecimento da Ciência e Tecnologia',
  founders: 'Dean Kamen (inventor e empreendedor) e Dr. Woodie Flowers (professor emérito do MIT)',
  foundedYear: '1989',
  headquarters: 'Manchester, New Hampshire, EUA',
  mission: 'Inspirar jovens a serem líderes e inovadores em ciência e tecnologia, envolvendo-os em programas baseados em mentoria que desenvolvem habilidades em STEM, incentivam a inovação e fomentam capacidades essenciais para a vida como liderança, comunicação e autoconfiança.',
  vision: '"Transformar nossa cultura criando um mundo onde os jovens celebrem cientistas e engenheiros da mesma forma que celebram atletas e artistas."'
};

export const CORE_VALUES: CoreValue[] = [
  {
    name: 'Descoberta',
    tagline: 'Explorar novas habilidades e ideias',
    description: 'Exploramos novos conhecimentos, ferramentas e conceitos de engenharia sem medo do erro como parte do aprendizado.',
    iconName: 'Compass'
  },
  {
    name: 'Inovação',
    tagline: 'Criatividade para resolver problemas reais',
    description: 'Utilizamos criatividade e rigor técnico para idealizar soluções originais para desafios complexos da sociedade.',
    iconName: 'Lightbulb'
  },
  {
    name: 'Impacto',
    tagline: 'Aplicar o aprendizado para melhorar o mundo',
    description: 'Levamos a ciência e a tecnologia para além da arena, beneficiando nossa comunidade escolar e a sociedade local.',
    iconName: 'Target'
  },
  {
    name: 'Inclusão',
    tagline: 'Respeitar e abraçar as diferenças',
    description: 'Valorizamos todas as vozes, origens e perspectivas, reconhecendo que a diversidade é a maior força de uma equipe.',
    iconName: 'Users'
  },
  {
    name: 'Trabalho em Equipe',
    tagline: 'Mais fortes quando colaboramos',
    description: 'Nenhum robô é construído por uma só pessoa. Dividimos responsabilidades, apoiamos colegas e crescemos juntos.',
    iconName: 'HeartHandshake'
  },
  {
    name: 'Diversão',
    tagline: 'Celebrar o entusiasmo da jornada',
    description: 'Trabalho árduo e celebração andam juntos. A energia das arenas e o entusiasmo do aprendizado são inegociáveis.',
    iconName: 'Sparkles'
  }
];

export const PHILOSOPHY_CONCEPTS = [
  {
    title: 'Gracious Professionalism®',
    subtitle: 'Profissionalismo Gracioso',
    author: 'Cunhado pelo Dr. Woodie Flowers (MIT)',
    description: 'Uma ética de trabalho e postura de vida que incentiva o trabalho de alta qualidade, valoriza os outros e respeita a comunidade. Na prática da FIRST, significa competir com o máximo de intensidade técnica e esforço na arena, enquanto se trata cada competidor com integridade, generosidade e empatia nos bastidores.',
    highlight: 'Nos pits de uma competição FIRST, equipes emprestam motores, peças sobressalentes e código para seus adversários diretos minutos antes de uma final decisiva.'
  },
  {
    title: 'Coopertition®',
    subtitle: 'Cooperatividade Competitiva',
    author: 'Princípio fundamental FIRST',
    description: 'Filosofia baseada no conceito de que equipes podem e devem cooperar com entusiasmo e generosidade, mesmo enquanto competem entre si. O sucesso individual nunca deve vir da sabotagem alheia, mas sim da elevação do nível geral de todos os participantes.',
    highlight: 'A pontuação de muitas partidas depende de ações coordenadas entre robôs de alianças sorteadas ou formadas na hora.'
  }
];

export const LEAGUES_DATA: Record<string, LeagueInfo> = {
  fll: {
    id: 'fll',
    acronym: 'FLL',
    name: 'FIRST LEGO League',
    tagline: 'A porta de entrada para a robótica e o método científico',
    description: 'Voltada a crianças e jovens de 9 a 16 anos (na divisão Challenge), a FLL introduz a ciência e a engenharia no mundo real através da construção de robôs autônomos com kits LEGO® Education e do desenvolvimento de um Projeto de Inovação que resolve um problema real da sociedade.',
    targetAge: '9 a 16 anos (FLL Challenge)',
    teamSize: '2 a 10 estudantes por equipe',
    robotSize: 'Compacto (limitado pelo tapete de 2,36m x 1,14m e área de base)',
    robotWeight: 'Aprox. 1 a 2 kg',
    materials: 'Kits LEGO® Education (SPIKE Prime, MINDSTORMS), peças Technic, sensores e motores oficiais',
    programming: ['Scratch (Blocos de Palavras)', 'Python (MicroPython embutido)'],
    fieldSize: 'Mesa oficial de missões (2,36 m x 1,14 m com tapete temático)',
    matchDuration: '2 minutos e 30 segundos (partida 100% autônoma)',
    allianceFormat: 'Individual por mesa (duas mesas lado a lado com missões colaborativas)',
    costLevel: 'Acessível para escolas e clubes de robótica',
    badgeColor: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      accent: '#F59E0B'
    },
    highlights: [
      '100% Autônomo: sem controle remoto durante os 2min30s de round',
      'Avaliação holística em 4 áreas de peso idêntico (25% cada)',
      'Projeto de Inovação com pesquisa científica e apresentação para jurados',
      'Temporada temática anual (ex: energia renovável, artes, exploração marinha)'
    ],
    keyComponents: [
      'Hub Inteligente LEGO SPIKE Prime com giroscópio de 6 eixos',
      'Motores angulares de precisão com encoder integrado',
      'Sensores de cor/luz e distância ultrassônica',
      'Anexos modulares de troca rápida para diferentes missões'
    ],
    evaluationPillars: [
      {
        title: 'Jogo do Robô (Robot Game)',
        description: 'Construir e programar um robô autônomo capaz de navegar pela mesa temática e completar o maior número de missões estratégicas em 2min30s.'
      },
      {
        title: 'Design do Robô (Robot Design)',
        description: 'Apresentar para juízes a arquitetura mecânica, estratégia de código, modularidade dos anexos e uso de sensores.'
      },
      {
        title: 'Projeto de Inovação',
        description: 'Identificar um problema real ligado ao tema do ano, pesquisar com especialistas, criar uma solução inédita e compartilhá-la.'
      },
      {
        title: 'Core Values (Valores Fundamentais)',
        description: 'Demonstrar trabalho em equipe, inclusão, comunicação respeitosa e paixão em todas as etapas da preparação e do torneio.'
      }
    ],
    quote: 'Na FLL, aprendemos que programar é dar vida à imaginação, mas que pesquisar e resolver problemas sociais é o que realmente muda o mundo.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Estudantes operando robô SPIKE Prime em tapete de missões temático oficial da FLL.'
  },
  ftc: {
    id: 'ftc',
    acronym: 'FTC',
    name: 'FIRST Tech Challenge',
    tagline: 'Engenharia aplicada, metalmecânica e controle avançado',
    description: 'Projetada para estudantes de 12 a 18 anos, a FTC desafia equipes a projetar, construir e programar robôs em escala média usando estruturas metálicas, motores industriais de corrente contínua, servomotores e sistemas de controle baseados em Android e Java. Uma imersão profunda no ciclo de engenharia real.',
    targetAge: '12 a 18 anos (Ensino Fundamental II e Médio)',
    teamSize: '3 a 15 estudantes por equipe',
    robotSize: 'Deve caber na caixa de inspeção de 18" × 18" × 18" (45,7 cm cúbicos no início da partida)',
    robotWeight: 'Até aprox. 19 kg (42 lbs)',
    materials: 'Perfis estruturais de alumínio (REV Robotics, goBILDA, Actobotics), chapas usinadas, acrílico, peças em 3D',
    programming: ['Java nativo (Android Studio / OnBot Java)', 'Blocks Programming'],
    fieldSize: 'Arena fechada de 3,65 m × 3,65 m (12 × 12 pés) com piso de placas de EVA macio',
    matchDuration: '2 minutos e 30 segundos (30s Autônomo + 2min Teleoperado)',
    allianceFormat: 'Alianças 2 vs 2 (Aliança Vermelha vs Aliança Azul)',
    costLevel: 'Intermediário (ideal para laboratórios de colégios e equipes comunitárias)',
    badgeColor: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      accent: '#0066B3'
    },
    highlights: [
      'Liberdade total de projeto com componentes metálicos e impressão 3D',
      'Controle por 2 gamepads (piloto e operador de sistemas)',
      'Visão computacional embarcada (AprilTags, detecção de elementos de jogo)',
      'Caderno de Engenharia (Engineering Portfolio) documentando todo o desenvolvimento'
    ],
    keyComponents: [
      'REV Control Hub (processador Android integrado com portas de motores e sensores)',
      'Motores DC planetários de 12V com encoders de alta resolução',
      'Servomotores digitais inteligentes e garras customizadas',
      'Câmeras USB / webcams para leitura de AprilTags e orientação espacial'
    ],
    evaluationPillars: [
      {
        title: 'Desempenho na Arena',
        description: 'Disputas dinâmicas em alianças 2v2: fase autônoma inicial de 30s seguida por 2 minutos de controle manual com os últimos 30s dedicados ao Endgame (ex: suspensão ou elevação).'
      },
      {
        title: 'Portfólio de Engenharia',
        description: 'Documento técnico de 15 páginas detalhando o processo iterativo de design, cálculos de física, código Java e gerenciamento de recursos.'
      },
      {
        title: 'Entrevistas Técnicas com Jurados',
        description: 'Banca avaliadora de engenheiros profissionais onde a equipe defende suas decisões mecânicas, de software e alcance social.'
      },
      {
        title: 'Prêmio Inspire (Inspire Award)',
        description: 'O prêmio máximo da FTC, concedido à equipe que se destaca como modelo em engenharia, espírito de equipe, inclusão e impacto comunitário.'
      }
    ],
    quote: 'A FTC nos ensinou a tolerância mecânica, a depuração de código em Java e como projetar um mecanismo sabendo que ele precisará suportar o impacto de dezenas de partidas.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Robô FTC de estrutura em alumínio e tração omnidirecional em arena oficial.'
  },
  frc: {
    id: 'frc',
    acronym: 'FRC',
    name: 'FIRST Robotics Competition',
    tagline: 'O esporte supremo da mente em escala industrial de arena',
    description: 'A categoria máxima da FIRST para estudantes de Ensino Médio (14 a 18 anos). Sob regras rígidas e prazos curtos, equipes projetam, financiam e constroem robôs industriais de até 56 kg que competem em uma arena do tamanho de uma quadra em disputas de alta velocidade e impacto.',
    targetAge: '14 a 18 anos (Ensino Médio e Técnico)',
    teamSize: '15 a 100+ estudantes (organizados como uma empresa de tecnologia)',
    robotSize: 'Perímetro do chassi de até 120 polegadas (~3,04 m), altura variável conforme a regra anual',
    robotWeight: 'Até 56,7 kg (125 lbs) — sem bateria e bumpers de proteção',
    materials: 'Alumínio aeronáutico, chapas CNC, fibra de carbono, tubos de policarbonato, pneumática industrial',
    programming: ['Java (WPILib)', 'C++', 'Python'],
    fieldSize: 'Arena esportiva de 8,2 m × 16,5 m (tamanho de uma quadra) com piso em carpete especial',
    matchDuration: '2 minutos e 30 segundos (15s Autônomo + 2min15s Teleoperado)',
    allianceFormat: 'Alianças 3 vs 3 (Aliança Vermelha vs Aliança Azul com seleção estratégica)',
    costLevel: 'Avançado / Industrial (financiado por patrocínios corporativos e bolsas)',
    badgeColor: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      accent: '#ED1C24'
    },
    highlights: [
      'Robôs de porte industrial com potência elétrica equivalente a vários cavalos de força',
      'Transmissão avançada Swerve Drive (4 rodas com rotação e tração independentes a 360°)',
      'Temporada intensa de desenvolvimento rápido com gestão multidisciplinar profissional',
      'Pits profissionais de competição semelhantes a boxes de Fórmula 1'
    ],
    keyComponents: [
      'Controlador NI roboRIO 2.0 (computador de bordo militar/industrial da National Instruments)',
      'Motores brushless de alta potência (Kraken X60, Falcon 500, NEO) com até 400W cada',
      'Sistemas pneumáticos com compressores onboard e atuadores a 60 PSI',
      'Sensores industriais, encoders ópticos, giroscópios NavX/Pigeon e câmeras Limelight com AprilTags'
    ],
    evaluationPillars: [
      {
        title: 'Competição em Arena 3v3',
        description: 'Batalhas de alta velocidade com estratégias de ciclo de peças, defesa agressiva e manobras acrobáticas de subida (Endgame) controladas por rádio FMS oficial.'
      },
      {
        title: 'FIRST Impact Award (Antigo Chairman’s)',
        description: 'O prêmio de maior prestígio de toda a organização FIRST. Premia a equipe que exemplifica a melhor transformação social e disseminação de STEM no mundo.'
      },
      {
        title: 'Prêmios de Engenharia e Inovação',
        description: 'Avaliação de juízes para excelência em controle autônomo, inovação em design mecânico, qualidade de fabricação industrial e segurança nos pits.'
      },
      {
        title: 'Seleção de Alianças (Alliance Selection)',
        description: 'As 8 melhores equipes do ranking escolhem parceiros com base em dados detalhados de análise estatística (Scouting) para disputar os playoffs eliminatórios.'
      }
    ],
    quote: 'A FRC é a coisa mais próxima da engenharia aeroespacial e da indústria que um jovem de 16 anos pode vivenciar antes da universidade.',
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Arena FRC com robôs de grande porte disputando partida em alianças 3 vs 3.'
  }
};

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  {
    id: 'age',
    label: 'Faixa Etária Recomendada',
    category: 'Geral',
    fll: '9 a 16 anos (Ens. Fundamental I e II)',
    ftc: '12 a 18 anos (Ens. Fundamental II e Médio)',
    frc: '14 a 18 anos (Ensino Médio e Técnico)'
  },
  {
    id: 'team_size',
    label: 'Tamanho Típico da Equipe',
    category: 'Geral',
    fll: '2 a 10 integrantes',
    ftc: '3 a 15 integrantes',
    frc: '15 a 100+ integrantes'
  },
  {
    id: 'platform',
    label: 'Plataforma Estrutural',
    category: 'Robótica & Hardware',
    fll: 'Peças e pinos LEGO® Technic',
    ftc: 'Perfis de alumínio, chapas usinadas e 3D',
    frc: 'Alumínio estrutural, solda, CNC e fibra'
  },
  {
    id: 'weight',
    label: 'Peso do Robô',
    category: 'Robótica & Hardware',
    fll: '~1 kg a 2 kg',
    ftc: 'Até ~19 kg (42 lbs)',
    frc: 'Até 56,7 kg (125 lbs) sem bateria'
  },
  {
    id: 'size',
    label: 'Restrição de Dimensões',
    category: 'Robótica & Hardware',
    fll: 'Compatível com a base da mesa',
    ftc: 'Cubo de 18" × 18" × 18" (45,7 cm)',
    frc: 'Perímetro do chassi até 120" (~3,04 m)'
  },
  {
    id: 'control_system',
    label: 'Controlador Central',
    category: 'Robótica & Hardware',
    fll: 'LEGO SPIKE Prime Hub (ARM M4)',
    ftc: 'REV Control Hub (SoC Android / ARM)',
    frc: 'National Instruments roboRIO 2.0 (Dual ARM)'
  },
  {
    id: 'programming_lang',
    label: 'Linguagens de Programação',
    category: 'Software & Autonomia',
    fll: 'Scratch (Blocos) ou MicroPython',
    ftc: 'Java (Android Studio / OnBot) ou Blocks',
    frc: 'Java (WPILib), C++ ou Python'
  },
  {
    id: 'autonomous_mode',
    label: 'Modo Autônomo',
    category: 'Software & Autonomia',
    fll: '100% da partida (2m30s)',
    ftc: 'Primeiros 30 segundos da partida',
    frc: 'Primeiros 15 segundos da partida'
  },
  {
    id: 'field_size',
    label: 'Dimensões da Arena / Mesa',
    category: 'Competição & Arena',
    fll: '2,36 m × 1,14 m (Mesa de madeira)',
    ftc: '3,65 m × 3,65 m (Arena de 12×12 pés)',
    frc: '8,2 m × 16,5 m (Arena do tamanho de quadra)'
  },
  {
    id: 'alliance_structure',
    label: 'Formato de Partida',
    category: 'Competição & Arena',
    fll: 'Mesa individual com tarefas cooperativas',
    ftc: 'Aliança 2 vs 2 (Vermelha vs Azul)',
    frc: 'Aliança 3 vs 3 (Vermelha vs Azul)'
  },
  {
    id: 'innovation_project',
    label: 'Projeto de Pesquisa Científica',
    category: 'Geral',
    fll: 'Obrigatório (25% da nota total)',
    ftc: 'Integrado ao Portfólio de Engenharia',
    frc: 'Opcional para prêmios como Impact Award'
  }
];

export const STUDENT_JOURNEY_STAGES: StudentMilestone[] = [
  {
    stage: '01. Descoberta & Fundamentos',
    level: 'Iniciação',
    ageRange: '9 a 12 anos',
    leagueMatch: 'FIRST LEGO League (Explore & Challenge)',
    description: 'O estudante tem o primeiro contato com a metodologia científica e o pensamento computacional através do universo amigável do LEGO.',
    technicalSkills: ['Lógica sequencial em blocos', 'Engrenagens e relações de torque', 'Sensores de luminosidade e toque', 'Construção modular'],
    softSkills: ['Trabalho em grupo', 'Apresentação oral em público', 'Curiosidade investigativa', 'Aceitação de falhas em testes'],
    outcome: 'Compreensão de que a tecnologia é uma ferramenta para resolver dores reais da comunidade.'
  },
  {
    stage: '02. Transição para Engenharia Real',
    level: 'Intermediário',
    ageRange: '12 a 15 anos',
    leagueMatch: 'FIRST Tech Challenge (FTC)',
    description: 'O jovem migra de blocos plásticos para estruturas metálicas, parafusos, motores industriais de 12V e código em Java textual com controle remoto.',
    technicalSkills: ['Programação orientada a objetos (Java)', 'Desenho técnico em CAD (Onshape/Fusion 360)', 'Visão computacional (AprilTags)', 'Usinagem básica e impressão 3D'],
    softSkills: ['Gestão de tempo e orçamento', 'Documentação em caderno de engenharia', 'Estratégia e cooperação de alianças', 'Resolução sob pressão'],
    outcome: 'Domínio de princípios mecânicos e elétricos sólidos com autonomia para criar máquinas complexas.'
  },
  {
    stage: '03. Escala Industrial & Liderança',
    level: 'Avançado',
    ageRange: '14 a 18 anos',
    leagueMatch: 'FIRST Robotics Competition (FRC)',
    description: 'O estudante atua em um ambiente equivalente ao de uma empresa de alta tecnologia: prazos apertados, fabricação pesada, patrocínios corporativos e robôs de 56kg.',
    technicalSkills: ['Cinemática de tração Swerve', 'Controle PID e trajetórias com odometria', 'Pneumática industrial e eletrônica de potência', 'Fabricação CNC e fresamento'],
    softSkills: ['Liderança de equipes com +40 pessoas', 'Marketing, captação de recursos e pitching', 'Análise estatística de dados (Scouting)', 'Engajamento social e mentoria comunitária'],
    outcome: 'Formação de um jovem líder preparado para as melhores faculdades de engenharia e mercado de inovação.'
  },
  {
    stage: '04. Universidade, Carreira & Mentoria',
    level: 'Alumni & Futuro',
    ageRange: '18+ anos',
    leagueMatch: 'Comunidade Global de Alumni & Mentores',
    description: 'Ex-alunos (Alumni) ingressam em cursos de engenharia, computação e ciência, retornando ao ecossistema como mentores voluntários e juízes.',
    technicalSkills: ['Pesquisa acadêmica aplicada', 'Engenharia mecatrônica profissional', 'Desenvolvimento de software de alta escala', 'Gestão de projetos complexos'],
    softSkills: ['Mentoria e formação de novas gerações', 'Networking global com empresas líderes', 'Cidadania científica ativa', 'Liderança executiva'],
    outcome: 'Criação de um ecossistema sustentável onde quem aprendeu passa o conhecimento adiante.'
  }
];

export const SEASON_STEPS: SeasonStep[] = [
  {
    number: '01',
    phase: 'Lançamento',
    title: 'Kickoff Global',
    period: 'Setembro (FLL/FTC) / Janeiro (FRC)',
    description: 'Transmissão mundial oficial onde o desafio do ano e o manual de regras de 100+ páginas são revelados simultaneamente para todas as equipes do planeta.',
    deliverables: ['Leitura minuciosa do manual de regras', 'Análise estratégica da pontuação da arena', 'Lista de requisitos funcionais do robô'],
    focusArea: 'Estratégia'
  },
  {
    number: '02',
    phase: 'Concepção',
    title: 'Brainstorming & Prototipagem Rápida',
    period: 'Semanas 1 e 2 pós-Kickoff',
    description: 'Geração livre de ideias com maquetes de papelão, madeira e peças rápidas para testar mecanismos de coleta, arremesso e locomoção antes do desenho final.',
    deliverables: ['Mecanismos conceituais validados', 'Decisão do tipo de drivetrain (tração)', 'Definição do escopo do projeto'],
    focusArea: 'Engenharia'
  },
  {
    number: '03',
    phase: 'Projeto Digital',
    title: 'Modelagem CAD & Simulação',
    period: 'Semanas 2 e 3 pós-Kickoff',
    description: 'Toda a estrutura mecânica é desenhada em softwares de CAD 3D (como Onshape ou SolidWorks) com tolerâncias milimétricas, centro de gravidade e peso calculados.',
    deliverables: ['Montagem completa em 3D no computador', 'Detalhamento de furações para corte CNC', 'Esquema elétrico e distribuição de massa'],
    focusArea: 'Engenharia'
  },
  {
    number: '04',
    phase: 'Produção',
    title: 'Fabricação & Montagem',
    period: 'Semanas 3 a 5 pós-Kickoff',
    description: 'Corte de perfis metálicos, impressão de engrenagens 3D, crimpagem de chicotes elétricos e montagem mecânica do chassi e subsistemas.',
    deliverables: ['Chassi mecânico montado', 'Painel elétrico organizado com segurança', 'Atuadores pneumáticos e motores instalados'],
    focusArea: 'Engenharia'
  },
  {
    number: '05',
    phase: 'Controle',
    title: 'Programação & Calibração',
    period: 'Semanas 4 a 6 pós-Kickoff',
    description: 'Desenvolvimento do código autônomo, implementação de malhas de controle PID para braços e elevadores, e ajuste de visão computacional com câmeras.',
    deliverables: ['Rotinas autônomas consistentes', 'Mapeamento ergonômico dos joysticks', 'Filtros de sensores e segurança de software'],
    focusArea: 'Software'
  },
  {
    number: '06',
    phase: 'Validação',
    title: 'Testes de Campo & Prática de Pilotos',
    period: 'Pré-torneios',
    description: 'O time de pilotos (Drive Team) treina centenas de ciclos na arena simulada para adquirir reflexos rápidos, enquanto mecânicos testam a durabilidade sob desgaste.',
    deliverables: ['Cronometragem de ciclos de pontuação', 'Checklists de manutenção preventiva de pits', 'Simulações de falhas e recuperação rápida'],
    focusArea: 'Estratégia'
  },
  {
    number: '07',
    phase: 'Clímax',
    title: 'Eventos Regionais, Nacionais & Mundial',
    period: 'Fevereiro a Abril (Mundial em Houston, TX)',
    description: 'Torneios presenciais de 3 a 4 dias com centenas de equipes, partidas eletrizantes em arena, entrevistas com juízes e celebração dos Core Values.',
    deliverables: ['Disputa de partidas classificatórias', 'Entrevistas de engenharia nos pits', 'Aliança nos playoffs eliminatórios'],
    focusArea: 'Competição'
  }
];

export const COMPETITION_AREAS = [
  {
    title: 'Engenharia Mecânica & Elétrica',
    description: 'Dimensionamento de motores, cálculo de redução de engrenagens, centro de massa, circuitos de proteção e cabeamento seguro.',
    icon: 'Wrench'
  },
  {
    title: 'Ciência da Computação & IA',
    description: 'Arquiteturas de software assíncronas, controle de malha fechada (PID), odometria, visão computacional e leitura de tags ópticas.',
    icon: 'Code'
  },
  {
    title: 'Scouting & Análise de Dados',
    description: 'Equipes coletam dados em tempo real de cada robô na arena para gerar dashboards estatísticos e montar alianças vencedoras.',
    icon: 'LineChart'
  },
  {
    title: 'Design, Comunicação & Mídia',
    description: 'Criação de identidade visual da equipe, documentação audiovisual, cobertura em tempo real em redes sociais e manuais técnicos.',
    icon: 'Palette'
  },
  {
    title: 'Gestão Financeira & Captação',
    description: 'Administração de orçamentos de milhares de reais, contato com patrocinadores corporativos e prestação de contas transparente.',
    icon: 'Coins'
  },
  {
    title: 'Impacto Social & Voluntariado',
    description: 'Projetos de extensão que levam oficinas gratuitas de robótica a escolas públicas e comunidades carentes (Outreach).',
    icon: 'Sparkles'
  }
];

export const BRAZIL_ECOSYSTEM_DATA = {
  eyebrow: '01 / FIRST NO BRASIL',
  headline: 'UMA REDE GLOBAL. UMA CONEXÃO COM O BRASIL.',
  intro: 'No Brasil, a FIRST encontrou no Sistema Indústria — através do SESI e do SENAI — o parceiro estratégico para transformar a educação tecnológica nacional, levando robótica de ponta desde salas de aula de escolas públicas e privadas até arenas com milhares de espectadores.',
  sesiRole: {
    title: 'SESI (Serviço Social da Indústria)',
    badge: 'EDUCAÇÃO BÁSICA & MAKER',
    description: 'Pioneiro e operador oficial das competições FIRST (como FLL e FTC) e realizador do Festival SESI de Robótica. Integra a robótica à grade curricular do Ensino Fundamental e Médio, promovendo letramento científico, pensamento crítico e os Valores Fundamentais em todo o território nacional.',
    highlights: [
      'Operador oficial dos torneios regionais e nacional da FLL e FTC',
      'Inserção do método STEAM na educação básica brasileira',
      'Realização anual do Festival SESI de Robótica em Brasília',
      'Inclusão e fomento a equipes em escolas de todo o país'
    ]
  },
  senaiRole: {
    title: 'SENAI (Serviço Nacional de Aprendizagem Industrial)',
    badge: 'FORMAÇÃO PROFISSIONAL & INDÚSTRIA 4.0',
    description: 'Referência hemisférica em educação profissionalizante, mecânica de precisão, usinagem CNC, eletrônica e automação. Oferece o suporte técnico industrial avançado para equipes de robôs de grande porte (FRC) e conecta diretamente os estudantes ao ecossistema da indústria brasileira de alta tecnologia.',
    highlights: [
      'Laboratórios avançados de usinagem CNC, corte a laser e impressão 3D',
      'Formação técnica em mecatrônica, automação e desenvolvimento de software',
      'Apoio à fabricação de componentes para equipes de FRC',
      'Ponte direta entre competidores e o mercado de trabalho industrial'
    ]
  },
  flowSteps: [
    { number: '01', title: 'FIRST', desc: 'Metodologia global STEM e desafios anuais de arena' },
    { number: '02', title: 'SESI / SENAI', desc: 'Infraestrutura, capacitação de mentores e operação nacional' },
    { number: '03', title: 'EDUCAÇÃO & TÉCNICA', desc: 'Ensino Fundamental, Médio e formação industrial aplicada' },
    { number: '04', title: 'EQUIPES BRASILEIRAS', desc: 'Milhares de estudantes organizados em times multidisciplinares' },
    { number: '05', title: 'FLL • FTC • FRC', desc: 'Competições que classificam talentos para o Mundial em Houston' }
  ]
};

export const TEAM_ROLES_DATA = [
  {
    role: 'Engenharia & CAD',
    area: 'Mecânica',
    description: 'Desenho 3D milimétrico, simulação de centro de massa, cálculo de esforços e tolerâncias mecânicas.',
    icon: 'Sliders'
  },
  {
    role: 'Programação & IA',
    area: 'Software',
    description: 'Código de controle autônomo, visão computacional com AprilTags, odometria e calibração de malhas PID.',
    icon: 'Code2'
  },
  {
    role: 'Usinagem & Montagem',
    area: 'Mecânica',
    description: 'Corte em router CNC, confecção de chassis, impressão 3D e fixação estrutural de alta resistência.',
    icon: 'Wrench'
  },
  {
    role: 'Elétrica & Sensores',
    area: 'Hardware',
    description: 'Distribuição de potência, fiação segura, crimpagem industrial, gerenciamento de baterias e encoders.',
    icon: 'Zap'
  },
  {
    role: 'Design & Identidade',
    area: 'Comunicação',
    description: 'Criação da marca da equipe, uniformes, documentação visual, banners de pits e presença digital.',
    icon: 'Palette'
  },
  {
    role: 'Scouting & Dados',
    area: 'Estratégia',
    description: 'Coleta de dados estatísticos em tempo real durante as partidas para seleção e táticas de alianças.',
    icon: 'BarChart3'
  },
  {
    role: 'Mídia & Outreach',
    area: 'Impacto Social',
    description: 'Oficinas comunitárias de robótica, projetos sociais em escolas públicas e divulgação científica.',
    icon: 'Sparkles'
  },
  {
    role: 'Gestão & Negócios',
    area: 'Liderança',
    description: 'Administração de orçamento, captação de patrocínios, cronograma executivo e relações corporativas.',
    icon: 'Users'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Autonomous (Autônomo)',
    category: 'Software',
    definition: 'Período inicial da partida em que o robô opera estritamente por sensores e linhas de código pré-programadas, sem qualquer intervenção humana.',
    example: 'Na FRC, os primeiros 15 segundos são autônomos e costumam valer pontuações multiplicadas.'
  },
  {
    term: 'TeleOp (Teleoperado)',
    category: 'Arena',
    definition: 'Fase da partida em que estudantes operam o robô manualmente através de joysticks e controladores a partir da área de pilotos.',
    example: 'Durante os 2 minutos de TeleOp, a sincronia entre o piloto do chassi e o operador de mecanismos é crucial.'
  },
  {
    term: 'Swerve Drive',
    category: 'Hardware',
    definition: 'Sistema de tração omnidirecional em que cada uma das quatro rodas possui motores independentes de tração e de rotação 360°, permitindo manobras vetoriais em qualquer direção.',
    example: 'Um chassi Swerve permite ao robô contornar defensores mantendo sua frente sempre apontada para o alvo de pontuação.'
  },
  {
    term: 'Pits (Boxes de Equipe)',
    category: 'Arena',
    definition: 'Área reservada do evento com estações de trabalho de 3x3m para cada equipe, onde acontecem manutenções rápidas, inspeções e trocas técnicas entre times.',
    example: 'Nos pits, equipes exibem seus cadernos de engenharia e recebem jurados para entrevistas detalhadas.'
  },
  {
    term: 'Scouting (Observação Estatística)',
    category: 'Estratégia',
    definition: 'Processo sistemático de coletar e tabular dados de desempenho (tempo de ciclo, precisão, falhas mecânicas) de todos os robôs do torneio durante as partidas.',
    example: 'O time de Scouting usa um aplicativo próprio para orientar o capitão na seleção de alianças dos playoffs.'
  },
  {
    term: 'AprilTag',
    category: 'Software',
    definition: 'Código bidimensional visual (semelhante a um QR Code simplificado) posicionado na arena para permitir que câmeras a bordo calculem a pose 3D exata do robô no espaço.',
    example: 'Ao enxergar a AprilTag no alvo, o código ajusta automaticamente a velocidade do lançador para garantir o acerto.'
  },
  {
    term: 'Control Hub',
    category: 'Hardware',
    definition: 'Dispositivo eletrônico integrado usado na FTC que combina um computador Android, controladores de motor DC, portas servo e barramento de sensores em uma única unidade compacta.',
    example: 'O REV Control Hub roda o servidor web local onde o código Java é transferido via Wi-Fi.'
  },
  {
    term: 'Alliance Selection',
    category: 'Estratégia',
    definition: 'Cerimônia formal onde os 8 melhores colocados das rodadas de qualificação convidam outros times para formar alianças fixas para a chave eliminatória.',
    example: 'Uma equipe com defesa impecável pode ser escolhida na primeira rodada mesmo estando em 20º lugar no ranking geral.'
  },
  {
    term: 'Impact Award',
    category: 'Cultura FIRST',
    definition: 'O prêmio mais honroso de toda a FIRST, que reconhece a equipe que mais personifica a missão da organização ao transformar a cultura científica de sua região.',
    example: 'Vencer o Impact Award em um regional garante vaga direta no mundial FIRST Championship.'
  },
  {
    term: 'Driver Station',
    category: 'Hardware',
    definition: 'Console portátil (geralmente um notebook com joysticks) usado pelos pilotos atrás das paredes de policarbonato para comandar o robô durante a partida.',
    example: 'A Driver Station se conecta à rede sem fio criptografada da arena gerenciada pelo software FMS.'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual é a faixa etária dos estudantes ou seu nível escolar?',
    options: [
      { label: 'Crianças de 9 a 12 anos (Ensino Fundamental I / II)', points: { fll: 3, ftc: 0, frc: 0 } },
      { label: 'Jovens de 12 a 15 anos (Ensino Fundamental II / Médio)', points: { fll: 1, ftc: 3, frc: 1 } },
      { label: 'Estudantes de 14 a 18 anos (Ensino Médio e Técnico)', points: { fll: 0, ftc: 2, frc: 3 } }
    ]
  },
  {
    id: 2,
    question: 'Qual é a infraestrutura e orçamento disponíveis para o laboratório?',
    options: [
      { label: 'Espaço em sala comum, kits modulares e foco em ciência/LEGO', points: { fll: 3, ftc: 0, frc: 0 } },
      { label: 'Oficina com bancada, ferramentas manuais, peças de alumínio e impressora 3D', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Espaço amplo, máquinas de corte/usinagem, equipe multidisciplinar e patrocínios', points: { fll: 0, ftc: 1, frc: 3 } }
    ]
  },
  {
    id: 3,
    question: 'Qual é o foco principal de aprendizado desejado?',
    options: [
      { label: 'Introdução lúdica ao método científico, pesquisa social e programação por blocos', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'Engenharia mecânica acessível, código em Java nativo e estratégia de alianças 2v2', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Robótica de grande porte em arena, sistemas pneumáticos, controle PID e gestão empresarial', points: { fll: 0, ftc: 1, frc: 3 } }
    ]
  }
];
