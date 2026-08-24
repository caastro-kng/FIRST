import React from 'react';
import { BRAZIL_ECOSYSTEM_DATA } from '../data/firstData';
import { School, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';

export const FirstBrazilSesiSenai: React.FC = () => {
  return (
    <section id="sesi-senai" className="relative border-b border-gray-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066B3]" />
              {BRAZIL_ECOSYSTEM_DATA.eyebrow}
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-6xl">
              DA SALA DE AULA<br />
              <span className="text-[#0066B3]">PARA A ARENA.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:col-span-4">
            {BRAZIL_ECOSYSTEM_DATA.intro}
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-3xl bg-gray-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300">ECOSSISTEMA BRASILEIRO</div>
              <h3 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                EDUCAÇÃO, INDÚSTRIA E COMPETIÇÃO NO MESMO CAMINHO.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                Escolas, laboratórios, mentores e torneios conectados para transformar aprendizado técnico em experiência prática.
              </p>
            </div>
            <div className="grid grid-cols-2 border-t border-white/10 lg:col-span-5 lg:border-l lg:border-t-0">
              <div className="border-r border-white/10 p-7">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">SESI</div>
                <div className="mt-2 text-xl font-black text-blue-300">EDUCAÇÃO</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">Equipes, cultura STEAM e competição.</p>
              </div>
              <div className="p-7">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">SENAI</div>
                <div className="mt-2 text-xl font-black text-amber-300">INDÚSTRIA</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">Infraestrutura e engenharia aplicada.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
            <span>O CAMINHO NACIONAL</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            {BRAZIL_ECOSYSTEM_DATA.flowSteps.map((step, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#0066B3]">{step.number}</span>
                  {idx < BRAZIL_ECOSYSTEM_DATA.flowSteps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-gray-300 md:block" />}
                </div>
                <h3 className="mt-4 text-sm font-black uppercase tracking-tight text-gray-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-8 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-[#0066B3] p-3 text-white"><School className="h-6 w-6" /></div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900">{BRAZIL_ECOSYSTEM_DATA.sesiRole.badge}</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-gray-950">{BRAZIL_ECOSYSTEM_DATA.sesiRole.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{BRAZIL_ECOSYSTEM_DATA.sesiRole.description}</p>
            <div className="mt-6 space-y-3">
              {BRAZIL_ECOSYSTEM_DATA.sesiRole.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0066B3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-[#D97706] p-3 text-white"><Factory className="h-6 w-6" /></div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900">{BRAZIL_ECOSYSTEM_DATA.senaiRole.badge}</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-gray-950">{BRAZIL_ECOSYSTEM_DATA.senaiRole.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{BRAZIL_ECOSYSTEM_DATA.senaiRole.description}</p>
            <div className="mt-6 space-y-3">
              {BRAZIL_ECOSYSTEM_DATA.senaiRole.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
