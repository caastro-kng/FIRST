import React from 'react';
import { COMPETITION_AREAS } from '../data/firstData';
import { Wrench, Code, LineChart, Palette, Coins, Sparkles, Heart, ShieldAlert, Users, Award } from 'lucide-react';

export const CompetitionExperience: React.FC = () => {
  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#0066B3]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#ED1C24]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-emerald-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-600" />;
      case 'Coins': return <Coins className="w-5 h-5 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-600" />;
      default: return <Sparkles className="w-5 h-5 text-gray-700" />;
    }
  };

  return (
    <section id="experiencia" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
            <span>10 / O IMPACTO ALÉM DO ROBÔ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
            UMA FORMAÇÃO <br />
            <span className="text-[#0066B3]">MULTIDISCIPLINAR</span> COMPLETA
          </h2>

          <p className="text-base text-gray-600 font-normal leading-relaxed">
            A FIRST não forma apenas operadores de ferramentas: ela prepara líderes, designers, 
            gestores de projeto, cientistas de dados e comunicadores sociais.
          </p>
        </div>

        {/* 6 Multidisciplinary Areas Grid in Refined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {COMPETITION_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-200/90 rounded-2xl hover:border-gray-300 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl w-fit">
                  {getAreaIcon(area.icon)}
                </div>
                <h3 className="text-base font-black text-gray-950 uppercase tracking-tight">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>

              <div className="pt-3 text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100 flex items-center justify-between">
                <span>ÁREA INTEGRADA #{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Feature: The Atmosphere of the Pits & Judges Room */}
        <div className="p-8 sm:p-10 bg-gray-950 text-white rounded-2xl border border-gray-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-1 bg-emerald-950/80 border border-emerald-800/60 rounded-md">
                <Users className="w-3.5 h-3.5" />
                <span>A CULTURA DOS PITS (BOXES DE TORNEIO)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Onde rivais emprestam peças e código antes da final
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Em qualquer torneio FIRST, o ambiente dos boxes (Pits) é o retrato vivo do <strong>Gracious Professionalism®</strong>. Se um robô quebra seu eixo principal ou queima um controlador de motor nas semifinais, um anúncio é feito pelos alto-falantes e, em segundos, equipes adversárias correm com peças sobressalentes, ferramentas e programadores para colocar o rival de volta na quadra a tempo.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>O QUE OS JURADOS BUSCAM</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-2 font-normal">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span>Clareza técnica ao defender escolhas no CAD e na arena</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span>Protagonismo genuíno dos estudantes nas decisões</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span>Projetos sociais que disseminaram STEAM na comunidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
