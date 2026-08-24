import React from 'react';
import { ArrowRight, ArrowUpRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenGlossary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gray-950 pt-24 lg:pt-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90"
          alt="Robótica competitiva em ambiente de arena"
          className="h-full w-full object-cover opacity-45"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/88 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid min-h-[640px] grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-7 pt-16 lg:col-span-8 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#ED1C24]" />
              FIRST • CIÊNCIA, ENGENHARIA E COMPETIÇÃO
            </div>

            <div className="space-y-4">
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                NÃO É SÓ <span className="text-[#58AEEA]">ROBÓTICA.</span><br />
                É <span className="text-[#ED1C24]">ARENA.</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Jovens projetam, constroem e programam máquinas para competir — enquanto aprendem liderança, estratégia, comunicação e engenharia de verdade.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#ligas"
                id="hero-cta-explore-leagues"
                className="btn-hover inline-flex items-center gap-2.5 rounded-lg bg-[#0066B3] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005291]"
              >
                Explorar as ligas
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#sobre"
                id="hero-cta-about-first"
                className="btn-hover inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/15"
              >
                Entender a FIRST
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenQuiz}
                id="hero-quiz-link"
                className="btn-hover inline-flex items-center gap-2 px-2 py-3 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white"
              >
                <PlayCircle className="h-4 w-4" />
                Qual liga combina comigo?
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:self-end lg:pb-8">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl lg:grid-cols-1">
              <div className="border-r border-white/10 p-4 lg:border-b lg:border-r-0 lg:p-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45">Entrada</div>
                <div className="mt-1 text-lg font-black text-[#FF8A3D]">FLL</div>
                <div className="mt-1 text-[11px] text-white/60">LEGO + descoberta</div>
              </div>
              <div className="border-r border-white/10 p-4 lg:border-b lg:border-r-0 lg:p-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45">Evolução</div>
                <div className="mt-1 text-lg font-black text-[#58AEEA]">FTC</div>
                <div className="mt-1 text-[11px] text-white/60">Metal + software</div>
              </div>
              <div className="p-4 lg:p-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45">Escala máxima</div>
                <div className="mt-1 text-lg font-black text-[#FF4D52]">FRC</div>
                <div className="mt-1 text-[11px] text-white/60">Indústria + arena</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] font-mono uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>DO PRIMEIRO SENSOR À ARENA DE GRANDE ESCALA</span>
          <span>ROLE PARA EXPLORAR ↓</span>
        </div>
      </div>
    </section>
  );
};
