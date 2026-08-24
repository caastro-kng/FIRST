import React from 'react';
import { Sparkles, Trophy, Users, Heart } from 'lucide-react';

export const ImpactStatement: React.FC = () => {
  const pillars = [
    'Engenharia Aplicada',
    'Liderança Jovem',
    'Criatividade Radical',
    'Colaboração & Alianças',
    'Tecnologia de Ponta',
    'Resolução de Problemas'
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#090D16] text-white relative overflow-hidden">
      
      {/* Delicate background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>O PROPÓSITO FORMATIVO DA FIRST</span>
        </div>

        {/* Huge Hero Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight max-w-5xl mx-auto leading-[1.05]">
          O ROBÔ É O DESAFIO. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-400">
            AS PESSOAS SÃO O RESULTADO.
          </span>
        </h2>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-normal max-w-3xl mx-auto leading-relaxed">
          Competições terminam em um final de semana. A autoconfiança para encarar problemas 
          complexos, a habilidade de trabalhar sob pressão e o compromisso ético duram uma vida inteira.
        </p>

        {/* 6 Sub-disciplines Badges in Clean Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-6 max-w-4xl mx-auto">
          {pillars.map((pill, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs sm:text-sm font-semibold text-gray-200 tracking-wide transition-colors"
            >
              {pill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
