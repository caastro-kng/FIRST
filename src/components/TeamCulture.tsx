import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_VALUES } from '../data/firstData';
import {
  Compass,
  Lightbulb,
  Target,
  Users,
  HeartHandshake,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Shield,
  CheckCircle2,
  Sliders,
  Code2,
  Wrench,
  Zap,
  Palette,
  BarChart3
} from 'lucide-react';

export const TeamCulture: React.FC = () => {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const valuesConfig = [
    {
      number: '01',
      name: 'Descoberta',
      tagline: 'Explorar novas habilidades e ideias',
      description: 'Exploramos novos conhecimentos, ferramentas industriais e conceitos de engenharia sem medo do erro, encarando cada falha como parte natural da evolução.',
      icon: <Compass className="w-5 h-5" />,
      accentColor: '#0066B3',
      bgHover: 'hover:border-[#0066B3]/40',
      badgeBg: 'bg-blue-50 text-[#0066B3] border-blue-200/80',
      practicalExample: 'Aprender uma nova linguagem de programação ou método de usinagem durante a construção do chassi.'
    },
    {
      number: '02',
      name: 'Inovação',
      tagline: 'Criatividade para resolver problemas reais',
      description: 'Utilizamos criatividade, engenhosidade e rigor técnico para idealizar soluções originais e eficientes para desafios mecânicos e sociais complexos.',
      icon: <Lightbulb className="w-5 h-5" />,
      accentColor: '#F59E0B',
      bgHover: 'hover:border-amber-400/40',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200/80',
      practicalExample: 'Projetar um mecanismo de coleta e indexação inédito utilizando impressão 3D e geometria complacente.'
    },
    {
      number: '03',
      name: 'Impacto',
      tagline: 'Aplicar o aprendizado para melhorar o mundo',
      description: 'Levamos a ciência e a tecnologia para além da arena, compartilhando conhecimento, realizando oficinas comunitárias e inspirando novas gerações.',
      icon: <Target className="w-5 h-5" />,
      accentColor: '#0284C7',
      bgHover: 'hover:border-sky-400/40',
      badgeBg: 'bg-sky-50 text-sky-900 border-sky-200/80',
      practicalExample: 'Criar oficinas gratuitas de robótica em escolas públicas da região e projetos de extensão social.'
    },
    {
      number: '04',
      name: 'Inclusão',
      tagline: 'Respeitar e abraçar as diferenças',
      description: 'Valorizamos todas as vozes, origens e perspectivas, garantindo um ambiente seguro e acolhedor onde a diversidade é reconhecida como a maior força da equipe.',
      icon: <Users className="w-5 h-5" />,
      accentColor: '#10B981',
      bgHover: 'hover:border-emerald-400/40',
      badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200/80',
      practicalExample: 'Garantir que estudantes de todos os perfis e interesses tenham voz ativa nas decisões de projeto e liderança.'
    },
    {
      number: '05',
      name: 'Trabalho em Equipe',
      tagline: 'Mais fortes quando colaboramos',
      description: 'Nenhum robô é construído por uma só pessoa. Dividimos responsabilidades, apoiamos uns aos outros nas dificuldades e comemoramos as conquistas em conjunto.',
      icon: <HeartHandshake className="w-5 h-5" />,
      accentColor: '#6366F1',
      bgHover: 'hover:border-indigo-400/40',
      badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200/80',
      practicalExample: 'Sincronizar a equipe de mecânica, elétrica e software para cumprir prazos sem sobrecarregar ninguém.'
    },
    {
      number: '06',
      name: 'Diversão',
      tagline: 'Celebrar o entusiasmo da jornada',
      description: 'Trabalho sério e celebração andam juntos. A energia das arquibancadas, a música nas arenas e o entusiasmo do aprendizado são inegociáveis.',
      icon: <Sparkles className="w-5 h-5" />,
      accentColor: '#ED1C24',
      bgHover: 'hover:border-red-400/40',
      badgeBg: 'bg-red-50 text-red-900 border-red-200/80',
      practicalExample: 'Danças nos intervalos dos jogos, mascotes nos boxes e amizade duradoura entre competidores.'
    }
  ];

  const totalValues = valuesConfig.length;

  const goToNext = () => {
    setDirection(1);
    setActiveValueIndex(prev => (prev + 1) % totalValues);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveValueIndex(prev => (prev - 1 + totalValues) % totalValues);
  };

  const goToValue = (idx: number) => {
    setDirection(idx > activeValueIndex ? 1 : -1);
    setActiveValueIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      const el = document.getElementById('valores');
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
  }, [activeValueIndex]);

  // Touch gestures for mobile
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

  const activeValue = valuesConfig[activeValueIndex];

  return (
    <section id="valores" className="py-24 lg:py-32 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Layout: Left Statement (35%) vs Right Cards (65%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          
          {/* LADO ESQUERDO: Título, Eyebrow & Descrição */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
                <span className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full" />
                <span>03 / CULTURA & ÉTICA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
                OS 6 VALORES <br />
                <span className="text-[#0066B3]">FUNDAMENTAIS</span> <br />
                DA FIRST
              </h2>

              <p className="text-base text-gray-600 font-normal leading-relaxed pt-1">
                Na FIRST, a forma como os estudantes competem, colaboram e respeitam uns aos outros 
                é avaliada com o mesmo peso e rigor da engenharia do próprio robô.
              </p>
            </div>

            {/* Gracious Professionalism & Coopertition Note */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gray-900 font-bold uppercase">
                <Shield className="w-4 h-4 text-[#0066B3]" />
                <span>Gracious Professionalism®</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Competir com intensidade máxima dentro da quadra enquanto se ajuda os adversários 
                com peças e código nos boxes.
              </p>
            </div>

            {/* Navigation Arrows for Values */}
            <div className="hidden sm:flex items-center gap-3 pt-2">
              <button
                onClick={goToPrev}
                id="core-values-prev-btn"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 hover:translate-x-[-2px] active:translate-x-0 shadow-2xs"
                aria-label="Valor anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                id="core-values-next-btn"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 hover:translate-x-[2px] active:translate-x-0 shadow-2xs"
                aria-label="Próximo valor"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-gray-500 pl-2">
                {activeValue.number} / 06 — {activeValue.name}
              </span>
            </div>

          </div>

          {/* LADO DIREITO: Grade Interativa dos 6 Valores com Tipografia Maior e Respiro */}
          <div
            className="lg:col-span-8 space-y-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* 6 Cards Grid (2 colunas em tablet, 3 em desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {valuesConfig.map((val, idx) => {
                const isActive = activeValueIndex === idx;
                return (
                  <button
                    key={val.number}
                    onClick={() => goToValue(idx)}
                    id={`core-value-card-${idx}`}
                    className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group min-h-[160px] ${
                      isActive
                        ? 'bg-white border-gray-400 shadow-md translate-y-[-2px]'
                        : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 hover:translate-y-[-2px] shadow-2xs'
                    }`}
                  >
                    <div className="space-y-2.5">
                      {/* Top Row: Number & Icon */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-colors ${
                            isActive
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}
                        >
                          {val.number}
                        </span>

                        <div
                          className="p-2 rounded-lg transition-transform group-hover:scale-105"
                          style={{
                            backgroundColor: `${val.accentColor}12`,
                            color: val.accentColor
                          }}
                        >
                          {val.icon}
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-black text-gray-950 uppercase tracking-tight">
                          {val.name}
                        </h4>
                        <p className="text-xs text-gray-600 font-medium leading-snug line-clamp-2">
                          {val.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div className="pt-3 flex items-center justify-between border-t border-gray-100 mt-2">
                      <span className="text-[10px] font-mono uppercase text-gray-400">
                        VALOR #{val.number}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: val.accentColor }} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 30 — Área Explicativa Inferior com Fade-in Suave */}
            <div className="bg-[#FBFBFB] border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeValueIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-md text-white"
                        style={{ backgroundColor: activeValue.accentColor }}
                      >
                        VALOR {activeValue.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
                        {activeValue.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase font-semibold">
                      PRESENTE EM TODAS AS CATEGORIAS
                    </span>
                  </div>

                  {/* High Legibility Description */}
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                    {activeValue.description}
                  </p>

                  <div className="p-4 bg-white border border-gray-200/80 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-gray-900 uppercase block mb-0.5">
                        Exemplo prático no torneio:
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {activeValue.practicalExample}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
