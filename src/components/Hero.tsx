import React from 'react';
import { ArrowRight, ArrowUpRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const HERO_IMAGE_URL = '/images/site/hero-championship.jpg';
const HERO_IMAGE_FALLBACK = 'https://community.firstinspires.org/hubfs/first-blog_community_cmpupdates2-024.jpg';

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gray-950 pt-[66px] sm:pt-[76px] lg:pt-[76px]">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Arena lotada durante o FIRST Championship, com campos de competição, equipes e público"
          className="h-full w-full object-cover object-center opacity-50"
          fetchPriority="high"
          decoding="async"
          onError={(event) => {
            const image = event.currentTarget;
            if (image.dataset.fallbackApplied === 'true') return;
            image.dataset.fallbackApplied = 'true';
            image.src = HERO_IMAGE_FALLBACK;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/88 to-gray-950/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
        <div className="grid min-h-[560px] grid-cols-1 items-end gap-8 sm:min-h-[640px] sm:gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 pt-10 sm:space-y-7 sm:pt-16 lg:col-span-8 lg:pt-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#ED1C24]" />
              <span className="truncate sm:whitespace-normal">FIRST • CIÊNCIA, ENGENHARIA E COMPETIÇÃO</span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-5xl text-[clamp(2.7rem,13vw,3.5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
                NÃO É SÓ <span className="text-[#58AEEA]">ROBÓTICA.</span><br />
                É <span className="text-[#ED1C24]">ARENA.</span>
              </h1>

              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-lg">
                Jovens projetam, constroem e programam máquinas para competir enquanto desenvolvem liderança, estratégia, comunicação e engenharia na prática.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              <a
                href="#ligas"
                id="hero-cta-explore-leagues"
                className="btn-hover inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#0066B3] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005291] sm:w-auto sm:rounded-lg sm:px-6"
              >
                Explorar as ligas
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#sobre"
                id="hero-cta-about-first"
                className="btn-hover inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/15 sm:w-auto sm:rounded-lg"
              >
                Entender a FIRST
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenQuiz}
                id="hero-quiz-link"
                className="btn-hover inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-white sm:w-auto sm:justify-start sm:rounded-lg sm:px-2"
              >
                <PlayCircle className="h-4 w-4" />
                Qual liga combina comigo?
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:self-end lg:pb-8">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl lg:grid-cols-1">
              <div className="border-r border-white/10 p-3.5 sm:p-4 lg:border-b lg:border-r-0 lg:p-5">
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/45">Entrada</div>
                <div className="mt-1 text-base sm:text-lg font-black text-[#FF8A3D]">FLL</div>
                <div className="mt-1 hidden text-[11px] text-white/60 sm:block">LEGO + descoberta</div>
              </div>
              <div className="border-r border-white/10 p-3.5 sm:p-4 lg:border-b lg:border-r-0 lg:p-5">
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/45">Evolução</div>
                <div className="mt-1 text-base sm:text-lg font-black text-[#58AEEA]">FTC</div>
                <div className="mt-1 hidden text-[11px] text-white/60 sm:block">Metal + software</div>
              </div>
              <div className="p-3.5 sm:p-4 lg:p-5">
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/45">Escala máxima</div>
                <div className="mt-1 text-base sm:text-lg font-black text-[#FF4D52]">FRC</div>
                <div className="mt-1 hidden text-[11px] text-white/60 sm:block">Indústria + arena</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.13em] sm:tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>DO PRIMEIRO SENSOR À ARENA DE GRANDE ESCALA</span>
          <span>ROLE PARA EXPLORAR ↓</span>
        </div>
      </div>
    </section>
  );
};
