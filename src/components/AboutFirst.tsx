import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';
import { FIRST_HISTORY, PHILOSOPHY_CONCEPTS } from '../data/firstData';

export const AboutFirst: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
            <span>01 / ORIGEM, MISSÃO & FILOSOFIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
            ONDE ENGENHARIA <br />
            ENCONTRA O <span className="text-[#0066B3]">FUTURO.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Mais do que construir máquinas, a FIRST foi concebida para transformar a cultura global: 
            onde jovens cientistas, programadores e líderes são celebrados com o mesmo entusiasmo 
            dedicado a atletas de elite.
          </p>
        </div>

        {/* Storytelling Grid: Historical Origin & Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FBFBFB] border border-gray-200/80 rounded-2xl space-y-6">
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">
                O SIGNIFICADO DA SIGLA
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
                {FIRST_HISTORY.acronymMeaning}
              </h3>
              <p className="text-xs text-gray-600 font-medium italic">
                "{FIRST_HISTORY.ptTranslation}"
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              Fundada em <strong className="text-gray-950 font-bold">{FIRST_HISTORY.foundedYear}</strong> pelo renomado inventor e empreendedor <strong>Dean Kamen</strong> (criador do Segway e de bombas de infusão médicas) juntamente com o <strong>Dr. Woodie Flowers</strong> (professor emérito de engenharia mecânica do MIT), a FIRST nasceu para responder a um desafio educacional global:
            </p>

            <blockquote className="border-l-4 border-[#0066B3] pl-4 py-2 bg-blue-50/60 rounded-r-lg">
              <p className="text-sm font-semibold text-gray-900 italic leading-snug">
                {FIRST_HISTORY.vision}
              </p>
              <footer className="text-[10px] font-mono text-gray-500 mt-2 uppercase tracking-wider">
                — Dean Kamen, Fundador da FIRST
              </footer>
            </blockquote>

            <p className="text-sm text-gray-700 leading-relaxed">
              A metodologia fundamenta-se no <strong>STEAM</strong> (Science, Technology, Engineering, Arts, and Math), combinando o rigor do design com o desenvolvimento socioemocional e ético.
            </p>

            {/* Quick Fact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-gray-200/80 bg-white space-y-1 shadow-2xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066B3]" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase">Mentoria de Ponta</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Engenheiros voluntários e professores atuam ombro a ombro com alunos.</p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200/80 bg-white space-y-1 shadow-2xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED1C24]" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase">Bolsas Globais</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Centenas de universidades no mundo reservam bolsas para egressos FIRST.</p>
              </div>
            </div>

          </div>

          {/* Pillars of Philosophy (Right 5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-gray-950 text-white rounded-2xl flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-[10px] font-mono">
                <span className="text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  VALORES ÉTICOS INEGOCIÁVEIS
                </span>
                <span className="text-gray-400">FIRST CORE</span>
              </div>
              
              <div className="space-y-6">
                {PHILOSOPHY_CONCEPTS.map((concept, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-5 border-t border-gray-800' : ''}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-white tracking-tight uppercase">
                        {concept.title}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">{concept.subtitle}</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed mt-2 font-normal">
                      {concept.description}
                    </p>
                    <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10 text-xs text-gray-300 font-mono">
                      <strong className="text-emerald-400 font-semibold">Exemplo real: </strong>
                      {concept.highlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-800 text-[10px] font-mono text-gray-400 uppercase text-right">
              RESPONSABILIDADE SOCIAL • RIGOR ÉTICO
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
