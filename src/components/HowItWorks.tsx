import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  FileText,
  Sliders,
  Wrench,
  Code2,
  PlaySquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const steps = [
    {
      id: 'equipe',
      number: '01',
      title: 'Formação da Equipe & Papéis',
      category: 'Organização',
      icon: <Users className="w-5 h-5" />,
      shortDesc: 'Estudantes se organizam em departamentos como uma verdadeira startup de tecnologia.',
      details: 'Uma equipe FIRST não é formada apenas por quem monta o robô. Ela se divide em subtimes especializados: Mecânica (estruturas e atuadores), Elétrica (chicotes, baterias e sensores), Software (código autônomo e controle), Mídia/Design (identidade visual e documentação) e Negócios (captação de patrocínios e orçamento).',
      deliverable: 'Organograma executivo, manual de conduta ética e cronograma de metas.',
      tag: 'FASE INICIAL',
      tags: ['MECÂNICA', 'ELÉTRICA', 'SOFTWARE', 'MÍDIA/DESIGN', 'NEGÓCIOS'],
      percent: 17
    },
    {
      id: 'desafio',
      number: '02',
      title: 'Análise do Desafio & Estratégia',
      category: 'Estratégia',
      icon: <FileText className="w-5 h-5" />,
      shortDesc: 'O manual de regras oficial é revelado globalmente no Kickoff.',
      details: 'A cada ano, um jogo completamente novo é revelado simultaneamente no mundo inteiro. As equipes debruçam-se sobre o manual de regras com mais de 100 páginas, analisando a matriz de pontuação (scoring matrix) e definindo quais tarefas prioritárias o robô deverá executar na arena.',
      deliverable: 'Matriz de decisão estratégica e lista de requisitos funcionais.',
      tag: 'KICKOFF',
      tags: ['REGRAS', 'PONTUAÇÃO', 'ESTRATÉGIA', 'ANÁLISE DE RISCO'],
      percent: 33
    },
    {
      id: 'projeto',
      number: '03',
      title: 'Projeto Digital & CAD',
      category: 'Engenharia',
      icon: <Sliders className="w-5 h-5" />,
      shortDesc: 'Modelagem 3D milimétrica antes de cortar uma única peça de metal.',
      details: 'Utilizando softwares industriais de CAD (como Onshape, SolidWorks ou Autodesk Inventor), os estudantes projetam cada parafuso, engrenagem, chassi e subsistema. Isso permite simular centro de gravidade, folgas, interferências e peso total antes da fabricação.',
      deliverable: 'Modelo 3D completo do robô pronto para corte em CNC e impressão 3D.',
      tag: 'ENGENHARIA',
      tags: ['CAD 3D', 'SIMULAÇÃO', 'CENTRO DE MASSA', 'TOLERÂNCIAS'],
      percent: 50
    },
    {
      id: 'construcao',
      number: '04',
      title: 'Construção, Fabricação & Elétrica',
      category: 'Mão na Massa',
      icon: <Wrench className="w-5 h-5" />,
      shortDesc: 'Transformação do modelo virtual em uma máquina robusta e veloz.',
      details: 'As peças são usinadas em routers CNC, impressas em 3D ou montadas com ferramentas de bancada. O time de elétrica monta o painel de distribuição, crimpa conectores industriais, instala motores brushless e organiza toda a fiação seguindo normas rígidas de segurança.',
      deliverable: 'Robô mecânica e eletricamente funcional com baterias testadas.',
      tag: 'FABRICAÇÃO',
      tags: ['USINAGEM CNC', 'MONTAGEM', 'PAINEL ELÉTRICO', 'SEGURANÇA'],
      percent: 67
    },
    {
      id: 'programacao',
      number: '05',
      title: 'Programação, Autônomo & Visão',
      category: 'Software',
      icon: <Code2 className="w-5 h-5" />,
      shortDesc: 'Controle de sensores, trajetórias inteligentes e malhas PID.',
      details: 'Programadores desenvolvem em Java, C++ ou Python as rotinas do período autônomo (usando visão computacional com AprilTags e odometria) e configuram as curvas de aceleração e mapeamento ergonômico dos joysticks para o período teleoperado.',
      deliverable: 'Código versionado no GitHub com rotinas autônomas consistentes.',
      tag: 'SOFTWARE',
      tags: ['JAVA / PYTHON', 'APRILTAGS', 'MALHAS PID', 'GITHUB'],
      percent: 83
    },
    {
      id: 'competicao',
      number: '06',
      title: 'Competição em Arena & Alianças',
      category: 'Arena',
      icon: <PlaySquare className="w-5 h-5" />,
      shortDesc: 'Disputas esportivas de alta intensidade com cooperação entre equipes.',
      details: 'Nos torneios oficiais, equipes jogam partidas em alianças sorteadas. Além do desempenho na quadra, os times apresentam seus projetos e cadernos técnicos para bancas de jurados engenheiros e praticam cooperação aberta nos pits.',
      deliverable: 'Partidas oficiais, entrevistas com juízes e celebração dos valores.',
      tag: 'TORNEIO',
      tags: ['ALIANÇAS', 'JURADOS', 'PITS', 'GRACIOUS PROF.'],
      percent: 100
    }
  ];

  const totalSteps = steps.length;

  const goToNext = () => {
    setDirection(1);
    setActiveStep(prev => (prev + 1) % totalSteps);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveStep(prev => (prev - 1 + totalSteps) % totalSteps);
  };

  const goToStep = (index: number) => {
    setDirection(index > activeStep ? 1 : -1);
    setActiveStep(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      const el = document.getElementById('como-funciona');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStep]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  const currentStepData = steps[activeStep];
  const progressPercentage = currentStepData.percent;

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#FAFAFA] border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
            <span>02 / O CICLO DE ENGENHARIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
            COMO A FIRST FUNCIONA <br />
            <span className="text-[#0066B3]">NA PRÁTICA?</span>
          </h2>

          <p className="text-base text-gray-600 font-normal leading-relaxed">
            Do primeiro dia de planejamento à adrenalina da arena, as equipes seguem o fluxo 
            real da indústria: projetar, prototipar, programar, testar e cooperar.
          </p>
        </div>

        {/* 19 — ETAPAS DO CICLO: [ 01 ] → [ 02 ] → [ 03 ] → [ 04 ] → [ 05 ] → [ 06 ] */}
        <div className="mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => goToStep(idx)}
                  id={`how-step-node-${idx}`}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between group ${
                    isActive
                      ? 'bg-white border-[#0066B3] shadow-xs'
                      : 'bg-white/70 hover:bg-white border-gray-200/80 hover:border-gray-300 text-gray-700'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-center justify-between pb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive ? 'bg-[#0066B3] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {s.number}
                    </span>
                    <div className={isActive ? 'text-[#0066B3]' : 'text-gray-400 group-hover:text-gray-600'}>
                      {s.icon}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      {s.category}
                    </span>
                    <h4
                      className={`text-xs font-bold uppercase tracking-tight leading-snug line-clamp-1 ${
                        isActive ? 'text-gray-950 font-black' : 'text-gray-700'
                      }`}
                    >
                      {s.title.split('&')[0].trim()}
                    </h4>
                  </div>

                  {/* Active Sliding Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="howItWorksActiveIndicator"
                      className="absolute -bottom-px left-3 right-3 h-[2px] bg-[#0066B3] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 22 — Animated Progress Line (17% -> 33% -> 50% -> 67% -> 83% -> 100%) */}
        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-[#0066B3] rounded-full"
            initial={false}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* 23 — PAINEL INFERIOR DETALHADO (Clean Editorial Composition) */}
        <div
          className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStep}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 24 : -24,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -24 : 24,
                transition: {
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              
              {/* ESQUERDA (6 Cols): Etapa, Título, Descrição, Tags */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-50 text-[#0066B3] border border-blue-200/80 rounded-md uppercase">
                      ETAPA {currentStepData.number} DE 06
                    </span>
                    <span className="text-xs font-mono text-gray-500 uppercase">
                      {currentStepData.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
                    {currentStepData.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                  {currentStepData.shortDesc}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {currentStepData.details}
                </p>

                {/* Subteam Tags */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                    ÁREAS DE ATUAÇÃO NESTA ETAPA:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStepData.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-mono font-medium rounded-md uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTRO (3 Cols): Fluxo do Processo & Barra de Conclusão */}
              <div className="lg:col-span-3 p-5 sm:p-6 bg-[#FBFBFB] border border-gray-200/90 rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                    FLUXO DO PROCESSO
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0066B3]">
                    {progressPercentage}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0066B3] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    ENTREGA ESPERADA:
                  </div>
                  <div className="flex items-start gap-2 text-xs font-medium text-gray-800 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{currentStepData.deliverable}</span>
                  </div>
                </div>
              </div>

              {/* DIREITA (3 Cols): Controles Anterir / Próxima */}
              <div className="lg:col-span-3 flex flex-col justify-center space-y-3 sm:space-y-3 pt-2 lg:pt-0">
                <button
                  onClick={goToNext}
                  id="how-next-step-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#0066B3] hover:bg-[#005291] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs hover:translate-y-[-1px] active:translate-y-0"
                >
                  <span>Próxima Etapa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={goToPrev}
                  id="how-prev-step-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-gray-700 hover:text-black text-xs font-bold uppercase tracking-wider rounded-xl border border-gray-200 hover:border-gray-300 transition-all active:scale-98"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Etapa Anterior</span>
                </button>

                <div className="text-center pt-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Navegação por setas do teclado ← →
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
