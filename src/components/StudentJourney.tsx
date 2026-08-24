import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { STUDENT_JOURNEY_STAGES } from '../data/firstData';
import { ArrowRight, GraduationCap, Sparkles, TrendingUp } from 'lucide-react';

const JOURNEY_IMAGES = [
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=72',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=72',
];

export const StudentJourney: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = STUDENT_JOURNEY_STAGES[currentStage];
  const stageName = stage.stage.split('.')[1]?.trim() || stage.stage;

  return (
    <section id="jornada" className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0066B3]">
              <span className="w-2 h-2 rounded-full bg-[#0066B3]" />
              08 / JORNADA DO ESTUDANTE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.98] text-gray-950">
              DA PRIMEIRA PEÇA<br />
              AO <span className="text-[#0066B3]">PRIMEIRO GRANDE ROBÔ.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-base text-gray-600 leading-relaxed">
              A evolução dentro da FIRST não é apenas técnica. Cada etapa amplia autonomia, responsabilidade, repertório e capacidade de trabalhar em equipe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4 bg-[#F6F7F9] border border-gray-200 rounded-[28px] p-4 sm:p-5">
            <div className="space-y-2">
              {STUDENT_JOURNEY_STAGES.map((item, index) => {
                const isActive = index === currentStage;
                const itemName = item.stage.split('.')[1]?.trim() || item.stage;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentStage(index)}
                    className={`w-full text-left rounded-2xl px-4 py-4 transition-all flex items-center gap-4 ${isActive ? 'bg-gray-950 text-white' : 'bg-transparent hover:bg-white text-gray-950'}`}
                    aria-pressed={isActive}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${isActive ? 'bg-white text-gray-950' : 'bg-white border border-gray-200 text-gray-500'}`}>
                      0{index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black uppercase tracking-tight truncate">{itemName}</div>
                      <div className={`text-[10px] font-mono uppercase mt-1 ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.ageRange} • {item.level}
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 bg-gray-950 rounded-[28px] overflow-hidden text-white relative min-h-[600px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStage}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                className="h-full"
              >
                <div className="relative h-[300px] sm:h-[350px] lg:h-[380px] overflow-hidden">
                  <img
                    src={JOURNEY_IMAGES[currentStage]}
                    alt={stageName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-4">
                    <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest">
                      ETAPA 0{currentStage + 1} / 04
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-gray-200">
                      {stage.leagueMatch}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-blue-400 mb-2">
                      {stage.ageRange} • {stage.level}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
                      {stageName}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-9 grid grid-cols-1 lg:grid-cols-12 gap-7">
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{stage.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 mb-3"><TrendingUp className="w-4 h-4" />COMPETÊNCIAS TÉCNICAS</div>
                        <ul className="space-y-2 text-xs text-gray-300">{stage.technicalSkills.slice(0, 3).map((item, index) => <li key={index} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0066B3] mt-1.5 shrink-0" /><span>{item}</span></li>)}</ul>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 mb-3"><Sparkles className="w-4 h-4" />DESENVOLVIMENTO HUMANO</div>
                        <ul className="space-y-2 text-xs text-gray-300">{stage.softSkills.slice(0, 3).map((item, index) => <li key={index} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 shrink-0" /><span>{item}</span></li>)}</ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l border-white/10 lg:pl-7">
                    <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col justify-between">
                      <div>
                        <GraduationCap className="w-6 h-6 text-emerald-400 mb-5" />
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">RESULTADO FORMATIVO</div>
                        <p className="text-sm text-gray-200 leading-relaxed">{stage.outcome}</p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono uppercase text-gray-500">EXPERIÊNCIA → AUTONOMIA → LIDERANÇA</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
