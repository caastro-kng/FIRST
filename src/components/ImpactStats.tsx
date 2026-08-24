import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Globe2, Users, CalendarDays, HeartHandshake, ArrowUpRight } from 'lucide-react';

const STATS = [
  {
    value: '4M+',
    label: 'jovens participantes',
    detail: 'desde 1989',
    icon: Users,
  },
  {
    value: '114',
    label: 'países com presença FIRST',
    detail: 'movimento global',
    icon: Globe2,
  },
  {
    value: '5.400',
    label: 'eventos FIRST',
    detail: 'temporada 2024–2025',
    icon: CalendarDays,
  },
  {
    value: '39M',
    label: 'horas de voluntários e educadores',
    detail: 'temporada 2024–2025',
    icon: HeartHandshake,
  },
];

export const ImpactStats: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Impacto global da FIRST" className="relative overflow-hidden border-b border-gray-200 bg-[#F6F7F9] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0066B3]">ESCALA GLOBAL</div>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[1.02] tracking-[-0.035em] text-gray-950 sm:text-4xl">
              UM MOVIMENTO<br />
              <span className="text-[#0066B3]">MUITO ALÉM DA ARENA.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
              A FIRST conecta escolas, mentores, voluntários, empresas e competições em uma comunidade global de educação STEM.
            </p>

            <a
              href="https://www.firstinspires.org/about/impact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-gray-700 transition-colors hover:text-[#0066B3]"
              aria-label="Ver dados de impacto no site oficial da FIRST (abre em nova aba)"
            >
              Ver fonte oficial
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={stat.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : index * 0.05 }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.03)] transition-shadow hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-xl bg-blue-50 p-2 text-[#0066B3] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-300">0{index + 1}</span>
                  </div>
                  <div className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950 sm:text-3xl">{stat.value}</div>
                  <div className="mt-2 text-xs font-bold leading-snug text-gray-800">{stat.label}</div>
                  <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-gray-400">{stat.detail}</div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-1 text-[10px] font-mono uppercase tracking-wider text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>Fonte: FIRST Impact.</span>
          <span>Dados globais publicados pela organização.</span>
        </div>
      </div>
    </section>
  );
};
