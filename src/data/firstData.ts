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
  { id: 'control_system', label: 'Controlador Central', category: 'Robótica & Hardware', fll: 'LEGO® Education SPIKE™ Prime Hub', ftc: 'REV Control Hub', frc: 'roboRIO 2.0' },
  { id: 'programming_lang', label: 'Programação', category: 'Software & Autonomia', fll: 'SPIKE App / blocos; outros ambientes conforme regras e edição', ftc: 'Java (Android Studio / OnBot Java) ou Blocks', frc: 'Java, C++ ou Python no ecossistema WPILib/suportado' },
  { id: 'autonomous', label: 'Autonomia', category: 'Software & Autonomia', fll: 'Robot Game totalmente autônomo', ftc: 'Período autônomo + período controlado por estudantes', frc: 'Período autônomo + período teleoperado' },
  { id: 'vision', label: 'Visão Computacional', category: 'Software & Autonomia', fll: 'Não é requisito central; sensores LEGO são predominantes', ftc: 'Comum em estratégias de localização e detecção', frc: 'Muito usada para localização, alinhamento e autonomia' },
  { id: 'field_size', label: 'Escala da Arena', category: 'Competição & Arena', fll: 'Mesa de missões ~2,36 × 1,14 m', ftc: 'Arena ~3,66 × 3,66 m', frc: 'Arena de grande porte definida a cada jogo' },
  { id: 'alliance_structure', label: 'Formato de Partida', category: 'Competição & Arena', fll: 'Execução por equipe na mesa; formatos podem variar por evento', ftc: 'Alianças 2 vs 2', frc: 'Alianças 3 vs 3' },
  { id: 'engineering_docs', label: 'Documentação / Apresentação', category: 'Competição & Arena', fll: 'Robot Design + Projeto de Inovação + Core Values', ftc: 'Portfólio de Engenharia + entrevista com jurados', frc: 'Documentação interna, apresentações e prêmios específicos; requisitos variam por prêmio' },
];

export const SEASON_STEPS: SeasonStep[] = [
  { number: '01', phase: 'Kickoff', title: 'Entender o desafio', period: 'Início da temporada', description: 'A equipe estuda regras, campo, pontuação e restrições antes de tomar decisões de projeto.', deliverables: ['Leitura do manual', 'Mapa de pontuação', 'Primeiras prioridades'], focusArea: 'Estratégia' },
  { number: '02', phase: 'Estratégia', title: 'Escolher o que vale a pena resolver', period: 'Primeiras semanas', description: 'O time compara caminhos, riscos e retorno de cada mecanismo para definir uma arquitetura de jogo coerente.', deliverables: ['Matriz de prioridades', 'Arquitetura do robô', 'Plano de testes'], focusArea: 'Estratégia' },
  { number: '03', phase: 'Prototipagem', title: 'Transformar hipóteses em mecanismos', period: 'Build season', description: 'Protótipos rápidos ajudam a validar geometrias, materiais, velocidades e formas de manipular objetos do jogo.', deliverables: ['Protótipos funcionais', 'Dados de teste', 'Escolhas de mecanismo'], focusArea: 'Engenharia' },
  { number: '04', phase: 'Integração', title: 'Construir o sistema completo', period: 'Meio da temporada', description: 'Mecânica, elétrica e software passam a ser integrados em um robô confiável e reparável.', deliverables: ['Chassi integrado', 'Elétrica organizada', 'Checklist de manutenção'], focusArea: 'Engenharia' },
  { number: '05', phase: 'Software', title: 'Ganhar consistência', period: 'Testes e iteração', description: 'Controle, sensores, autonomia e ferramentas de diagnóstico transformam um robô funcional em um robô previsível.', deliverables: ['Rotinas autônomas', 'Telemetria', 'Ajustes de controle'], focusArea: 'Software' },
  { number: '06', phase: 'Treino', title: 'Converter engenharia em desempenho', period: 'Pré-evento', description: 'Drive team, pit crew e scouting ensaiam operação, estratégia, reparos e comunicação sob pressão.', deliverables: ['Ciclos cronometrados', 'Plano de scouting', 'Protocolos de pit'], focusArea: 'Competição' },
  { number: '07', phase: 'Evento', title: 'Competir, aprender e iterar', period: 'Competição oficial', description: 'Cada partida gera dados. A equipe ajusta estratégia, manutenção e software ao longo do evento.', deliverables: ['Scouting de partidas', 'Ajustes entre rounds', 'Retrospectiva do evento'], focusArea: 'Competição' },
];

export const STUDENT_MILESTONES: StudentMilestone[] = [
  { stage: 'Explorador', level: 'Fundamentos', ageRange: 'Primeiros contatos', leagueMatch: 'FLL / iniciação', technicalSkills: ['Montagem', 'Sensores básicos', 'Lógica por blocos'], softSkills: ['Curiosidade', 'Colaboração', 'Comunicação'], description: 'Começa entendendo como um robô percebe o ambiente e como uma equipe transforma um problema em pequenas tarefas testáveis.', outcome: 'Entende o ciclo construir → testar → melhorar.' },
  { stage: 'Construtor', level: 'Aplicação', ageRange: 'Intermediário', leagueMatch: 'FTC / projetos aplicados', technicalSkills: ['CAD', 'Fabricação', 'Elétrica', 'Java / controle'], softSkills: ['Responsabilidade', 'Documentação', 'Resolução de problemas'], description: 'Passa a trabalhar com subsistemas mais complexos e aprende que confiabilidade vale tanto quanto uma ideia inovadora.', outcome: 'Consegue contribuir de forma autônoma em um subsistema.' },
  { stage: 'Especialista', level: 'Profundidade', ageRange: 'Avançado', leagueMatch: 'FTC / FRC', technicalSkills: ['Controle avançado', 'Visão computacional', 'Arquitetura de software', 'Mecanismos complexos'], softSkills: ['Mentoria', 'Tomada de decisão', 'Comunicação técnica'], description: 'Aprofunda uma área sem perder a visão sistêmica do robô e passa a orientar colegas menos experientes.', outcome: 'Conecta especialização técnica com resultado de equipe.' },
  { stage: 'Líder', level: 'Sistema', ageRange: 'Transição para carreira', leagueMatch: 'FRC / alumni', technicalSkills: ['Integração de sistemas', 'Planejamento', 'Análise de dados'], softSkills: ['Liderança', 'Gestão', 'Apresentação', 'Mentoria'], description: 'Coordena pessoas, prioridades e interfaces entre áreas, traduzindo objetivos estratégicos em execução.', outcome: 'Sai preparado para projetos acadêmicos e profissionais mais complexos.' },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { term: 'Autonomous', category: 'Software', definition: 'Período ou modo em que o robô executa ações programadas sem comando direto do driver.', example: 'Na FLL o Robot Game é autônomo; em FTC e FRC há uma fase autônoma dentro da partida.' },
  { term: 'AprilTag', category: 'Software', definition: 'Marcador visual usado por sistemas de visão computacional para estimar posição e orientação em relação ao campo.', example: 'Uma câmera identifica a tag para ajudar o robô a se alinhar a uma zona de pontuação.' },
  { term: 'Control Hub', category: 'Hardware', definition: 'Controlador integrado muito utilizado na FTC para executar o software do robô e conectar dispositivos compatíveis.', example: 'Motores, sensores e outros módulos são coordenados pelo sistema de controle da equipe.' },
  { term: 'Swerve Drive', category: 'Hardware', definition: 'Sistema de tração em que módulos de roda podem girar independentemente, permitindo movimento omnidirecional.', example: 'Um robô FRC pode transladar lateralmente enquanto mantém o chassi apontado para um alvo.' },
  { term: 'Scouting', category: 'Estratégia', definition: 'Processo de coletar, organizar e analisar dados de equipes e partidas para apoiar decisões estratégicas.', example: 'A equipe registra ciclos, consistência e comportamento de outros robôs antes dos playoffs.' },
  { term: 'Alliance Selection', category: 'Arena', definition: 'Processo usado em determinados eventos para formar alianças que avançam para fases eliminatórias.', example: 'Capitães avaliam dados de scouting antes de convidar parceiros para os playoffs.' },
  { term: 'Gracious Professionalism', category: 'Cultura FIRST', definition: 'Princípio da FIRST que combina excelência, respeito, integridade e colaboração mesmo em ambiente competitivo.', example: 'Emprestar uma peça para outra equipe antes de uma partida decisiva exemplifica o conceito.' },
  { term: 'Coopertition', category: 'Cultura FIRST', definition: 'Ideia de cooperar e compartilhar conhecimento ao mesmo tempo em que se compete seriamente.', example: 'Duas equipes podem disputar ranking e ainda assim colaborar para resolver um problema técnico.' },
  { term: 'Pit', category: 'Arena', definition: 'Área de trabalho da equipe durante um evento, usada para manutenção, programação, inspeção e preparação do robô.', example: 'Entre partidas, o pit crew troca uma peça danificada e executa o checklist elétrico.' },
  { term: 'Drive Team', category: 'Arena', definition: 'Grupo responsável por operar o robô e executar a estratégia durante uma partida, conforme funções permitidas pela competição.', example: 'Drivers e coach precisam comunicar ciclos, defesa e mudanças de plano em poucos segundos.' },
  { term: 'CAD', category: 'Hardware', definition: 'Computer-Aided Design: modelagem digital usada para projetar peças, mecanismos e montagens antes da fabricação.', example: 'A equipe testa interferências e dimensões do mecanismo no CAD antes de cortar material.' },
  { term: 'Vision Processing', category: 'Software', definition: 'Uso de câmeras e algoritmos para detectar alvos, marcadores ou objetos e estimar informações úteis ao robô.', example: 'O software calcula o ângulo necessário para alinhar automaticamente com um objetivo.' },
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Que tipo de construção mais combina com você?',
    options: [
      { label: 'LEGO, experimentação rápida e criatividade', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'Metal, peças fabricadas e robô compacto', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Máquinas grandes, fabricação avançada e alta potência', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
  {
    question: 'O que você mais quer aprender?',
    options: [
      { label: 'Lógica, pesquisa e fundamentos de programação', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'CAD, Java, eletrônica e fabricação', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Integração de sistemas, estratégia e engenharia em grande escala', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
  {
    question: 'Qual ambiente de competição te atrai mais?',
    options: [
      { label: 'Desafios em mesa e apresentação de projeto', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'Arena 2v2 com robôs ágeis e engenharia compacta', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Arena grande, torcida, alianças 3v3 e ritmo esportivo', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
  {
    question: 'Como você prefere trabalhar?',
    options: [
      { label: 'Equipe pequena, várias funções e aprendizado guiado', points: { fll: 3, ftc: 1, frc: 0 } },
      { label: 'Equipe multidisciplinar com espaço para especialização', points: { fll: 0, ftc: 3, frc: 1 } },
      { label: 'Organização maior, com áreas técnicas, estratégia e gestão', points: { fll: 0, ftc: 1, frc: 3 } },
    ],
  },
];
