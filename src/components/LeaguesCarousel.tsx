import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Box, Cpu, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LEAGUES_DATA } from '../data/firstData';

const LEAGUE_KEYS = ['fll', 'ftc', 'frc'] as const;
type LeagueKey = (typeof LEAGUE_KEYS)[number];

const LEAGUES_CONFIG = [
  {
    key: 'fll' as LeagueKey,
    indexStr: '01 / 03',
    shortName: 'FLL',
    name: 'FIRST LEGO League',
    subtitle: '9 A 16 ANOS • INICIAÇÃO CIENTÍFICA',
    headlinePrefix: 'ONDE TUDO',
    headlineHighlight: 'COMEÇA.',
    accentColor: '#FF5F00',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-900',
    activeTabClass: 'text-amber-600 border-amber-500 bg-amber-50/70',
    specs: [
      { label: 'Robô', value: '~1,5 kg (LEGO)' },
      { label: 'Controle', value: '100% Autônomo' },
      { label: 'Software', value: 'Scratch & Python' },
      { label: 'Duração', value: '2m30s na Mesa' },
    ],
    modules: [
      {
        title: 'Robô LEGO & Missões',
        desc: 'Navegação autônoma pelo tapete com giroscópios e sensores de cor em 2min30s.',
      },
      {
        title: 'Projeto de Inovação',
        desc: 'Identificação de um problema social ou comunitário e criação de uma solução inédita.',
      },
      {
        title: 'Design do Robô',
        desc: 'Apresentação técnica sobre modularidade mecânica, engrenagens e algoritmos.',
      },
      {
        title: 'Core Values',
        desc: 'Demonstração contínua de trabalho em equipe, respeito mútuo e inclusão.',
      },
    ],
    photoCaption: 'KITS OFICIAIS LEGO® EDUCATION SPIKE PRIME',
    layout: 'text-left' as const,
  },
  {
    key: 'ftc' as LeagueKey,
    indexStr: '02 / 03',
    shortName: 'FTC',
    name: 'FIRST Tech Challenge',
    subtitle: '12 A 18 ANOS • ENGENHARIA APLICADA',
    headlinePrefix: 'QUANDO A',
    headlineHighlight: 'ENGENHARIA EVOLUI.',
    accentColor: '#0066B3',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-900',
    activeTabClass: 'text-[#0066B3] border-[#0066B3] bg-blue-50/70',
    specs: [
      { label: 'Robô', value: 'Até 19 kg (Caixa 18")' },
      { label: 'Controle', value: '2 Gamepads + 30s Aut.' },
      { label: 'Software', value: 'Java / OnBot Java' },
      { label: 'Arena', value: 'Alianças 2v2 (3,6m)' },
    ],
    modules: [
      {
        title: 'Visão Computacional',
        desc: 'Detecção de marcadores AprilTags via câmeras USB para localização autônoma de alta precisão.',
      },
      {
        title: 'Portfólio de Engenharia',
        desc: 'Documento técnico detalhando iterações de CAD, física dos atuadores e cálculos de redução.',
      },
      {
        title: 'REV Control Hub',
        desc: 'Computador de bordo integrado baseado em Android com interfaces para 4 motores e 6 servos.',
      },
      {
        title: 'Prêmio Inspire',
        desc: 'Reconhecimento máximo para o time que combina excelência mecânica e impacto social.',
      },
    ],
    photoCaption: 'CHASSIS METÁLICOS • MOTORES 12V • JAVA NATIVO',
    layout: 'image-left' as const,
  },
  {
    key: 'frc' as LeagueKey,
    indexStr: '03 / 03',
    shortName: 'FRC',
    name: 'FIRST Robotics Competition',
    subtitle: '14 A 18 ANOS • ESCALA INDUSTRIAL DE ARENA',
    headlinePrefix: 'ROBÓTICA EM',
    headlineHighlight: 'ESCALA DE ARENA.',
    accentColor: '#ED1C24',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-900',
    activeTabClass: 'text-[#ED1C24] border-[#ED1C24] bg-red-50/70',
    specs: [
      { label: 'Peso Máximo', value: '56,7 kg (125 lbs)' },
      { label: 'Potência', value: '+3.000W Brushless' },
      { label: 'Software', value: 'WPILib / Java / C++' },
      { label: 'Arena', value: '16,5m × 8,2m (Quadra)' },
    ],
    modules: [
      {
        title: 'roboRIO 2.0 & WPILib',
        desc: 'Computador de bordo militar/industrial da National Instruments rodando Linux Real-Time.',
      },
      {
        title: 'Swerve Drive 360°',
        desc: '4 módulos de tração independente onde cada roda gira e traciona em qualquer vetor cartesiano.',
      },
      {
        title: 'Motores Brushless 400W',
        desc: 'Motores industriais de altíssimo torque (Kraken X60, Falcon 500) operados por barramentos CAN.',
      },
      {
        title: 'FIRST Impact Award',
        desc: 'O prêmio de maior prestígio de toda a FIRST, honrando a equipe com maior legado cultural.',
      },
    ],
    photoCaption: 'ESPORTE SUPREMO DA MENTE • MÁQUINAS INDUSTRIAIS',
    layout: 'cinematic' as const,
  },
];

// Editorial slide motion variants with cubic-bezier(0.16, 1, 0.3, 1)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const LeaguesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const activeConfig = LEAGUES_CONFIG[currentIndex];
  const activeData = LEAGUES_DATA[activeConfig.key];

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? LEAGUES_CONFIG.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === LEAGUES_CONFIG.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only react if the carousel or section is in view or focused
      const el = document.getElementById('ligas');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch Swipe Handlers (Instagram mobile swipe feel)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 45;

    if (isSwipe) {
      if (distance > 0) {
        // Swiped left -> Next slide
        nextSlide();
      } else {
        // Swiped right -> Previous slide
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="ligas"
      className="scroll-mt-24 lg:scroll-mt-28 py-20 lg:py-28 bg-[#FBFBFB] relative border-b border-gray-200 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Unified Introduction */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
            <span>03 / ECOSSISTEMA FIRST • CARROSSEL EDITORIAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
            TRÊS LIGAS. <br />
            <span className="text-[#0066B3]">UMA MESMA JORNADA.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl">
            Navegue pelos três capítulos da evolução tecnológica FIRST: da iniciação lúdica com LEGO 
            à engenharia em escala de arena de alta potência.
          </p>
        </div>

        {/* Carousel Top Navigation Bar: Direct League Tabs + Progress Track */}
        <div className="mb-8 border-b border-gray-200/80 pb-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Direct League Switcher Tabs (FLL / FTC / FRC) */}
          <div className="flex items-center gap-2 sm:gap-3" role="tablist" aria-label="Ligas FIRST">
            {LEAGUES_CONFIG.map((league, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={league.key}
                  role="tab"
                  id={`tab-league-${league.key}`}
                  aria-selected={isActive}
                  aria-controls={`slide-league-${league.key}`}
                  onClick={() => goToSlide(idx)}
                  className={`btn-hover px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? `${league.activeTabClass} shadow-2xs font-black`
                      : 'text-gray-500 hover:text-gray-900 bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ backgroundColor: isActive ? league.accentColor : '#D1D5DB' }}
                  />
                  <span>{league.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Counter & Navigation Arrow Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
              {activeConfig.indexStr}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                id="carousel-arrow-prev"
                aria-label="Ver liga anterior"
                className="btn-hover p-2 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                id="carousel-arrow-next"
                aria-label="Ver próxima liga"
                className="btn-hover p-2 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CAROUSEL SLIDE CONTAINER (Swipeable, Animated, Stable Height) */}
        {/* ========================================================================= */}
        <div
          ref={carouselContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[640px] sm:min-h-[580px] lg:min-h-[520px] transition-all"
          id={`slide-league-${activeConfig.key}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={`Slide ${activeConfig.indexStr}: ${activeConfig.name}`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeConfig.key}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              
              {/* ================================================================= */}
              {/* SLIDE TYPE A: FLL (Text Left, Photo Right) */}
              {/* ================================================================= */}
              {activeConfig.key === 'fll' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 ${activeConfig.badgeBg} ${activeConfig.badgeText} text-[11px] font-mono font-bold uppercase rounded-full tracking-wider`}>
                        {activeConfig.indexStr} • {activeConfig.name}
                      </span>
                      <span className="text-xs font-mono text-gray-500 uppercase">
                        {activeConfig.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 uppercase tracking-tight leading-tight">
                      {activeConfig.headlinePrefix} <br />
                      <span style={{ color: activeConfig.accentColor }}>{activeConfig.headlineHighlight}</span>
                    </h3>

                    <p className="text-base text-gray-700 leading-relaxed font-normal">
                      {activeData.description}
                    </p>

                    {/* Integrated Specs Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3.5 border-y border-gray-200 text-xs font-mono">
                      {activeConfig.specs.map((s, idx) => (
                        <div key={idx}>
                          <div className="text-gray-400 text-[10px] uppercase">{s.label}</div>
                          <div className="font-bold text-gray-900 mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* 4 Pillars Modules */}
                    <div className="space-y-2.5 pt-1">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-gray-500">
                        ESTRUTURA DE AVALIAÇÃO OFICIAL (4 PILARES DE PESOS IGUAIS — 25% CADA)
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {activeConfig.modules.map((m, idx) => (
                          <div key={idx} className="p-3.5 bg-white border border-gray-200/80 rounded-xl space-y-1 shadow-2xs">
                            <div className="font-bold uppercase text-gray-900 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeConfig.accentColor }} />
                              {m.title}
                            </div>
                            <p className="text-gray-600 text-[11px] leading-relaxed">
                              {m.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Photo */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-950 group">
                      <motion.img
                        src={activeData.imageUrl}
                        alt={activeData.name}
                        initial={{ scale: 1.02, opacity: 0.95 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-[360px] sm:h-[420px] object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-amber-500/90 text-black text-[10px] font-mono font-bold uppercase rounded-full backdrop-blur-md">
                          FLL CHALLENGE
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-white space-y-1">
                        <p className="text-xs italic text-gray-200 leading-snug">
                          "{activeData.quote}"
                        </p>
                        <div className="text-[10px] font-mono text-amber-400">
                          {activeConfig.photoCaption}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ================================================================= */}
              {/* SLIDE TYPE B: FTC (Photo Left, Text Right) */}
              {/* ================================================================= */}
              {activeConfig.key === 'ftc' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Photo (Inverted on Desktop for Rhythm) */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-950 group">
                      <motion.img
                        src={activeData.imageUrl}
                        alt={activeData.name}
                        initial={{ scale: 1.02, opacity: 0.95 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-[360px] sm:h-[420px] object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#0066B3] text-white text-[10px] font-mono font-bold uppercase rounded-full backdrop-blur-md">
                          FTC CHALLENGE
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-white space-y-1">
                        <p className="text-xs italic text-gray-200 leading-snug">
                          "{activeData.quote}"
                        </p>
                        <div className="text-[10px] font-mono text-blue-400">
                          {activeConfig.photoCaption}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Narrative */}
                  <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                    
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 ${activeConfig.badgeBg} ${activeConfig.badgeText} text-[11px] font-mono font-bold uppercase rounded-full tracking-wider`}>
                        {activeConfig.indexStr} • {activeConfig.name}
                      </span>
                      <span className="text-xs font-mono text-gray-500 uppercase">
                        {activeConfig.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 uppercase tracking-tight leading-tight">
                      {activeConfig.headlinePrefix} <br />
                      <span style={{ color: activeConfig.accentColor }}>{activeConfig.headlineHighlight}</span>
                    </h3>

                    <p className="text-base text-gray-700 leading-relaxed font-normal">
                      {activeData.description}
                    </p>

                    {/* Integrated Specs Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3.5 border-y border-gray-200 text-xs font-mono">
                      {activeConfig.specs.map((s, idx) => (
                        <div key={idx}>
                          <div className="text-gray-400 text-[10px] uppercase">{s.label}</div>
                          <div className="font-bold text-gray-900 mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* 4 Pillars / Technologies */}
                    <div className="space-y-2.5 pt-1">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-gray-500">
                        TECNOLOGIAS & ENTREGAS DE ENGENHARIA FTC
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {activeConfig.modules.map((m, idx) => (
                          <div key={idx} className="p-3.5 bg-white border border-gray-200/80 rounded-xl space-y-1 shadow-2xs">
                            <div className="font-bold uppercase text-gray-900 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeConfig.accentColor }} />
                              {m.title}
                            </div>
                            <p className="text-gray-600 text-[11px] leading-relaxed">
                              {m.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* ================================================================= */}
              {/* SLIDE TYPE C: FRC (Arena Scale, High Impact Cinematic Frame) */}
              {/* ================================================================= */}
              {activeConfig.key === 'frc' && (
                <div className="space-y-8">
                  
                  {/* Top Text & Narrative */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 ${activeConfig.badgeBg} ${activeConfig.badgeText} text-[11px] font-mono font-bold uppercase rounded-full tracking-wider`}>
                          {activeConfig.indexStr} • {activeConfig.name}
                        </span>
                        <span className="text-xs font-mono text-gray-500 uppercase">
                          {activeConfig.subtitle}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 uppercase tracking-tight leading-tight">
                        {activeConfig.headlinePrefix} <br />
                        <span style={{ color: activeConfig.accentColor }}>{activeConfig.headlineHighlight}</span>
                      </h3>

                      <p className="text-base text-gray-700 leading-relaxed font-normal max-w-3xl">
                        {activeData.description}
                      </p>
                    </div>

                    {/* Integrated Quick Specs Box */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 p-4 bg-white border border-gray-200/90 rounded-xl font-mono text-xs shadow-2xs">
                      {activeConfig.specs.map((s, idx) => (
                        <div key={idx} className="p-2 bg-gray-50 rounded-lg">
                          <div className="text-gray-400 text-[9px] uppercase">{s.label}</div>
                          <div className="font-bold text-gray-900 text-xs mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Large Cinematic Frame */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950 group">
                    <motion.img
                      src={activeData.imageUrl}
                      alt={activeData.name}
                      initial={{ scale: 1.02, opacity: 0.95 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                    {/* Top Telemetry */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-ping" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">FRC ARENA OFICIAL • ALIANÇAS 3V3</span>
                      </div>
                      <div className="hidden sm:block px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/20 text-[10px] uppercase">
                        CONTROLE: WPILIB + JAVA / C++
                      </div>
                    </div>

                    {/* Bottom Quote & Philosophy */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 bg-black/75 backdrop-blur-md rounded-xl border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-[#ED1C24] font-bold uppercase tracking-widest">
                          {activeConfig.photoCaption}
                        </div>
                        <p className="text-xs sm:text-sm italic text-gray-100 leading-snug">
                          "{activeData.quote}"
                        </p>
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 whitespace-nowrap">
                        56,7 KG • SWERVE DRIVE • LINUX RT
                      </div>
                    </div>
                  </div>

                  {/* 4 FRC Modules */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {activeConfig.modules.map((m, idx) => (
                      <div key={idx} className="p-4 bg-white border border-gray-200/80 rounded-xl space-y-1.5 shadow-2xs">
                        <div className="font-bold uppercase text-gray-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                          <span>{m.title}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-[11px]">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* CAROUSEL BOTTOM FOOTER: Instagram-style Dots + Nav Hints */}
        {/* ========================================================================= */}
        <div className="mt-10 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Navigation Arrows + Dots */}
          <div className="flex items-center gap-4">
            
            <button
              onClick={prevSlide}
              id="carousel-bottom-prev-btn"
              aria-label="Ver liga anterior"
              className="btn-hover p-2 text-gray-500 hover:text-gray-950 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Instagram Style Clickable Indicator Dots (● ○ ○) */}
            <div className="flex items-center gap-2" role="group" aria-label="Indicadores de slide do carrossel">
              {LEAGUES_CONFIG.map((league, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={league.key}
                    onClick={() => goToSlide(idx)}
                    id={`carousel-dot-${league.key}`}
                    aria-label={`Ver ${league.shortName}`}
                    className={`btn-hover transition-all rounded-full cursor-pointer ${
                      isActive
                        ? 'w-6 h-2 rounded-full'
                        : 'w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={{
                      backgroundColor: isActive ? league.accentColor : undefined,
                    }}
                  />
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              id="carousel-bottom-next-btn"
              aria-label="Ver próxima liga"
              className="btn-hover p-2 text-gray-500 hover:text-gray-950 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Swipe / Keyboard Guidance Hint */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
            <span className="hidden sm:inline">Navegue com setas do teclado (← →) ou clique nos tópicos</span>
            <span className="sm:hidden">Deslize para o lado para trocar de liga</span>
          </div>

        </div>

      </div>
    </section>
  );
};
