import React, { useMemo, useState } from 'react';
import { COMPARISON_CRITERIA } from '../data/firstData';
import { Check, ChevronDown, Layers3, Scale, Cpu, Code2, Users, Trophy } from 'lucide-react';

const LEAGUES = [
  {
    key: 'fll' as const,
    name: 'FLL',
    fullName: 'FIRST LEGO League',
    age: '9–15 anos*',
    level: 'Entrada',
    headline: 'LEGO + CIÊNCIA',
    description: 'A porta de entrada para construir, programar e resolver problemas reais com criatividade.',
    accent: '#FF5F00',
    soft: '#FFF4E8',
    icon: Layers3,
  },
  {
    key: 'ftc' as const,
    name: 'FTC',
    fullName: 'FIRST Tech Challenge',
    age: '12–18 anos',
    level: 'Intermediário',
    headline: 'METAL + SOFTWARE',
    description: 'Mais liberdade de engenharia, estruturas metálicas, controle avançado e programação em Java.',
    accent: '#0066B3',
    soft: '#EAF5FF',
    icon: Cpu,
  },
  {
    key: 'frc' as const,
    name: 'FRC',
    fullName: 'FIRST Robotics Competition',
    age: '14–18 anos',
    level: 'Avançado',
    headline: 'ARENA + INDÚSTRIA',
    description: 'Robôs de grande porte, alianças 3v3, estratégia esportiva e engenharia em escala industrial.',
    accent: '#ED1C24',
    soft: '#FFF0F1',
    icon: Trophy,
  },
];

const FEATURED_IDS = ['age', 'platform', 'weight', 'programming_lang', 'field_size', 'alliance_structure'];

const ICONS: Record<string, React.ReactNode> = {
  age: <Users className="w-4 h-4" />,
  platform: <Layers3 className="w-4 h-4" />,
  weight: <Scale className="w-4 h-4" />,
  programming_lang: <Code2 className="w-4 h-4" />,
  control_system: <Cpu className="w-4 h-4" />,
  field_size: <Trophy className="w-4 h-4" />,
};

export const ComparisonMatrix: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() => {
    const selected = COMPARISON_CRITERIA.filter((item) => FEATURED_IDS.includes(item.id));
    return showAll ? COMPARISON_CRITERIA : selected;
  }, [showAll]);

  return (
    <section id="comparativo" className="py-24 lg:py-32 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0066B3]">
              <span className="w-2 h-2 rounded-full bg-[#0066B3]" />
              04 / COMPARATIVO
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.98] text-gray-950">
              TRÊS LIGAS.<br />
              <span className="text-[#0066B3]">TRÊS ESCALAS.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-base text-gray-600 leading-relaxed">
              A tecnologia muda de escala, mas a lógica permanece: projetar, programar, testar e competir em equipe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {LEAGUES.map((league) => {
            const Icon = league.icon;
            return (
              <div key={league.key} className="rounded-[26px] border border-gray-200 bg-white overflow-hidden">
                <div className="p-6 sm:p-7" style={{ backgroundColor: league.soft }}>
                  <div className="flex items-start justify-between gap-4 mb-10">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-gray-500">{league.level}</div>
                      <div className="text-sm font-mono text-gray-500 mt-1">{league.age}</div>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center" style={{ color: league.accent }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl font-black tracking-tight" style={{ color: league.accent }}>{league.name}</div>
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-gray-700">{league.headline}</div>
                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{league.description}</p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 border-t border-gray-200 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-gray-800">{league.fullName}</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: league.accent }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-[28px] border border-gray-200 overflow-hidden bg-white">
          <div className="hidden md:grid grid-cols-12 bg-gray-950 text-white">
            <div className="col-span-3 px-6 py-5 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-gray-400">Característica</div>
            {LEAGUES.map((league) => (
              <div key={league.key} className="col-span-3 px-6 py-5 border-l border-white/10">
                <div className="text-xs font-mono font-bold" style={{ color: league.accent }}>{league.name}</div>
                <div className="text-[10px] text-gray-500 mt-1">{league.age}</div>
              </div>
            ))}
          </div>

          <div className="divide-y divide-gray-100">
            {featured.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50/70 transition-colors">
                <div className="md:col-span-3 px-5 sm:px-6 py-5 md:border-r border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                      {ICONS[item.id] ?? <Check className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-950">{item.label}</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5">{item.category}</div>
                    </div>
                  </div>
                </div>

                {LEAGUES.map((league) => (
                  <div key={league.key} className="md:col-span-3 px-5 sm:px-6 py-4 md:py-5 md:border-l border-gray-100 first:md:border-l-0">
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: league.accent }} />
                      <span className="text-[10px] font-mono font-bold uppercase" style={{ color: league.accent }}>{league.name}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item[league.key]}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="px-5 sm:px-6 py-4 bg-[#F8F9FB] border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-xs text-gray-500">
              {showAll ? `Exibindo todas as ${COMPARISON_CRITERIA.length} características.` : 'Exibindo os pontos que mais diferenciam as ligas.'}
            </div>

            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-[#0066B3] transition-colors"
            >
              {showAll ? 'Ver comparação resumida' : 'Ver comparação completa'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            ['FLL', 'Primeiro contato com robótica, autonomia e método científico.'],
            ['FTC', 'Engenharia aplicada com metal, software e liberdade de projeto.'],
            ['FRC', 'Escala industrial, estratégia esportiva e operação de equipe complexa.'],
          ].map(([title, copy], idx) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5">
              <div className="text-xs font-mono font-bold mb-2" style={{ color: LEAGUES[idx].accent }}>{title}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-gray-400">
          * Faixa usada pelo programa operado pelo SESI no Brasil; idades da FIRST LEGO League podem variar por país e formato.
        </p>
      </div>
    </section>
  );
};
