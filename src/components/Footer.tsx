import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { FirstLogo, SenaiLogo } from './OfficialLogos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 w-fit">
              <div className="bg-white p-1.5 rounded-md flex items-center">
                <FirstLogo className="h-6 w-auto" />
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="bg-white p-1.5 rounded-md flex items-center">
                <SenaiLogo className="h-5 w-auto" />
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-normal">
              Guia educacional projetado para apresentar a engenharia, os valores éticos e a 
              jornada formativa dos estudantes dentro do ecossistema FIRST e SENAI no Brasil.
            </p>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-[11px] text-gray-400 leading-relaxed font-mono">
              <strong className="text-gray-200 uppercase block mb-1">Aviso Institucional:</strong>
              Finalidade acadêmica e pedagógica. FIRST®, FLL®, FTC®, FRC®, Gracious Professionalism® e Coopertition® são marcas registradas de For Inspiration and Recognition of Science and Technology.
            </div>
          </div>

          {/* Col 3: Categorias */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#ligas" className="hover:text-white transition-colors">
                  FIRST LEGO League (FLL)
                </a>
              </li>
              <li>
                <a href="#ligas" className="hover:text-white transition-colors">
                  FIRST Tech Challenge (FTC)
                </a>
              </li>
              <li>
                <a href="#ligas" className="hover:text-white transition-colors">
                  FIRST Robotics Comp. (FRC)
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-white transition-colors">
                  Matriz Comparativa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Brasil & Ecossistema */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Brasil & Metodologia
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sesi-senai" className="hover:text-white transition-colors">
                  SESI & SENAI no Brasil
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-white transition-colors">
                  Multidisciplinaridade de Equipe
                </a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-white transition-colors">
                  A Jornada do Estudante
                </a>
              </li>
              <li>
                <a href="#temporada" className="hover:text-white transition-colors">
                  Ciclo da Temporada
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Fontes Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Fontes Oficiais
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.firstinspires.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group"
                >
                  <span>FIRST Inspires</span>
                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.sistemafibra.org.br/senai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group"
                >
                  <span>SENAI Nacional</span>
                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.wpilib.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group"
                >
                  <span>Documentação WPILib</span>
                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 font-mono text-[11px]">
          <div>
            FIRST & SENAI BRASIL • TEMPORADA 2024 / 2025
          </div>

          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg border border-white/10 transition-colors uppercase font-bold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

