import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  FileText,
  PlaySquare,
  Sliders,
  Users,
  Wrench,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Equipe',
    category: 'ORGANIZAÇÃO',
    headline: 'Antes da máquina, existe um time.',
    description: 'Estudantes se dividem em áreas como mecânica, elétrica, software, estratégia, comunicação e negócios. Cada função precisa conversar com as outras para o projeto avançar.',
    deliverable: 'Papéis definidos, metas e cronograma de trabalho.',
    tags: ['Mecânica', 'Elétrica', 'Software', 'Mídia', 'Negócios'],
    accent: '#0066B3',
    icon: Users,
  },
  {
    number: '02',
    title: 'Estratégia',
    category: 'KICKOFF',
    headline: 'Entender o jogo antes de desenhar o robô.',
    description: 'O desafio anual é revelado e a equipe transforma regras, pontuação e restrições em requisitos claros. Aqui nasce a estratégia que define o que vale a pena construir.',
    deliverable: 'Matriz de prioridades e requisitos do robô.',
    tags: ['Regras', 'Pontuação', 'Risco', 'Estratégia'],
    accent: '#0EA5E9',
    icon: FileText,
  },
  {
    number: '03',
    title: 'CAD',
    category: 'PROJETO',
    headline: 'Testar no digital antes de fabricar.',
    description: 'O robô ganha forma em CAD. Dimensões, interferências, centro de massa e montagem são avaliados antes de cortar metal ou imprimir peças.',
    deliverable: 'Modelo 3D pronto para fabricação e montagem.',
    tags: ['CAD 3D', 'Simulação', 'Tolerâncias', 'Peso'],
    accent: '#8B5CF6',
    icon: Sliders,
  },
  {
    number: '04',
    title: 'Construção',
    category: 'FABRICAÇÃO',
    headline: 'Transformar projeto em máquina.',
    description: 'Peças são usinadas, impressas e montadas. Motores, sensores, controladores e cabeamento entram no robô até o conjunto ficar estruturalmente pronto para testes.',
    deliverable: 'Robô mecânico e elétrico funcional.',
    tags: ['CNC', 'Montagem', 'Elétrica', 'Segurança'],
    accent: '#F59E0B',
    icon: Wrench,
  },
  {
    number: '05',
    title: 'Código',
    category: 'SOFTWARE',
    headline: 'Dar inteligência ao que foi construído.',
    description: 'Programação conecta sensores, motores, visão computacional e trajetórias. O time testa comportamento autônomo e controle manual até o robô responder de forma previsível.',
    deliverable: 'Código testado, versionado e pronto para arena.',
    tags: ['Java', 'Python', 'Visão', 'Controle'],
    accent: '#10B981',
    icon: Code2,
  },
  {
    number: '06',
    title: 'Arena',
    category: 'COMPETIÇÃO',
    headline: 'Tudo converge para a partida.',
    description: 'O robô entra em alianças, enfrenta partidas oficiais e passa por inspeção. A equipe também apresenta engenharia, estratégia e impacto para jurados.',
    deliverable: 'Partidas, avaliação técnica e aprendizado real.',
    tags: ['Alianças', 'Pits', 'Jurados', 'Competição'],
    accent: '#ED1C24',
    icon: PlaySquare,
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0066B3]">
              <span className="w-2 h-2 rounded-full bg-[#0066B3]" />
              05 / CICLO DE ENGENHARIA
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.98] text-gray-950">
              DA IDEIA<br />
              ATÉ A <span className="text-[#ED1C24]">ARENA.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-base text-gray-600 leading-relaxed">
              Uma temporada FIRST segue um processo real de engenharia: organizar, analisar, projetar, fabricar, programar e competir.
            </p>
          </div>
        </div>

        <div className="relative mb-8">
          <div className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-gray-200" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`text-left group rounded-2xl p-4 transition-all border ${isActive ? 'bg-gray-950 border-gray-950 text-white shadow-lg' : 'bg-white border-gray-200 text-gray-950 hover:border-gray-300 hover:-translate-y-1'}`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between gap-3 mb-8 lg:mb-10">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-gray-400' : 'text-gray-400'}`}>{step.number}</span>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.accent}18`, color: step.accent }}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <div>
                    <div className={`text-[9px] font-mono font-bold uppercase tracking-widest mb-1.5 ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>{step.category}</div>
                    <div className="text-sm sm:text-base font-black uppercase tracking-tight">{step.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 bg-[#F6F7F9] border border-gray-200 rounded-[28px] p-7 sm:p-9 lg:p-10 min-h-[390px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="space-y-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] mb-3" style={{ color: current.accent }}>
                      ETAPA {current.number} / 06 • {current.category}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.035em] leading-[1.02] text-gray-950 max-w-3xl">
                      {current.headline}
                    </h3>
                  </div>

                  <div className="hidden sm:flex w-14 h-14 rounded-2xl items-center justify-center shrink-0" style={{ backgroundColor: `${current.accent}15`, color: current.accent }}>
                    <CurrentIcon className="w-7 h-7" />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {current.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wide text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 pt-5 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-gray-400">ENTREGA DA ETAPA</div>
                <p className="text-sm font-semibold text-gray-900 mt-1">{current.deliverable}</p>
              </div>

              <div className="text-xs font-mono font-bold text-gray-400 whitespace-nowrap">
                {String(activeStep + 1).padStart(2, '0')} / 06
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gray-950 rounded-[28px] p-7 sm:p-8 text-white flex flex-col justify-between min-h-[390px]">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#38BDF8] mb-4">PROCESSO ITERATIVO</div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                CONSTRUIR.<br />TESTAR.<br />ERRAR.<br /><span className="text-[#38BDF8]">MELHORAR.</span>
              </h3>
            </div>

            <div className="space-y-5">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: current.accent }}
                  initial={false}
                  animate={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                O fluxo não é perfeitamente linear. Equipes voltam etapas, refazem decisões e evoluem o projeto até a competição.
              </p>

              <button
                onClick={() => setActiveStep(prev => (prev + 1) % STEPS.length)}
                className="w-full inline-flex items-center justify-between px-4 py-3.5 bg-white text-gray-950 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Próxima etapa
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
