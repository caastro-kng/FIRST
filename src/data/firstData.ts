import { LeagueInfo, SeasonStep, StudentMilestone, CoreValue, GlossaryTerm, ComparisonCriterion } from '../types/first';

export const FIRST_HERO_STATS = [
  { label: 'Jovens participantes', value: '4M+', detail: 'Desde 1989' },
  { label: 'Países com presença FIRST', value: '114', detail: 'Movimento global' },
  { label: 'Eventos oficiais', value: '5.400+', detail: 'Temporada 2024–2025' },
  { label: 'Horas de voluntariado', value: '39M+', detail: 'Temporada 2024–2025' },
];

export const FIRST_HISTORY = {
  acronymMeaning: 'For Inspiration and Recognition of Science and Technology',
  ptTranslation: 'Para Inspiração e Reconhecimento da Ciência e Tecnologia',
  founders: 'Fundada por Dean Kamen; Woodie Flowers teve papel central na cultura educacional da organização',
  foundedYear: '1989',
  headquarters: 'Manchester, New Hampshire, EUA',
  mission: 'Inspirar jovens a serem líderes e inovadores em ciência e tecnologia por meio de programas de mentoria, engenharia prática, colaboração e competição.',
  vision: 'Transformar a cultura para que ciência, tecnologia e engenharia sejam celebradas com o mesmo entusiasmo dedicado a esporte e entretenimento.',
};

export const CORE_VALUES: CoreValue[] = [
  { name: 'Descoberta', tagline: 'Explorar novas habilidades e ideias', description: 'Aprender fazendo, testando e transformando erros em informação para a próxima versão.', iconName: 'Compass' },
  { name: 'Inovação', tagline: 'Criatividade para resolver problemas', description: 'Usar engenharia, pesquisa e criatividade para desenvolver soluções originais.', iconName: 'Lightbulb' },
  { name: 'Impacto', tagline: 'Aplicar o aprendizado para melhorar o mundo', description: 'Levar STEM para além da arena por meio de projetos, oficinas, mentoria e extensão.', iconName: 'Target' },
  { name: 'Inclusão', tagline: 'Respeitar e acolher diferenças', description: 'Construir equipes em que diferentes experiências e perspectivas tenham espaço real.', iconName: 'Users' },
  { name: 'Trabalho em Equipe', tagline: 'Mais fortes quando colaboramos', description: 'Integrar mecânica, elétrica, software, estratégia, comunicação e gestão em um único time.', iconName: 'HeartHandshake' },
  { name: 'Diversão', tagline: 'Celebrar a jornada', description: 'Competição, aprendizado, amizade e celebração fazem parte da experiência FIRST.', iconName: 'Sparkles' },
];

export const PHILOSOPHY_CONCEPTS = [
  {
    title: 'Gracious Professionalism®',
    subtitle: 'Profissionalismo Gracioso',
    author: 'Conceito associado ao Dr. Woodie Flowers',
    description: 'Combina excelência técnica, respeito, integridade e generosidade. É possível competir intensamente sem diminuir quem está do outro lado da arena.',
    highlight: 'Equipes frequentemente compartilham peças, ferramentas e conhecimento mesmo quando serão adversárias na próxima partida.',
  },
  {
    title: 'Coopertition®',
    subtitle: 'Cooperação dentro da competição',
    author: 'Princípio da cultura FIRST',
    description: 'Reconhece que equipes podem competir por resultados enquanto colaboram para elevar o nível técnico e humano de toda a comunidade.',
    highlight: 'A dinâmica de alianças faz com que adversários em uma rodada possam se tornar parceiros em outra.',
  },
];

export const LEAGUES_DATA: Record<string, LeagueInfo> = {
  fll: {
    id: 'fll',
    acronym: 'FLL',
    name: 'FIRST LEGO League',
    tagline: 'A porta de entrada para robótica, ciência e inovação',
    description: 'Na divisão Challenge, estudantes usam LEGO® Education SPIKE™ Prime para construir e programar um robô autônomo, resolver missões e desenvolver um Projeto de Inovação ligado ao tema anual.',
    targetAge: '9 a 16 anos na Challenge (varia por país)',
    teamSize: 'Até 10 estudantes por equipe na Challenge',
    robotSize: 'Robô compacto para a mesa oficial de missões; restrições seguem o Robot Game Rulebook da temporada',
    robotWeight: 'Sem limite oficial de peso divulgado como regra central; equipes normalmente usam robôs compactos de LEGO',
    materials: 'LEGO® Education SPIKE™ Prime, peças Technic, motores e sensores compatíveis com as regras da temporada',
    programming: ['SPIKE App / programação por blocos', 'Python quando permitido pelo ambiente educacional utilizado'],
    fieldSize: 'Mesa de missões de aproximadamente 2,36 m × 1,14 m',
    matchDuration: '2 minutos e 30 segundos, com robô operando autonomamente',
    allianceFormat: 'Jogo do robô por equipe em mesa oficial; formato de evento pode variar por região',
    costLevel: 'Entrada / educacional',
    badgeColor: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', accent: '#F59E0B' },
    highlights: [
      'Robô autônomo durante o Robot Game',
      'Projeto de Inovação ligado ao tema anual',
      'Design do Robô e estratégia documentados pela equipe',
      'Core Values presentes em toda a experiência',
    ],
    keyComponents: [
      'Hub LEGO® Education SPIKE™ Prime',
      'Motores angulares com encoder',
      'Sensores de cor e distância',
      'Anexos modulares para diferentes missões',
    ],
    evaluationPillars: [
      { title: 'Robot Game', description: 'Programar o robô para completar missões de forma autônoma durante a partida.' },
      { title: 'Robot Design', description: 'Explicar decisões de construção, programação, testes e estratégia.' },
      { title: 'Projeto de Inovação', description: 'Pesquisar um problema real ligado ao tema e desenvolver uma solução.' },
      { title: 'Core Values', description: 'Demonstrar descoberta, inovação, impacto, inclusão, trabalho em equipe e diversão.' },
    ],
    quote: 'Na FLL, o robô é uma ferramenta para aprender a pesquisar, testar, colaborar e transformar ideias em soluções.',
    imageUrl: 'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0312.jpg?height=1260&name=20230420_bm_0312.jpg&width=1890',
    imageCaption: 'Participantes da FIRST LEGO League durante uma rodada do Robot Game.',
  },
  ftc: {
    id: 'ftc',
    acronym: 'FTC',
    name: 'FIRST Tech Challenge',
    tagline: 'Engenharia aplicada, fabricação e software de controle',
    description: 'A FTC coloca estudantes diante de um ciclo completo de engenharia: estratégia, CAD, fabricação, elétrica, programação, visão computacional, testes e competição em alianças.',
    targetAge: 'Ensino Fundamental II e Médio; a FIRST atualmente apresenta o programa para Grades 7–12 nos EUA',
    teamSize: 'Tamanho flexível; equipes escolares e comunitárias costumam trabalhar em grupos multidisciplinares',
    robotSize: 'Configuração inicial dentro de 18" × 18" × 18" (45,7 cm × 45,7 cm × 45,7 cm)',
    robotWeight: 'Sem limite oficial de peso no manual 2025–2026; peso continua sendo fator importante de desempenho e segurança',
    materials: 'Perfis e chapas de alumínio, componentes comerciais permitidos, peças fabricadas e impressão 3D',
    programming: ['Java (Android Studio / OnBot Java)', 'Blocks Programming'],
    fieldSize: 'Arena de aproximadamente 12 × 12 pés (3,66 m × 3,66 m)',
    matchDuration: 'Partidas combinam período autônomo e período controlado por estudantes; detalhes seguem o manual da temporada',
    allianceFormat: 'Alianças 2 vs 2',
    costLevel: 'Intermediário',
    badgeColor: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', accent: '#0066B3' },
    highlights: [
      'Liberdade de projeto com fabricação e impressão 3D',
      'Programação em Java ou Blocks',
      'Visão computacional e sensores de navegação',
      'Portfólio e apresentação técnica para jurados',
    ],
    keyComponents: [
      'REV Control Hub',
      'Motores DC de 12 V com encoders',
      'Servomotores e sensores',
      'Câmeras compatíveis com recursos de visão computacional',
    ],
    evaluationPillars: [
      { title: 'Desempenho na Arena', description: 'Projetar um robô confiável para cumprir objetivos da temporada em alianças 2v2.' },
      { title: 'Portfólio de Engenharia', description: 'Documentar processo de projeto, testes, decisões técnicas e evolução do robô.' },
      { title: 'Entrevista com Jurados', description: 'Explicar engenharia, cultura de equipe, impacto e organização.' },
      { title: 'Prêmios FIRST Tech Challenge', description: 'Reconhecer excelência técnica, inovação, impacto e cultura de equipe conforme critérios da temporada.' },
    ],
    quote: 'Na FTC, uma ideia precisa sobreviver ao CAD, à bancada, ao código e finalmente à arena.',
    imageUrl: 'https://community.firstinspires.org/hubfs/preview%20event.jpg',
    imageCaption: 'Arena oficial da FIRST Tech Challenge em evento de pré-temporada.',
  },
  frc: {
    id: 'frc',
    acronym: 'FRC',
    name: 'FIRST Robotics Competition',
    tagline: 'Engenharia industrial em escala de arena',
    description: 'A FRC reúne estudantes do Ensino Médio em equipes que projetam, fabricam, programam e operam robôs de grande porte em competições 3v3, trabalhando com mentores e processos próximos aos da engenharia profissional.',
    targetAge: 'Grades 9–12 / aproximadamente 14 a 18 anos',
    teamSize: 'Flexível; equipes podem variar de grupos pequenos a organizações com dezenas de estudantes',
    robotSize: 'Regras 2026: perímetro inicial máximo de 110" (2,794 m) e altura máxima de 30" (76,2 cm)',
    robotWeight: 'Regras 2026: até 115 lb (52,16 kg), excluindo bumpers e bateria',
    materials: 'Alumínio estrutural, chapas, peças CNC, impressão 3D, polímeros e componentes elétricos permitidos',
    programming: ['Java (WPILib)', 'C++ (WPILib)', 'Python via ecossistema suportado'],
    fieldSize: 'Arena de grande porte; dimensões e elementos variam conforme o jogo anual',
    matchDuration: 'Formato inclui período autônomo e período teleoperado; detalhes seguem o manual anual',
    allianceFormat: 'Alianças 3 vs 3',
    costLevel: 'Avançado / industrial',
    badgeColor: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', accent: '#ED1C24' },
    highlights: [
      'Robôs industriais e fabricação avançada',
      'Estratégia de alianças 3v3 e scouting',
      'Controle, autonomia e visão computacional',
      'Gestão, captação, comunicação e impacto comunitário',
    ],
    keyComponents: [
      'roboRIO 2.0',
      'Motores brushless de alta potência permitidos pelas regras',
      'Controladores de motor e sensores de navegação',
      'Câmeras e sistemas de localização/visão compatíveis com a temporada',
    ],
    evaluationPillars: [
      { title: 'Competição em Arena 3v3', description: 'Executar estratégia, ciclos de pontuação, defesa e objetivos específicos do jogo anual.' },
      { title: 'FIRST Impact Award', description: 'Reconhecer equipes que exemplificam a missão da FIRST e ampliam o impacto de STEM em suas comunidades.' },
      { title: 'Prêmios Técnicos', description: 'Reconhecer excelência em design, controle, qualidade, inovação e outras áreas definidas pela temporada.' },
      { title: 'Scouting e Alianças', description: 'Usar dados e observação para decisões estratégicas em playoffs.' },
    ],
    quote: 'A FRC transforma uma temporada em um laboratório de engenharia, liderança, comunicação e tomada de decisão sob pressão.',
    imageUrl: 'https://community.firstinspires.org/hubfs/blog/frc/2025-robot-rules-preview-for-2026.jpg',
    imageCaption: 'Equipe da FIRST Robotics Competition trabalhando em um robô de grande porte.',
  },
};

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  { id: 'age', label: 'Faixa Etária Recomendada', category: 'Geral', fll: 'Challenge: 9–16 anos, variando por país', ftc: 'Grades 7–12 nos EUA; equivalente ao Fundamental II / Médio', frc: 'Grades 9–12 / aproximadamente 14–18 anos' },
  { id: 'team_size', label: 'Estrutura de Equipe', category: 'Geral', fll: 'Até 10 estudantes por equipe Challenge', ftc: 'Flexível, normalmente multidisciplinar', frc: 'Flexível, de equipes compactas a dezenas de estudantes' },
  { id: 'platform', label: 'Plataforma Estrutural', category: 'Robótica & Hardware', fll: 'LEGO® Education SPIKE™ / Technic', ftc: 'Perfis, chapas, componentes comerciais e peças fabricadas', frc: 'Estruturas e mecanismos de escala industrial' },
  { id: 'weight', label: 'Peso do Robô', category: 'Robótica & Hardware', fll: 'Sem limite central de peso; robôs compactos de LEGO', ftc: 'Sem limite oficial de peso no manual 2025–2026', frc: '2026: até 115 lb / 52,16 kg, sem bumpers e bateria' },
  { id: 'size', label: 'Restrição de Dimensões', category: 'Robótica & Hardware', fll: 'Definida pelo Robot Game Rulebook e pela mesa', ftc: 'Inicial: 18" × 18" × 18"', frc: '2026: perímetro ≤ 110" e altura ≤ 30"' },
  { id: 'control_system', label: 'Controlador Central', category: 'Robótica & Hardware', fll: 'SPIKE Prime Hub', ftc: 'REV Control Hub / ecossistema oficial', frc: 'roboRIO 2.0' },
  { id: 'programming_lang', label: 'Linguagens de Programação', category: 'Software & Autonomia', fll: 'Blocos e recursos educacionais compatíveis', ftc: 'Java / Blocks', frc: 'Java, C++ e Python no ecossistema WPILib' },
  { id: 'autonomous_mode', label: 'Autonomia', category: 'Software & Autonomia', fll: 'Robot Game inteiramente autônomo', ftc: 'Possui período autônomo definido pelo jogo anual', frc: 'Possui período autônomo definido pelo jogo anual' },
  { id: 'field_size', label: 'Arena / Mesa', category: 'Competição & Arena', fll: 'Mesa de aproximadamente 2,36 m × 1,14 m', ftc: 'Arena de aproximadamente 3,66 m × 3,66 m', frc: 'Arena de grande porte, específica do jogo anual' },
  { id: 'alliance_structure', label: 'Formato de Partida', category: 'Competição & Arena', fll: 'Robot Game por equipe em mesa', ftc: 'Alianças 2 vs 2', frc: 'Alianças 3 vs 3' },
  { id: 'innovation_project', label: 'Pesquisa / Impacto', category: 'Geral', fll: 'Projeto de Inovação é parte central do programa', ftc: 'Impacto, engenharia e organização entram na avaliação e premiações', frc: 'Impacto comunitário e cultura de equipe aparecem em prêmios como o FIRST Impact Award' },
];

export const STUDENT_JOURNEY_STAGES: StudentMilestone[] = [
  {
    stage: '01. Descoberta & Fundamentos', level: 'Iniciação', ageRange: '9 a 12 anos', leagueMatch: 'FIRST LEGO League',
    description: 'Primeiro contato com método científico, pensamento computacional, prototipagem e trabalho em equipe.',
    technicalSkills: ['Programação por blocos', 'Engrenagens e mecanismos simples', 'Sensores', 'Construção modular'],
    softSkills: ['Colaboração', 'Apresentação', 'Curiosidade', 'Aprendizado por tentativa e erro'],
    outcome: 'Entender tecnologia como ferramenta para investigar e resolver problemas.',
  },
  {
    stage: '02. Engenharia Aplicada', level: 'Intermediário', ageRange: '12 a 16 anos', leagueMatch: 'FIRST Tech Challenge',
    description: 'Transição para estruturas fabricadas, CAD, elétrica, programação textual e estratégia de alianças.',
    technicalSkills: ['Java', 'CAD', 'Visão computacional', 'Fabricação e impressão 3D'],
    softSkills: ['Gestão de tempo', 'Documentação', 'Estratégia', 'Resolução sob pressão'],
    outcome: 'Ganhar autonomia para projetar e integrar subsistemas de um robô competitivo.',
  },
  {
    stage: '03. Escala Industrial & Liderança', level: 'Avançado', ageRange: '14 a 18 anos', leagueMatch: 'FIRST Robotics Competition',
    description: 'Experiência de engenharia em grande escala, com fabricação, software, estratégia, captação e operação de equipe complexa.',
    technicalSkills: ['Controle e odometria', 'Swerve Drive', 'Eletrônica de potência', 'Fabricação CNC'],
    softSkills: ['Liderança', 'Captação', 'Scouting', 'Mentoria e impacto'],
    outcome: 'Desenvolver repertório técnico e humano aplicável a universidade, indústria e empreendedorismo.',
  },
  {
    stage: '04. Universidade, Carreira & Mentoria', level: 'Alumni & Futuro', ageRange: '18+ anos', leagueMatch: 'Comunidade FIRST Alumni',
    description: 'Ex-alunos levam competências da FIRST para estudo e carreira e podem retornar como mentores, voluntários e juízes.',
    technicalSkills: ['Pesquisa aplicada', 'Engenharia profissional', 'Software', 'Gestão de projetos'],
    softSkills: ['Mentoria', 'Networking', 'Cidadania científica', 'Liderança'],
    outcome: 'Transformar experiência competitiva em trajetória de formação e contribuição para novas equipes.',
  },
];

export const SEASON_STEPS: SeasonStep[] = [
  { number: '01', phase: 'Lançamento', title: 'Kickoff & Regras', period: 'Início da temporada', description: 'A equipe conhece o desafio, estuda regras, pontuação, restrições e oportunidades estratégicas.', deliverables: ['Leitura do manual', 'Mapa de pontuação', 'Requisitos do robô'], focusArea: 'Estratégia' },
  { number: '02', phase: 'Concepção', title: 'Estratégia & Prototipagem', period: 'Primeiras semanas', description: 'Ideias são comparadas por testes rápidos antes de qualquer solução definitiva.', deliverables: ['Protótipos', 'Matriz de decisão', 'Escopo técnico'], focusArea: 'Engenharia' },
  { number: '03', phase: 'Projeto Digital', title: 'CAD & Arquitetura', period: 'Desenvolvimento', description: 'A equipe organiza estrutura, mecanismos, eletrônica e interfaces entre subsistemas.', deliverables: ['CAD', 'Desenhos', 'Arquitetura elétrica'], focusArea: 'Engenharia' },
  { number: '04', phase: 'Produção', title: 'Fabricação & Montagem', period: 'Build season', description: 'Peças são fabricadas, sistemas integrados e o robô passa a existir fisicamente.', deliverables: ['Chassi', 'Mecanismos', 'Elétrica integrada'], focusArea: 'Engenharia' },
  { number: '05', phase: 'Controle', title: 'Programação & Calibração', period: 'Build season', description: 'Software, sensores, controles e automação são refinados com testes repetidos.', deliverables: ['Código funcional', 'Rotinas autônomas', 'Calibração'], focusArea: 'Software' },
  { number: '06', phase: 'Validação', title: 'Testes & Treino de Pilotos', period: 'Pré-eventos', description: 'Robô e equipe treinam ciclos, manutenção, comunicação e recuperação de falhas.', deliverables: ['Checklists', 'Treino de drive team', 'Dados de desempenho'], focusArea: 'Estratégia' },
  { number: '07', phase: 'Clímax', title: 'Eventos & Championship', period: 'Calendário regional e internacional', description: 'A temporada culmina em eventos oficiais com partidas, avaliação técnica, premiações e formação de alianças.', deliverables: ['Partidas', 'Entrevistas', 'Playoffs e premiações'], focusArea: 'Competição' },
];

export const COMPETITION_AREAS = [
  { title: 'Engenharia Mecânica & Elétrica', description: 'Mecanismos, transmissão, estrutura, alimentação, sensores e integração de hardware.', icon: 'Wrench' },
  { title: 'Software & Autonomia', description: 'Controle, sensores, visão computacional, odometria e automação.', icon: 'Code' },
  { title: 'Scouting & Análise de Dados', description: 'Coleta e interpretação de dados para estratégia de partidas e alianças.', icon: 'LineChart' },
  { title: 'Design, Comunicação & Mídia', description: 'Identidade da equipe, documentação, comunicação e presença pública.', icon: 'Palette' },
  { title: 'Gestão Financeira & Captação', description: 'Orçamento, patrocínios, planejamento e relacionamento com parceiros.', icon: 'Coins' },
  { title: 'Impacto Social & Voluntariado', description: 'Oficinas, mentoria, divulgação científica e projetos de extensão.', icon: 'Sparkles' },
];

export const BRAZIL_ECOSYSTEM_DATA = {
  eyebrow: 'FIRST NO BRASIL',
  headline: 'UMA REDE GLOBAL. UMA CONEXÃO COM O BRASIL.',
  intro: 'No Brasil, iniciativas do Sistema Indústria, especialmente por meio do SESI e do SENAI, conectam educação, tecnologia, formação profissional e competições de robótica.',
  sesiRole: {
    title: 'SESI (Serviço Social da Indústria)', badge: 'EDUCAÇÃO & ROBÓTICA',
    description: 'O SESI atua na educação básica e na realização de competições e experiências de robótica, incluindo eventos do ecossistema FIRST no Brasil.',
    highlights: ['Educação STEM e cultura maker', 'Competições e eventos de robótica', 'Formação de estudantes e mentores', 'Conexão entre escolas e comunidade'],
  },
  senaiRole: {
    title: 'SENAI (Serviço Nacional de Aprendizagem Industrial)', badge: 'FORMAÇÃO PROFISSIONAL & INDÚSTRIA',
    description: 'O SENAI conecta formação técnica, laboratórios, fabricação digital, automação e competências industriais que dialogam diretamente com desafios de robótica competitiva.',
    highlights: ['Laboratórios e fabricação digital', 'Formação técnica', 'Automação e mecatrônica', 'Conexão com indústria e carreira'],
  },
  flowSteps: [
    { number: '01', title: 'FIRST', desc: 'Metodologia global de STEM e desafios de temporada' },
    { number: '02', title: 'SESI / SENAI', desc: 'Educação, formação técnica e infraestrutura' },
    { number: '03', title: 'APRENDIZADO', desc: 'Engenharia, programação, pesquisa e trabalho em equipe' },
    { number: '04', title: 'EQUIPES', desc: 'Estudantes organizados em times multidisciplinares' },
    { number: '05', title: 'ARENA', desc: 'Eventos, desafios e oportunidades de progressão' },
  ],
};

export const TEAM_ROLES_DATA = [
  { role: 'Engenharia & CAD', area: 'Mecânica', description: 'Modelagem 3D, arquitetura mecânica, dimensionamento e documentação.', icon: 'Sliders' },
  { role: 'Programação & IA', area: 'Software', description: 'Controle, autonomia, visão computacional, sensores e telemetria.', icon: 'Code2' },
  { role: 'Fabricação & Montagem', area: 'Mecânica', description: 'Usinagem, impressão 3D, montagem e manutenção do robô.', icon: 'Wrench' },
  { role: 'Elétrica & Sensores', area: 'Hardware', description: 'Distribuição de potência, cabeamento, controladores e sensores.', icon: 'Zap' },
  { role: 'Design & Identidade', area: 'Comunicação', description: 'Marca da equipe, uniformes, pits, apresentações e presença digital.', icon: 'Palette' },
  { role: 'Scouting & Dados', area: 'Estratégia', description: 'Análise de desempenho, observação de partidas e apoio a decisões de aliança.', icon: 'BarChart3' },
  { role: 'Mídia & Outreach', area: 'Impacto Social', description: 'Comunicação, oficinas, eventos e projetos de divulgação científica.', icon: 'Sparkles' },
  { role: 'Gestão & Negócios', area: 'Liderança', description: 'Cronograma, orçamento, patrocínio, logística e organização da equipe.', icon: 'Users' },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { term: 'Autonomous (Autônomo)', category: 'Software', definition: 'Período ou modo em que o robô executa ações programadas sem comando direto dos pilotos.', example: 'Na FLL, o Robot Game é realizado com o robô executando programas autônomos.' },
  { term: 'TeleOp / Driver-Controlled', category: 'Arena', definition: 'Fase em que estudantes controlam o robô durante a partida.', example: 'FTC e FRC combinam autonomia com períodos controlados pelos pilotos conforme as regras de cada temporada.' },
  { term: 'Swerve Drive', category: 'Hardware', definition: 'Sistema de tração em que módulos podem controlar direção e velocidade das rodas de forma independente.', example: 'É comum em FRC por oferecer grande mobilidade e controle do chassi.' },
  { term: 'Pits', category: 'Arena', definition: 'Área de trabalho das equipes durante eventos, usada para manutenção, inspeção e preparação.', example: 'Entre partidas, mecânicos e programadores usam os pits para reparar e ajustar o robô.' },
  { term: 'Scouting', category: 'Estratégia', definition: 'Coleta estruturada de dados e observações sobre robôs, equipes e partidas.', example: 'Dados de scouting ajudam a preparar estratégia e decisões de playoffs.' },
  { term: 'AprilTag', category: 'Software', definition: 'Marcador visual usado por sistemas de visão computacional para estimar posição e orientação.', example: 'Uma câmera pode detectar uma AprilTag e ajudar o robô a se localizar na arena.' },
  { term: 'Control Hub', category: 'Hardware', definition: 'Controlador integrado usado no ecossistema FIRST Tech Challenge para conexão de motores, servos, sensores e software.', example: 'O código FTC pode ser executado no Control Hub e interagir com os dispositivos conectados.' },
  { term: 'Alliance', category: 'Estratégia', definition: 'Grupo de equipes que compete junto em uma partida ou fase de playoffs.', example: 'Na FTC as alianças são 2v2; na FRC, 3v3.' },
  { term: 'FIRST Impact Award', category: 'Cultura FIRST', definition: 'Prêmio da FRC que reconhece uma equipe que representa de forma exemplar a missão e o impacto da FIRST.', example: 'Projetos de longo prazo em STEM, mentoria e expansão de acesso podem fazer parte da trajetória de uma equipe candidata.' },
  { term: 'Driver Station', category: 'Hardware', definition: 'Sistema usado pela equipe de pilotos para se comunicar com o robô durante partidas, de acordo com o ecossistema de cada programa.', example: 'Na FRC, o software Driver Station integra a operação do robô à infraestrutura de campo.' },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual é a faixa etária ou etapa escolar principal?',
    options: [
      { label: 'Crianças e jovens em fase de introdução à robótica e pesquisa', points: { fll: 3, ftc: 0, frc: 0 } },
      { label: 'Estudantes do Fundamental II / início do Médio', points: { fll: 1, ftc: 3, frc: 1 } },
      { label: 'Estudantes do Ensino Médio com interesse em engenharia avançada', points: { fll: 0, ftc: 2, frc: 3 } },
    ],
  },
  {
    id: 2,
    question: 'Qual estrutura está disponível para a equipe?',
    options: [
      { label: 'Sala de aula e kits LEGO® Education', points: { fll: 3, ftc: 0, frc: 0 } },
      { label: 'Bancada, ferramentas, componentes, impressão 3D e espaço de testes', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Oficina, fabricação avançada, grande equipe e rede de parceiros', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
  {
    id: 3,
    question: 'Qual experiência de aprendizado é mais desejada?',
    options: [
      { label: 'Pesquisa, criatividade, programação e construção modular', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'CAD, fabricação, Java, sensores e alianças 2v2', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Robôs de grande porte, estratégia 3v3, fabricação e gestão de equipe', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
];
