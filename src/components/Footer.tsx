import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { FirstLogo, SenaiLogo } from './OfficialLogos';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#090B10] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3" aria-label="FIRST e SENAI">
              <div className="bg-white rounded-lg px-3 py-2 flex items-center">
                <FirstLogo className="h-7 sm:h-8 w-auto" />
              </div>
              <div className="h-7 w-px bg-white/10" aria-hidden="true" />
              <div className="bg-white rounded-lg px-3 py-2 flex items-center">
                <SenaiLogo className="h-6 sm:h-7 w-auto" />
              </div>
            </div>

            <div className="max-w-2xl space-y-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#65B9F0]">ENGENHARIA • EDUCAÇÃO • COMPETIÇÃO</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-[-0.04em] leading-[1.02]">
                O ROBÔ É O DESAFIO.<br />
                <span className="text-[#65B9F0]">AS PESSOAS SÃO O RESULTADO.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                Um guia educacional sobre as ligas FIRST, a formação dos estudantes e o ecossistema de robótica conectado ao SESI e SENAI no Brasil.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <nav aria-label="Explorar o guia">
              <h3 className="text-[11px] font-mono font-bold text-white uppercase tracking-widest mb-4">Explorar</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#sobre" className="hover:text-white transition-colors">O que é FIRST</a></li>
                <li><a href="#ligas" className="hover:text-white transition-colors">Ligas</a></li>
                <li><a href="#comparativo" className="hover:text-white transition-colors">Comparativo</a></li>
                <li><a href="#jornada" className="hover:text-white transition-colors">Jornada</a></li>
              </ul>
            </nav>

            <nav aria-label="Ecossistema FIRST">
              <h3 className="text-[11px] font-mono font-bold text-white uppercase tracking-widest mb-4">Ecossistema</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#sesi-senai" className="hover:text-white transition-colors">SESI & SENAI</a></li>
                <li><a href="#valores" className="hover:text-white transition-colors">Cultura FIRST</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></li>
                <li><a href="#temporada" className="hover:text-white transition-colors">Temporada</a></li>
              </ul>
            </nav>

            <nav className="col-span-2 sm:col-span-1" aria-label="Links oficiais">
              <h3 className="text-[11px] font-mono font-bold text-white uppercase tracking-widest mb-4">Oficial</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.firstinspires.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    FIRST Inspires <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a href="https://sesi.portaldaindustria.com.br/para-voce/robotica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    SESI Robótica <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a href="https://docs.wpilib.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    WPILib <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-9">
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-gray-500 font-mono max-w-4xl">
              Material com finalidade acadêmica e pedagógica. FIRST®, FLL®, FTC®, FRC®, Gracious Professionalism® e Coopertition® são marcas registradas de For Inspiration and Recognition of Science and Technology.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all"
              aria-label="Voltar ao início da página"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-[10px] font-mono uppercase tracking-widest text-gray-600">
          <span>FIRST • SESI • SENAI • BRASIL</span>
          <span>GUIA EDUCACIONAL DE ROBÓTICA</span>
        </div>
      </div>
    </footer>
  );
};
