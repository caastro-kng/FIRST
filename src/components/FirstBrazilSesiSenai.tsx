import React from 'react';
import { BRAZIL_ECOSYSTEM_DATA } from '../data/firstData';
import { School, Factory, ArrowRight, Award, CheckCircle2, ShieldCheck, Sparkles, Compass } from 'lucide-react';

export const FirstBrazilSesiSenai: React.FC = () => {
  return (
    <section id="sesi-senai" className="py-20 lg:py-28 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & High Contrast */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
            <span>{BRAZIL_ECOSYSTEM_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-tight">
            {BRAZIL_ECOSYSTEM_DATA.headline}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            {BRAZIL_ECOSYSTEM_DATA.intro}
          </p>
        </div>

        {/* The Operational Flow: "Da Sala de Aula para a Arena" (Editorial Connected Line) */}
        <div className="mb-20">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
            <span>DA SALA DE AULA PARA A ARENA: O FLUXO NACIONAL</span>
            <span className="h-[1px] bg-gray-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {BRAZIL_ECOSYSTEM_DATA.flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50/80 hover:bg-gray-50 border border-gray-200/80 rounded-xl space-y-2 relative group transition-all"
              >
                {/* Step Marker */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-[#0066B3]">{step.number}</span>
                  {idx < BRAZIL_ECOSYSTEM_DATA.flowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 hidden md:block" />
                  )}
                </div>

                <div className="text-sm font-black text-gray-900 uppercase tracking-tight">
                  {step.title}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown: SESI vs SENAI Roles (Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* SESI Box */}
          <div className="p-8 sm:p-10 bg-[#F8FAFC] border border-blue-100 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-xs">
                  <School className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-blue-100 text-blue-900 rounded-full uppercase tracking-wider">
                  {BRAZIL_ECOSYSTEM_DATA.sesiRole.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tight">
                {BRAZIL_ECOSYSTEM_DATA.sesiRole.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {BRAZIL_ECOSYSTEM_DATA.sesiRole.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">
                  Pilares de Atuação no Brasil:
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  {BRAZIL_ECOSYSTEM_DATA.sesiRole.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>LIGAS OPERADAS: <strong>FLL & FTC</strong></span>
              <span className="text-blue-700 font-bold">FESTIVAL SESI</span>
            </div>
          </div>

          {/* SENAI Box */}
          <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-amber-200/60 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="p-3 bg-[#D97706] text-white rounded-xl shadow-xs">
                  <Factory className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full uppercase tracking-wider">
                  {BRAZIL_ECOSYSTEM_DATA.senaiRole.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tight">
                {BRAZIL_ECOSYSTEM_DATA.senaiRole.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {BRAZIL_ECOSYSTEM_DATA.senaiRole.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">
                  Pilares de Atuação no Brasil:
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  {BRAZIL_ECOSYSTEM_DATA.senaiRole.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>SUPORTE AVANÇADO: <strong>FRC & MECATRÔNICA</strong></span>
              <span className="text-amber-800 font-bold">INDÚSTRIA 4.0</span>
            </div>
          </div>

        </div>

        {/* Visual Callout: Brazilian Festival Experience */}
        <div className="rounded-2xl overflow-hidden bg-gray-950 text-white p-8 sm:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-1 bg-emerald-950/80 border border-emerald-800/60 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>O GRANDE ENCONTRO DA ROBÓTICA NACIONAL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                O Festival SESI de Robótica
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl font-normal">
                Realizado anualmente em Brasília (DF), o Festival SESI de Robótica reúne as melhores 
                equipes classificadas de todas as regiões brasileiras nas modalidades FLL, FTC, FRC e F1 in Schools. 
                Mais do que troféus, o evento celebra a colaboração, o protagonismo jovem e distribui vagas 
                para o FIRST Championship em Houston (EUA).
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
              <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                IMPACTO DO SISTEMA INDÚSTRIA
              </div>
              <div className="text-2xl font-black text-white font-mono">
                +100.000
              </div>
              <p className="text-xs text-gray-400 leading-normal">
                Estudantes impactados diretamente pela cultura STEAM nas escolas SESI e centros SENAI em todo o Brasil.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
