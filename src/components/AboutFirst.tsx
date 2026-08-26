import React from 'react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { FIRST_HISTORY, PHILOSOPHY_CONCEPTS } from '../data/firstData';

export const AboutFirst: React.FC = () => {
  return (
    <section id="sobre" className="relative border-b border-gray-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066B3]" />
              01 / POR QUE A FIRST EXISTE
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-6xl">
              TRANSFORMAR A CULTURA<br />
              POR MEIO DA <span className="text-[#0066B3]">ENGENHARIA.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              A FIRST usa a robótica como ferramenta. O objetivo maior é formar jovens capazes de criar, colaborar, liderar e resolver problemas reais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl bg-[#F5F7FA] p-8 sm:p-10 lg:col-span-7">
            <div className="absolute right-6 top-4 text-[72px] font-black leading-none text-gray-200 sm:text-[110px]">1989</div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-gray-500">A ORIGEM</div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-950 sm:text-3xl">
                  {FIRST_HISTORY.acronymMeaning}
                </h3>
                <p className="text-xs font-medium italic text-gray-500">{FIRST_HISTORY.ptTranslation}</p>
              </div>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Criada por <strong>Dean Kamen</strong>, com a colaboração do <strong>Dr. Woodie Flowers</strong>, a FIRST nasceu para fazer ciência e tecnologia ocuparem, na cultura jovem, o mesmo espaço de prestígio do esporte e do entretenimento.
              </p>

              <blockquote className="border-l-4 border-[#0066B3] pl-5 text-lg font-bold leading-snug text-gray-950 sm:text-xl">
                {FIRST_HISTORY.vision}
              </blockquote>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-950">
                    <CheckCircle2 className="h-4 w-4 text-[#0066B3]" /> Mentoria
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">Professores, técnicos e profissionais apoiam os estudantes ao longo do processo de engenharia.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-950">
                    <Sparkles className="h-4 w-4 text-[#ED1C24]" /> Protagonismo
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">Os estudantes participam das decisões, da construção, da comunicação e da estratégia.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-950 p-8 text-white sm:p-10 lg:col-span-5">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
                <Shield className="h-4 w-4" /> CULTURA FIRST
              </div>
              <span className="text-[10px] font-mono text-white/35">CORE</span>
            </div>

            <div className="space-y-8">
              {PHILOSOPHY_CONCEPTS.map((concept, idx) => (
                <div key={idx} className={idx > 0 ? 'border-t border-white/10 pt-7' : ''}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">0{idx + 1}</div>
                  <h4 className="mt-2 text-xl font-black uppercase tracking-tight">{concept.title}</h4>
                  <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-blue-300">{concept.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{concept.description}</p>
                  <div className="mt-4 border-l-2 border-emerald-400 pl-3 text-xs leading-relaxed text-gray-400">
                    {concept.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
