import React from 'react';
import { Globe2, Users, CalendarDays, HeartHandshake } from 'lucide-react';

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
  return (
    <section aria-label="Impacto global da FIRST" className="border-b border-gray-200 bg-[#F6F7F9] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                  <Icon className="h-4 w-4 text-[#0066B3]" aria-hidden="true" />
                  <div className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950 sm:text-3xl">{stat.value}</div>
                  <div className="mt-2 text-xs font-bold leading-snug text-gray-800">{stat.label}</div>
                  <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-gray-400">{stat.detail}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 text-[10px] font-mono uppercase tracking-wider text-gray-400">
          Fonte: FIRST Impact • dados globais mais recentes publicados pela organização.
        </div>
      </div>
    </section>
  );
};
