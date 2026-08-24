import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Layers3, Trophy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LEAGUES_DATA } from '../data/firstData';

const LEAGUE_KEYS = ['fll', 'ftc', 'frc'] as const;
type LeagueKey = (typeof LEAGUE_KEYS)[number];

const LEAGUES_CONFIG = [
  {
    key: 'fll' as LeagueKey,
    indexStr: '01 / 03',
    shortName: 'FLL',
    name: 'FIRST LEGO League',
    eyebrow: '9 A 16 ANOS • PRIMEIRO CONTATO',
    headlinePrefix: 'DA IDEIA AO',
    headlineHighlight: 'PRIMEIRO ROBÔ.',
    intro: 'LEGO, criatividade e método científico em uma porta de entrada acessível para o universo da engenharia.',
    detail: 'Na divisão Challenge, equipes programam um robô LEGO® Education SPIKE™ Prime para cumprir missões autônomas em partidas de 2 minutos e 30 segundos, além de desenvolver um Projeto de Inovação.',
    accentColor: '#FF5F00',
    accentSoft: '#FFF3E8',
    accentText: '#9A3A00',
    progression: 'LEGO',
    icon: Layers3,
    specs: [
      { label: 'Equipe', value: '2–10 jovens' },
      { label: 'Controle', value: 'Autônomo' },
      { label: 'Plataforma', value: 'SPIKE Prime' },
      { label: 'Round', value: '2m30s' },
    ],
    focus: [
      'Missões com robô LEGO',
      'Projeto de inovação',
      'Design e estratégia',
    ],
    photoCaption: 'LEGO® EDUCATION • AUTONOMIA • DESCOBERTA',
  },
  {
    key: 'ftc' as LeagueKey,
    indexStr: '02 / 03',
    shortName: 'FTC',
    name: 'FIRST Tech Challenge',
    eyebrow: '12 A 18 ANOS • ENGENHARIA APLICADA',
    headlinePrefix: 'QUANDO O PROJETO',
    headlineHighlight: 'VIRA MÁQUINA.',
    intro: 'Metal, eletrônica e software entram em cena para transformar conceitos de engenharia em desempenho real de arena.',
    detail: 'Robôs começam contidos em um cubo de 18 pol. (45,7 cm) e competem em alianças 2 contra 2. No manual 2025–2026, não existe limite oficial de peso para o robô.',
    accentColor: '#0066B3',
    accentSoft: '#EAF5FF',
    accentText: '#004D87',
    progression: 'METAL',
    icon: Cpu,
    specs: [
      { label: 'Peso', value: 'Sem limite oficial' },
      { label: 'Início', value: 'Cubo 45,7 cm' },
      { label: 'Código', value: 'Java / Blocks' },
      { label: 'Arena', value: '2 × 2' },
    ],
    focus: [
      'Visão computacional',
      'Portfólio de engenharia',
      'Sistemas mecânicos reais',
    ],
    photoCaption: 'ALUMÍNIO • MOTORES 12V • JAVA • ESTRATÉGIA',
  },
  {
    key: 'frc' as LeagueKey,
    indexStr: '03 / 03',
    shortName: 'FRC',
    name: 'FIRST Robotics Competition',
    eyebrow: '14 A 18 ANOS • ESCALA INDUSTRIAL',
    headlinePrefix: 'ENGENHARIA EM',
    headlineHighlight: 'ESCALA DE ARENA.',
    intro: 'Robôs industriais, alianças 3 contra 3 e uma atmosfera que aproxima engenharia, estratégia e esporte.',
    detail: 'Pelas regras oficiais de 2026, o robô pode pesar até 115 lb (52,16 kg), sem contar bumpers e bateria, e inicia com perímetro máximo de 110 pol. e até 30 pol. de altura.',
    accentColor: '#ED1C24',
    accentSoft: '#FFF0F1',
    accentText: '#A20F15',
    progression: 'ARENA',
    icon: Trophy,
    specs: [
      { label: 'Peso', value: 'Até 52,16 kg' },
      { label: 'Aliança', value: '3 × 3' },
      { label: 'Código', value: 'WPILib' },
      { label: 'Escala', value: 'Industrial' },
    ],
    focus: [
      'Swerve Drive 360°',
      'Controle industrial',
      'Impacto e alta velocidade',
    ],
    photoCaption: 'SWERVE • WPILIB • ALIANÇAS 3V3 • ALTA POTÊNCIA',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const LeaguesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeConfig = LEAGUES_CONFIG[currentIndex];
  const activeData = LEAGUES_DATA[activeConfig.key];
  const ActiveIcon = activeConfig.icon;

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? LEAGUES_CONFIG.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === LEAGUES_CONFIG.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const section = document.getElementById('ligas');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (event.key === 'ArrowLeft') prevSlide();
      if (event.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 45) {
      distance > 0 ? nextSlide() : prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="ligas"
      className="scroll-mt-24 lg:scroll-mt-28 bg-[#F7F7F5] relative border-b border-gray-200 overflow-hidden select-none"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(circle_at_85%_10%,rgba(0,102,179,0.08),transparent_28%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#0066B3] mb-4">
              <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
              03 / ECOSSISTEMA FIRST
            </div>

            <h2 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-[-0.04em] uppercase leading-[0.94] max-w-4xl">
              UMA JORNADA.
              <span className="block text-[#0066B3]">TRÊS ESCALAS DE ENGENHARIA.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md lg:ml-auto">
              Do primeiro protótipo em LEGO a máquinas de escala industrial: a complexidade cresce, mas a lógica permanece a mesma — imaginar, construir, testar e competir.
            </p>
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-3 border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm" role="tablist" aria-label="Ligas FIRST">
            {LEAGUES_CONFIG.map((league, index) => {
              const isActive = index === currentIndex;
              const Icon = league.icon;

              return (
                <button
                  key={league.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`slide-league-${league.key}`}
                  onClick={() => goToSlide(index)}
                  className={`relative px-3 sm:px-5 py-4 sm:py-5 text-left transition-all border-r last:border-r-0 border-gray-200 ${
                    isActive ? 'bg-gray-950 text-white' : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-950'
                  }`}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity"
                    style={{ backgroundColor: league.accentColor, opacity: isActive ? 1 : 0 }}
                  />

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isActive ? `${league.accentColor}22` : league.accentSoft,
                        color: league.accentColor,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider opacity-60">{league.indexStr}</div>
                      <div className="text-sm sm:text-base font-black uppercase tracking-tight">{league.shortName}</div>
                      <div className="hidden md:block text-[10px] font-mono uppercase tracking-wide opacity-60 mt-0.5">
                        {league.progression}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          id={`slide-league-${activeConfig.key}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${activeConfig.name} — ${activeConfig.indexStr}`}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeConfig.key}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-gray-200 rounded-[1.75rem] overflow-hidden shadow-[0_22px_70px_rgba(17,24,39,0.10)]"
            >
              <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] lg:min-h-[620px] bg-gray-950 overflow-hidden">
                <motion.img
                  src={activeData.imageUrl}
                  alt={activeData.name}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 sm:top-7 sm:left-7 flex items-center gap-2">
                  <div
                    className="px-3 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-[0.15em] text-white backdrop-blur-md border border-white/15"
                    style={{ backgroundColor: `${activeConfig.accentColor}DD` }}
                  >
                    {activeConfig.shortName}
                  </div>
                  <div className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-white/85 bg-black/45 backdrop-blur-md border border-white/10">
                    {activeConfig.progression}
                  </div>
                </div>

                <div className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7 text-white">
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] mb-3" style={{ color: activeConfig.accentColor }}>
                    {activeConfig.photoCaption}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 max-w-2xl">
                    “{activeData.quote}”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.14em]" style={{ color: activeConfig.accentText }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeConfig.accentColor }} />
                      {activeConfig.eyebrow}
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">{activeConfig.indexStr}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl xl:text-[3.25rem] font-black uppercase tracking-[-0.04em] leading-[0.96] text-gray-950 mb-5">
                    {activeConfig.headlinePrefix}
                    <span className="block" style={{ color: activeConfig.accentColor }}>
                      {activeConfig.headlineHighlight}
                    </span>
                  </h3>

                  <p className="text-base text-gray-800 leading-relaxed font-medium mb-3">{activeConfig.intro}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{activeConfig.detail}</p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden mb-6">
                    {activeConfig.specs.map((spec) => (
                      <div key={spec.label} className="bg-gray-50 px-4 py-4">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-gray-400 mb-1">{spec.label}</div>
                        <div className="text-sm font-black text-gray-950">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-7">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-gray-400 mb-3">O QUE MUDA NESTA ETAPA</div>
                    <div className="flex flex-wrap gap-2">
                      {activeConfig.focus.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-2 rounded-full text-[11px] font-bold border"
                          style={{
                            backgroundColor: activeConfig.accentSoft,
                            borderColor: `${activeConfig.accentColor}2A`,
                            color: activeConfig.accentText,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-950 hover:gap-3 transition-all"
                  >
                    {currentIndex === LEAGUES_CONFIG.length - 1 ? 'Voltar ao início' : 'Próxima escala'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {LEAGUES_CONFIG.map((league, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={league.key}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Ver ${league.name}`}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: isActive ? 34 : 10,
                    backgroundColor: isActive ? league.accentColor : '#D1D5DB',
                  }}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-gray-400 mr-1">Use ← → para navegar</span>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Liga anterior"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-gray-950 hover:border-gray-300 transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próxima liga"
              className="w-10 h-10 rounded-full border border-gray-200 bg-gray-950 text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};