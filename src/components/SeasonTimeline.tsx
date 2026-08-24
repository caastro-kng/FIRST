import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SEASON_STEPS } from '../data/firstData';
import { ArrowRight, CheckCircle2, Clock3, Trophy } from 'lucide-react';

const SEASON_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=72',
];

export const SeasonTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = SEASON_STEPS[activeIndex];
  const progress = ((activeIndex + 1) / SEASON_STEPS.length) * 100;

  return (
    <section id="temporada" className="relative overflow-hidden bg-gray-950 py-24 lg:py-32 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-400"><span className="w-2 h-2 rounded-full bg-[#ED1C24]" />09 / TEMPORADA FIRST</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.98]">DO KICKOFF<br />AO <span className="text-[#ED1C24]">CHAMPIONSHIP.</span></h2>
          </div>
          <div className="lg:col-span-4"><p className="text-base text-gray-400 leading-relaxed">Uma temporada é uma corrida contra o calendário: entender o jogo, projetar, construir, programar, testar e chegar pronto para a arena.</p></div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-gray-500 mb-3"><span>KICKOFF</span><span>BUILD SEASON</span><span>COMPETIÇÃO</span></div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-[#ED1C24] rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: reduceMotion ? 0 : 0.25 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-[28px] overflow-hidden">
            {SEASON_STEPS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button key={item.number} onClick={() => setActiveIndex(index)} className={`w-full text-left px-5 py-4 border-b last:border-b-0 border-white/10 transition-all flex items-center gap-4 group ${isActive ? 'bg-white text-gray-950' : 'hover:bg-white/5 text-white'}`}>
                  <span className={`text-xs font-mono font-bold shrink-0 ${isActive ? 'text-[#ED1C24]' : 'text-gray-600'}`}>{item.number}</span>
                  <div className="flex-1 min-w-0"><div className="text-sm font-black uppercase tracking-tight truncate">{item.title}</div><div className="text-[10px] font-mono uppercase mt-1 text-gray-500">{item.period}</div></div>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-gray-950' : 'text-gray-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={activeIndex} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} className="space-y-5">
                <div className="relative rounded-[28px] overflow-hidden min-h-[320px] sm:min-h-[410px] border border-white/10 bg-black">
                  <img src={SEASON_IMAGES[activeIndex] || SEASON_IMAGES[0]} alt={step.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" fetchPriority="low" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider"><Clock3 className="w-3.5 h-3.5 text-blue-400" />{step.period}</div>
                    <div className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300">{step.phase}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#ED1C24] mb-2">FOCO • {step.focusArea}</div>
                    <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {step.deliverables.slice(0, 3).map((deliverable, index) => (
                    <div key={index} className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><p className="text-xs text-gray-300 leading-relaxed">{deliverable}</p></div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between gap-4"><div><div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-gray-500 mb-1">CLÍMAX DA TEMPORADA</div><div className="text-sm font-black uppercase">Entregar tudo na arena</div></div><Trophy className="w-6 h-6 text-[#ED1C24]" /></div>
      </div>
    </section>
  );
};
