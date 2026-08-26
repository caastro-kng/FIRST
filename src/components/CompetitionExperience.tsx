import React from 'react';
import { COMPETITION_AREAS } from '../data/firstData';
import { Wrench, Code, LineChart, Palette, Coins, Sparkles, Users, Award } from 'lucide-react';

// Image audit: these two photos are exclusive to this section so the site does not
// reuse the same arena/pit imagery across Hero, Season Timeline and Competition Experience.
const ARENA_IMAGE = 'https://www.firstinspires.org/hs-fs/hubfs/Screenshot%202025-09-23%20094958.png?height=299&name=Screenshot+2025-09-23+094958.png&width=630';
const ARENA_FALLBACK = 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/16-04-FRC-Samira-Padua-Sistema-Fibra-1.jpg';
const PITS_IMAGE = 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/16-04-FRC-Samira-Padua-Sistema-Fibra-2.jpg';
const PITS_FALLBACK = 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_corpo.jpg';

export const CompetitionExperience: React.FC = () => {
  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="h-5 w-5" />;
      case 'Code': return <Code className="h-5 w-5" />;
      case 'LineChart': return <LineChart className="h-5 w-5" />;
      case 'Palette': return <Palette className="h-5 w-5" />;
      case 'Coins': return <Coins className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  const useFallback = (event: React.SyntheticEvent<HTMLImageElement>, fallback: string) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === 'true') return;
    image.dataset.fallbackApplied = 'true';
    image.src = fallback;
  };

  return (
    <section id="experiencia" className="relative overflow-hidden border-b border-gray-900 bg-gray-950 py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-20 bg-grid-subtle" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24]" />
              10 / POR DENTRO DE UMA COMPETIÇÃO
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              MUITO ALÉM<br />
              <span className="text-[#58AEEA]">DA PARTIDA.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base lg:col-span-4">
            Enquanto o robô aparece na arena, dezenas de decisões acontecem nos bastidores: projeto, código, estratégia, comunicação, gestão e colaboração.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:col-span-8 lg:min-h-[390px]">
            <img
              src={ARENA_IMAGE}
              alt="Grande ambiente do FIRST Championship com arena e público acompanhando as competições"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onError={(event) => useFallback(event, ARENA_FALLBACK)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-300">ARENA • ESTRATÉGIA • PRESSÃO</div>
              <div className="mt-2 max-w-xl text-xl font-black uppercase tracking-tight sm:text-2xl">A partida é o momento visível de semanas de engenharia.</div>
            </figcaption>
          </figure>

          <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:col-span-4 lg:min-h-[390px]">
            <img
              src={PITS_IMAGE}
              alt="Integrantes de equipes FRC trabalhando e ajustando robôs em uma área de pits antes das partidas"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onError={(event) => useFallback(event, PITS_FALLBACK)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/25 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-300">PITS • MANUTENÇÃO • COLABORAÇÃO</div>
              <div className="mt-2 text-lg font-black uppercase tracking-tight">Onde o robô volta para a arena.</div>
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMPETITION_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-blue-300">
                  {getAreaIcon(area.icon)}
                </div>
                <span className="text-[10px] font-mono text-white/25">0{idx + 1}</span>
              </div>
              <h3 className="mt-5 text-base font-black uppercase tracking-tight">{area.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="border-b border-white/10 p-7 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300">
                <Users className="h-3.5 w-3.5" /> NOS PITS
              </div>
              <h3 className="mt-5 max-w-3xl text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                A CORRIDA PARA COLOCAR O ROBÔ DE VOLTA NA ARENA.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400">
                Entre uma partida e outra, equipes reparam mecanismos, revisam código, analisam adversários e ajudam até rivais diretos. É nesse ambiente que o Gracious Professionalism® deixa de ser conceito e vira comportamento.
              </p>
            </div>

            <div className="p-7 sm:p-9 lg:col-span-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                <Award className="h-4 w-4" /> O QUE CONTA
              </div>
              <div className="mt-5 space-y-4">
                {[
                  'Decisões técnicas bem defendidas',
                  'Protagonismo real dos estudantes',
                  'Impacto além da competição',
                  'Capacidade de trabalhar em equipe',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
