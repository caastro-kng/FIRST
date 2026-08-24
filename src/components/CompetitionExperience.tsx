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
    <section id="experiencia" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Geometric Balance */}
        <div className="max-w-3xl mb-12 space-y-2 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <span className="w-1.5 h-1.5 bg-[#0066B3]" />
            <span>10 / O IMPACTO ALÉM DO ROBÔ & MULTIDISCIPLINARIDADE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight uppercase">
            Uma formação multidisciplinar completa
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            A FIRST não forma apenas operadores de ferramentas: ela prepara líderes, designers, 
            gestores de projeto, cientistas de dados e comunicadores sociais.
          </p>
        </div>

        {/* 6 Multidisciplinary Areas Grid in Geometric Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {COMPETITION_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-200 hover:border-gray-400 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2 bg-gray-50 border border-gray-200 w-fit">
                  {getAreaIcon(area.icon)}
                </div>
                <h3 className="text-sm font-black text-[#1A1A1A] uppercase tracking-tight">
                  {area.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {area.description}
                </p>
              </div>

              <div className="pt-2 text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100">
                ÁREA INTEGRADA DE EQUIPE
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Feature: The Atmosphere of the Pits & Judges Room in Geometric Card */}
        <div className="p-6 sm:p-10 bg-[#1A1A1A] text-white border border-gray-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>A CULTURA DOS PITS (BOXES DE TORNEIO)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                Onde rivais emprestam motores minutos antes da grande final
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Em qualquer torneio FIRST, o ambiente dos boxes (Pits) é o retrato vivo do <strong>Gracious Professionalism</strong>. Se um robô quebra seu eixo principal ou queima um controlador de motor nas semifinais, um anúncio é feito pelos alto-falantes e, em segundos, equipes adversárias correm com peças sobressalentes, ferramentas e programadores para colocar o rival de volta na quadra a tempo.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 bg-gray-900 border border-gray-800 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>O QUE OS JURADOS BUSCAM</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Clareza técnica ao defender escolhas de design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Protagonismo 100% dos estudantes (não dos mentores)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Ações reais que disseminaram STEM em escolas públicas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
