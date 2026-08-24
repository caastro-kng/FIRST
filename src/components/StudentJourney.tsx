import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDENT_JOURNEY_STAGES } from '../data/firstData';
import { ChevronLeft, ChevronRight, TrendingUp, Sparkles, GraduationCap, Check } from 'lucide-react';

const JOURNEY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    caption: 'Iniciação STEAM: montagem de robôs modulares e lógica de blocos com LEGO SPIKE Prime.',
    alt: 'Crianças programando e montando robôs com peças modulares em ambiente de sala de aula'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    caption: 'Transição mecânica: estruturas de alumínio, eletrônica 12V e código Java no Android Studio.',
    alt: 'Estudantes do ensino médio desenvolvendo robô metálico com ferramentas manuais e notebook'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    caption: 'Escala industrial: robôs de 56 kg, usinagem CNC, Swerve Drive e gestão multidisciplinar.',
    alt: 'Robô industrial de alta velocidade em arena oficial de competição FIRST Robotics'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Legado sustentável: ex-competidores liderando projetos de ponta e mentoreando novos talentos.',
    alt: 'Alumni universitários e mentores industriais colaborando com estudantes de robótica'
  }
];

export const StudentJourney: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const totalStages = STUDENT_JOURNEY_STAGES.length;

  const goToNext = () => {
    setDirection(1);
    setCurrentStage((prev) => (prev + 1) % totalStages);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentStage((prev) => (prev - 1 + totalStages) % totalStages);
  };

  const goToStage = (index: number) => {
    setDirection(index > currentStage ? 1 : -1);
    setCurrentStage(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only react if target is not an input
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      
      const journeyEl = document.getElementById('jornada');
      if (!journeyEl) return;
      
      const rect = journeyEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (inView) {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  const stage = STUDENT_JOURNEY_STAGES[currentStage];
  const stageImage = JOURNEY_IMAGES[currentStage];
  const stageNameClean = stage.stage.split('.')[1]?.trim() || stage.stage;

  return (
    <section id="jornada" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Big Editorial Statement (35-40%) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
                <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
                <span>08 / JORNADA DO ESTUDANTE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
                DA PRIMEIRA PEÇA <br className="hidden sm:inline" />
                AO PRIMEIRO <br />
                <span className="text-[#0066B3]">GRANDE ROBÔ.</span>
              </h2>

              <p className="text-base text-gray-600 font-normal leading-relaxed pt-2">
                Como um estudante evolui ao longo dos anos dentro do ecossistema FIRST, desenvolvendo 
                capacidades técnicas de engenharia aplicada e maturidade socioemocional para toda a vida.
              </p>
            </div>

            {/* Stage Quick Progression Selector */}
            <div className="pt-2">
              <div className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-3">
                FASES DE FORMAÇÃO:
              </div>
              
              <div className="space-y-2">
                {STUDENT_JOURNEY_STAGES.map((s, idx) => {
                  const isActive = currentStage === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => goToStage(idx)}
                      id={`journey-quick-nav-${idx}`}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-white border-[#0066B3] shadow-xs'
                          : 'bg-transparent border-gray-200/80 hover:bg-white/80 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                            isActive
                              ? 'bg-[#0066B3] text-white'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold uppercase tracking-tight ${isActive ? 'text-gray-950' : 'text-gray-700'}`}>
                            {s.stage.split('.')[1]?.trim()}
                          </div>
                          <div className="text-[10px] font-mono text-gray-400 uppercase">
                            {s.ageRange}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs font-mono font-semibold text-gray-400">
                        {s.level}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Carousel Slide Card (60-65%) */}
          <div
            className="lg:col-span-7"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Container with Stable Min-Height */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
              
              {/* Carousel Content AnimatePresence */}
              <div className="relative overflow-hidden flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStage}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 36 : -36,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.48,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -36 : 36,
                      transition: {
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="space-y-6"
                  >
                    
                    {/* Header Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 bg-gray-100 text-gray-800 rounded-md uppercase">
                          ETAPA 0{currentStage + 1} / 04
                        </span>
                        <span className="text-xs font-mono text-[#0066B3] bg-blue-50 px-2.5 py-1 rounded-md uppercase font-semibold">
                          {stage.level}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500 font-medium">
                        {stage.ageRange}
                      </span>
                    </div>

                    {/* Stage Headline & League Badge */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
                        {stageNameClean}
                      </h3>
                      <div className="inline-block text-xs font-mono text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                        {stage.leagueMatch}
                      </div>
                    </div>

                    {/* Curated Authentic Photography */}
                    <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-gray-100 border border-gray-200/80 group">
                      <img
                        src={stageImage.url}
                        alt={stageImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3.5 pt-8">
                        <p className="text-[11px] text-white/90 font-medium leading-snug">
                          {stageImage.caption}
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {stage.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Tech Skills */}
                      <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-2">
                        <div className="text-[11px] font-mono font-bold text-gray-800 uppercase flex items-center gap-1.5 tracking-wider">
                          <TrendingUp className="w-3.5 h-3.5 text-[#0066B3]" />
                          <span>Competências Técnicas</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {stage.technicalSkills.map((tech, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0066B3] shrink-0 mt-1.5" />
                              <span>{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Soft Skills */}
                      <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-2">
                        <div className="text-[11px] font-mono font-bold text-gray-800 uppercase flex items-center gap-1.5 tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-[#ED1C24]" />
                          <span>Liderança & Humano</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {stage.softSkills.map((soft, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-1.5" />
                              <span>{soft}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcome Callout */}
                    <div className="p-3.5 bg-emerald-50/90 border border-emerald-200/80 rounded-xl text-xs text-emerald-950 flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold uppercase text-[10px] text-emerald-800 block mb-0.5">
                          Resultado Formativo:
                        </span>
                        <span className="text-emerald-900 leading-relaxed font-normal">{stage.outcome}</span>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Carousel Controls & Numbered Indicators */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                
                {/* Numbered Indicators (01 02 03 04) with animated indicator */}
                <div className="flex items-center gap-4 sm:gap-6" role="tablist" aria-label="Navegação da Jornada">
                  {STUDENT_JOURNEY_STAGES.map((_, idx) => {
                    const isActive = currentStage === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => goToStage(idx)}
                        id={`journey-dot-indicator-${idx}`}
                        className={`relative py-1 text-xs sm:text-sm font-mono font-bold transition-colors ${
                          isActive ? 'text-[#0066B3]' : 'text-gray-400 hover:text-gray-700'
                        }`}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Ir para etapa 0${idx + 1}`}
                      >
                        <span>0{idx + 1}</span>
                        {isActive && (
                          <motion.div
                            layoutId="journeyActiveIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066B3] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Left/Right Subtle Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrev}
                    id="journey-prev-btn"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                    aria-label="Etapa anterior da jornada"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    id="journey-next-btn"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                    aria-label="Próxima etapa da jornada"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
