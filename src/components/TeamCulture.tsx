import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const VALUES = [
  {
    number: '01',
    name: 'Descoberta',
    tagline: 'Aprender fazendo.',
    description: 'Explorar ferramentas, ideias e novas habilidades sem tratar o erro como fracasso. Na FIRST, cada teste vira informação para a próxima versão.',
    example: 'Aprender uma linguagem, uma ferramenta de CAD ou um processo de fabricação durante a construção.',
    accent: '#0066B3',
    icon: Compass,
  },
  {
    number: '02',
    name: 'Inovação',
    tagline: 'Criar o que ainda não existe.',
    description: 'Transformar criatividade em solução de engenharia: observar o problema, prototipar, medir, melhorar e voltar para a arena com uma ideia mais eficiente.',
    example: 'Projetar um mecanismo próprio para resolver uma missão de maneira mais rápida, simples ou confiável.',
    accent: '#F59E0B',
    icon: Lightbulb,
  },
  {
    number: '03',
    name: 'Impacto',
    tagline: 'Levar STEM além da arena.',
    description: 'O conhecimento não termina no robô. Equipes compartilham tecnologia, criam projetos sociais e ajudam outras pessoas a descobrir ciência e engenharia.',
    example: 'Promover oficinas, mentorias e ações de robótica para escolas e comunidades da região.',
    accent: '#0284C7',
    icon: Target,
  },
  {
    number: '04',
    name: 'Inclusão',
    tagline: 'Toda voz fortalece a equipe.',
    description: 'Boas equipes são construídas por perspectivas diferentes. A cultura FIRST valoriza respeito, segurança, escuta e espaço real para cada estudante participar.',
    example: 'Distribuir protagonismo e responsabilidade entre estudantes com perfis, experiências e interesses diferentes.',
    accent: '#10B981',
    icon: Users,
  },
  {
    number: '05',
    name: 'Equipe',
    tagline: 'Nenhum robô é individual.',
    description: 'Mecânica, elétrica, software, estratégia e comunicação precisam funcionar como um único sistema. Colaboração é parte da engenharia.',
    example: 'Integrar subsistemas e pessoas para entregar um robô confiável dentro de um prazo real de competição.',
    accent: '#6366F1',
    icon: HeartHandshake,
  },
  {
    number: '06',
    name: 'Diversão',
    tagline: 'Competir também é celebrar.',
    description: 'Arquibancadas, música, mascotes e amizades fazem parte da experiência. O rigor técnico não elimina a diversão — ele torna a conquista ainda melhor.',
    example: 'Celebrar partidas, apoiar outras equipes e transformar o evento em uma memória que continua depois da temporada.',
    accent: '#ED1C24',
    icon: Sparkles,
  },
];

export const TeamCulture: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = VALUES[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="valores" className="relative overflow-hidden bg-[#F6F7F9] py-24 lg:py-32 border-b border-gray-200">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0066B3]">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              03 / CULTURA FIRST
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.98] text-gray-950">
              ANTES DO ROBÔ,<br />
              EXISTE UMA <span className="text-[#0066B3]">EQUIPE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-base text-gray-600 leading-relaxed">
              A FIRST mede sucesso também pela forma como estudantes descobrem, criam, colaboram e tratam quem está do outro lado da arena.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4 bg-gray-950 rounded-[28px] p-7 sm:p-8 text-white min-h-[420px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20" style={{ backgroundColor: active.accent }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="relative z-10"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xs font-mono text-gray-400">VALOR {active.number} / 06</span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10" style={{ backgroundColor: `${active.accent}25`, color: active.accent }}>
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.18em]" style={{ color: active.accent }}>
                    {active.tagline}
                  </p>
                  <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
                    {active.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 mt-10 pt-5 border-t border-white/10">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-2">NA PRÁTICA</div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{active.example}</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-[28px] overflow-hidden">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={value.number}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full group text-left px-5 sm:px-7 py-5 flex items-center gap-4 sm:gap-6 border-b last:border-b-0 border-gray-100 transition-all ${isActive ? 'bg-gray-950 text-white' : 'bg-white hover:bg-gray-50 text-gray-950'}`}
                  aria-pressed={isActive}
                >
                  <span className={`text-xs font-mono font-bold shrink-0 ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>{value.number}</span>

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${value.accent}14`, color: value.accent }}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between sm:gap-5">
                    <h4 className="text-base sm:text-lg font-black uppercase tracking-tight">{value.name}</h4>
                    <p className={`text-xs sm:text-sm mt-1 sm:mt-0 ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>{value.tagline}</p>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="text-[10px] font-mono font-bold text-[#0066B3] uppercase tracking-[0.18em]">GRACIOUS PROFESSIONALISM®</div>
            <p className="text-sm text-gray-600 mt-1">Competir no limite sem deixar de ajudar quem compete ao seu lado — ou contra você.</p>
          </div>
          <span className="text-xs font-mono font-bold text-gray-400 uppercase whitespace-nowrap">ENGENHARIA + CARÁTER</span>
        </div>
      </div>
    </section>
  );
};
