import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEASON_STEPS } from '../data/firstData';
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Layers, Sparkles } from 'lucide-react';

const SEASON_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    caption: 'Transmissão global do Kickoff: revelação simultânea da arena e manuais para times do mundo inteiro.',
    alt: 'Auditório lotado assistindo ao evento de lançamento global da temporada FIRST'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    caption: 'Prototipagem rápida: testes empíricos com modelos em papelão, madeira e peças modulares.',
    alt: 'Equipe de estudantes reunida planejando estratégias e desenhando ideias no quadro branco'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80',
    caption: 'Projeto digital 3D: desenho paramétrico no CAD com simulação de tensões e centro de massa.',
    alt: 'Modelagem 3D mecânica detalhada de subsistemas de robótica em tela de computador'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    caption: 'Oficina & Manufatura: usinagem em CNC, impressão 3D e fixação de peças estruturais.',
    alt: 'Oficina de fabricação com ferramentas industriais e montagem do chassi do robô'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Software & Controle: programação de rotinas autônomas, visão por AprilTags e sintonia PID.',
    alt: 'Programador ajustando código em Java com notebook conectado ao robô em bancada'
  },
  {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Validação & Prática: treino intenso da equipe de pilotagem em campo e testes de resistência.',
    alt: 'Robô realizando testes dinâmicos de velocidade e coleta em arena de treino'
  },
  {
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    caption: 'Competição & Clímax: partidas eletrizantes em arena, alianças estratégicas e celebração dos valores.',
    alt: 'Arena de competição oficial FIRST com luzes, público vibrante e alianças de robôs'
  }
];

export const SeasonTimeline: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const totalSteps = SEASON_STEPS.length;

  const goToNext = () => {
    setDirection(1);
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const goToStep = (index: number) => {
    setDirection(index > currentStep ? 1 : -1);
    setCurrentStep(index);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      
      const timelineEl = document.getElementById('temporada');
      if (!timelineEl) return;
      
      const rect = timelineEl.getBoundingClientRect();
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
  }, [currentStep]);

  // Touch swipe controls
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

  const step = SEASON_STEPS[currentStep];
  const stepImage = SEASON_IMAGES[currentStep] || SEASON_IMAGES[0];

  return (
    <section id="temporada" className="py-20 lg:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Big Editorial Statement (35-40%) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
                <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
                <span>09 / CICLO ANUAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
                COMO É UMA <br />
                <span className="text-[#0066B3]">TEMPORADA</span> <br />
                COMPLETA?
              </h2>

              <p className="text-base text-gray-600 font-normal leading-relaxed pt-2">
                Do lançamento oficial do desafio às competições finais de arena, acompanhe o 
                ritmo dinâmico de engenharia, programação e estratégia de um ano de robótica.
              </p>
            </div>

            {/* Quick Step Overview List on Desktop */}
            <div className="pt-2 hidden sm:block">
              <div className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-3">
                ETAPAS DO CICLO ANUAL:
              </div>
              
              <div className="grid grid-cols-1 gap-1.5">
                {SEASON_STEPS.map((s, idx) => {
                  const isActive = currentStep === idx;
                  return (
                    <button
                      key={s.number}
                      onClick={() => goToStep(idx)}
                      id={`season-sidebar-step-${idx}`}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#F0F7FF] border-[#0066B3] text-[#0066B3]'
                          : 'bg-transparent border-transparent hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#0066B3]' : 'text-gray-400'}`}>
                          {s.number}
                        </span>
                        <span className={`text-xs font-semibold uppercase tracking-tight ${isActive ? 'text-gray-950 font-bold' : 'text-gray-700'}`}>
                          {s.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">
                        {s.focusArea}
                      </span>
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
            {/* Carousel Box with Stable Min-Height */}
            <div className="bg-[#FAFAFA] border border-gray-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
              
              {/* Animated Slide Content */}
              <div className="relative overflow-hidden flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 32 : -32,
                      scale: 0.99,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.48,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -32 : 32,
                      scale: 0.99,
                      transition: {
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="space-y-6"
                  >
                    
                    {/* Header Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#0066B3] text-white rounded-md uppercase">
                          ETAPA {step.number}
                        </span>
                        <span className="text-xs font-mono text-gray-700 bg-white px-2.5 py-1 rounded-md border border-gray-200 uppercase font-semibold">
                          {step.phase}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {step.period}
                      </span>
                    </div>

                    {/* Step Title & Focus Area */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono font-bold text-[#0066B3] uppercase tracking-wider">
                        FOCO PRINCIPAL: {step.focusArea}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Authentic Context Image */}
                    <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-gray-100 border border-gray-200 group">
                      <img
                        src={stepImage.url}
                        alt={stepImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3.5 pt-8">
                        <p className="text-[11px] text-white/90 font-medium leading-snug">
                          {stepImage.caption}
                        </p>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Deliverables / Activities Checklist */}
                    <div className="space-y-2.5 pt-1">
                      <div className="text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#0066B3]" />
                        <span>Atividades & Entregas Chave:</span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {step.deliverables.map((del, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 bg-white border border-gray-200/90 rounded-xl text-xs text-gray-800 font-medium shadow-2xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Carousel Controls & Numbered Timeline Strip */}
              <div className="pt-6 mt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Numbered Indicators (01 02 03 04 05 06 07) with sliding underline */}
                <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto max-w-full pb-1 sm:pb-0" role="tablist" aria-label="Etapas da Temporada">
                  {SEASON_STEPS.map((s, idx) => {
                    const isActive = currentStep === idx;
                    return (
                      <button
                        key={s.number}
                        onClick={() => goToStep(idx)}
                        id={`season-dot-step-${idx}`}
                        className={`relative py-1 px-1 text-xs font-mono font-bold transition-colors ${
                          isActive ? 'text-[#0066B3]' : 'text-gray-400 hover:text-gray-700'
                        }`}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Ir para etapa ${s.number}`}
                      >
                        <span>{s.number}</span>
                        {isActive && (
                          <motion.div
                            layoutId="seasonActiveLine"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066B3] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Left/Right Subtle Navigation Arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={goToPrev}
                    id="season-prev-btn"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                    aria-label="Etapa anterior da temporada"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    id="season-next-btn"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                    aria-label="Próxima etapa da temporada"
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
