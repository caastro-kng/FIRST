import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Trophy, Cpu, Users } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenGlossary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section id="inicio" className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FBFBFB] relative overflow-hidden">
      
      {/* Subtle strategic grid accent in the background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-[#0066B3] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
              <span>O MAIOR ECOSSISTEMA GLOBAL DE ROBÓTICA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.05] uppercase">
              MUITO MAIS QUE <span className="text-[#0066B3]">ROBÔS.</span>
            </h1>

            {/* Editorial Narrative */}
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
              A <strong>FIRST</strong> não constrói máquinas para ganhar torneios. Construímos robôs 
              para transformar pessoas. Estudantes projetam, usinam e programam robôs de nível industrial 
              enquanto desenvolvem liderança, cooperação radical e soluções reais para a sociedade.
            </p>

            {/* Action Buttons (Refined border-radius, clean hierarchy, smooth motion) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ligas"
                id="hero-cta-explore-leagues"
                className="btn-hover inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0066B3] hover:bg-[#005291] rounded-lg shadow-xs hover:shadow-md"
              >
                <span>Explorar as 3 Ligas</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sobre"
                id="hero-cta-about-first"
                className="btn-hover inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg"
              >
                <span>Conhecer a FIRST</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>

              <button
                onClick={onOpenQuiz}
                id="hero-quiz-link"
                className="btn-hover inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0066B3] hover:text-[#005291] py-2 px-1 group"
              >
                <span>Descobrir minha liga ideal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual with Light Telemetry Overlay */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200/80 bg-gray-900 group">
              
              {/* Competition Photography */}
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe de robótica FIRST ajustando robô industrial na arena"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Telemetry Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] animate-ping" />
                  <span className="font-bold tracking-wider uppercase">ARENA OFICIAL</span>
                </div>
                <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 tracking-wider uppercase">
                  STEM • BRASIL
                </div>
              </div>

              {/* Bottom Caption & Quote */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 text-white space-y-1">
                <div className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                  FILOSOFIA DO FUNDADOR
                </div>
                <p className="text-xs italic text-gray-200 leading-snug">
                  "Você tem adolescentes que nunca jogaram futebol no time da escola, mas agora constroem robôs de 55 kg e recebem bolsas universitárias."
                </p>
                <div className="text-[10px] font-mono text-gray-400 text-right">
                  — Dean Kamen, Fundador da FIRST
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Clean Open Metrics Row (No Heavy Enclosing Cards) */}
        <div className="mt-16 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight font-mono">
              +3.200
            </div>
            <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Equipes no Brasil
            </div>
            <p className="text-[11px] text-gray-500 font-medium">
              Presentes em escolas públicas, privadas e unidades SESI/SENAI.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#0066B3] tracking-tight font-mono">
              110+
            </div>
            <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Países no Mundo
            </div>
            <p className="text-[11px] text-gray-500 font-medium">
              Comunidade internacional unida pela ciência e engenharia.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#ED1C24] tracking-tight font-mono">
              3
            </div>
            <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Ligas Integradas
            </div>
            <p className="text-[11px] text-gray-500 font-medium">
              Progressão contínua: FLL (básico), FTC (médio) e FRC (avançado).
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight font-mono">
              100%
            </div>
            <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Foco no Humano
            </div>
            <p className="text-[11px] text-gray-500 font-medium">
              Gracious Professionalism e Coopertição em cada torneio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
