import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BRAZIL_ECOSYSTEM_DATA } from '../data/firstData';
import { School, Factory, ArrowRight, CheckCircle2, Users, MapPinned, Trophy, ArrowUpRight } from 'lucide-react';

const BRAZIL_STATS = [
  { value: '600', label: 'competidores', detail: 'Festival SESI 2026', icon: Users },
  { value: '48', label: 'equipes', detail: 'Festival SESI de Educação 2026', icon: Trophy },
  { value: '19', label: 'UFs representadas', detail: 'alcance nacional', icon: MapPinned },
];

const DF_STORIES = [
  {
    eyebrow: 'BRASÍLIA → OFICINA',
    title: 'ROBOT’S DISTRICT • FRC 9484',
    description: 'A equipe do SESI/SENAI-DF em preparação técnica, trabalhando diretamente no robô e na integração dos sistemas.',
    image: 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_2.jpg',
    alt: 'Integrantes da Robot’s District do SESI-DF trabalhando no robô da FRC 9484 em Brasília.',
    href: 'https://www.sistemafibra.org.br/sesi/imprensa/noticias/2122-com-a-robot-s-district-sesi-df-participa-pela-primeira-vez-da-first-robotics-competition',
  },
  {
    eyebrow: 'BRASÍLIA → HOUSTON',
    title: 'ROBOT’S DISTRICT NO FIRST CHAMPIONSHIP 2026',
    description: 'A equipe do Distrito Federal chegou ao mundial pelo segundo ano consecutivo, representando SESI e SENAI-DF em Houston.',
    image: 'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/04-abril/29-04-2026_Equipe_Robots_District_Foto_Dayane_dos_Santos_Sistema_Fibra.jpg',
    alt: 'Equipe Robot’s District reunida em Houston durante o FIRST Championship 2026.',
    href: 'https://www.sistemafibra.org.br/senai/40-noticias/destaques/1833-houston-chegamos-sesi-e-senai-df-competem-no-first-championship',
  },
  {
    eyebrow: 'BRASÍLIA → CONQUISTA',
    title: 'FEDERAL FORCE • ROOKIE ALL-STAR 2025',
    description: 'No FIRST Championship 2025, a Federal Force conquistou o Rookie All-Star Award na divisão Arquimedes.',
    image: 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/interna-Foto-SamiraPadua-SistemaFibra1.jpg',
    alt: 'Integrantes da Federal Force comemorando conquista no FIRST Championship 2025.',
    href: 'https://www.sistemafibra.org.br/sesi/institucional/imprensa/noticias/2217-equipe-do-df-e-premiada-no-first-championship-2025',
  },
];

export const FirstBrazilSesiSenai: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="sesi-senai" className="relative overflow-hidden border-b border-gray-200 bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066B3]" />
              {BRAZIL_ECOSYSTEM_DATA.eyebrow}
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-6xl">
              DA SALA DE AULA<br />
              <span className="text-[#0066B3]">PARA A ARENA.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{BRAZIL_ECOSYSTEM_DATA.intro}</p>
            <a
              href="https://sesi.portaldaindustria.com.br/para-voce/robotica/first-robotics-competition"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-gray-700 transition-colors hover:text-[#0066B3]"
              aria-label="Ver FIRST Robotics Competition no site do SESI (abre em nova aba)"
            >
              Ver operação no Brasil
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
          className="mb-6 overflow-hidden rounded-3xl bg-gray-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300">ECOSSISTEMA BRASILEIRO</div>
              <h3 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                EDUCAÇÃO, INDÚSTRIA E COMPETIÇÃO NO MESMO CAMINHO.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                Escolas, laboratórios, mentores e torneios conectados para transformar aprendizado técnico em experiência prática.
              </p>
            </div>
            <div className="grid grid-cols-2 border-t border-white/10 lg:col-span-5 lg:border-l lg:border-t-0">
              <div className="group border-r border-white/10 p-7 transition-colors hover:bg-white/[0.04]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">SESI</div>
                <div className="mt-2 text-xl font-black text-blue-300">EDUCAÇÃO</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">Equipes, cultura STEAM e competição.</p>
              </div>
              <div className="group p-7 transition-colors hover:bg-white/[0.04]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">SENAI</div>
                <div className="mt-2 text-xl font-black text-amber-300">INDÚSTRIA</div>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">Infraestrutura e engenharia aplicada.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
            <span>DO DISTRITO FEDERAL PARA O MUNDO</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {DF_STORIES.map((story, index) => (
              <motion.a
                key={story.title}
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`${index === 0 ? 'lg:col-span-5' : 'lg:col-span-7 xl:col-span-7'} group relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 shadow-sm ${index === 2 ? 'lg:col-start-6' : ''}`}
                aria-label={`${story.title} — abrir matéria do Sistema Fibra em nova aba`}
              >
                <img
                  src={story.image}
                  alt={story.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-blue-300">{story.eyebrow}</div>
                  <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">{story.title}</h3>
                  <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm">{story.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-white/80">
                    Ver história <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {BRAZIL_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 transition-shadow hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-black tracking-[-0.04em] text-gray-950">{stat.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-gray-800">{stat.label}</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-2 text-[#0066B3] transition-transform duration-300 group-hover:scale-105"><Icon className="h-4 w-4" /></div>
                </div>
                <div className="mt-4 text-[10px] font-mono uppercase tracking-wider text-gray-400">{stat.detail}</div>
              </motion.article>
            );
          })}
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
            <span>O CAMINHO NACIONAL</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            {BRAZIL_ECOSYSTEM_DATA.flowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : idx * 0.04 }}
                className="group rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#0066B3]">{step.number}</span>
                  {idx < BRAZIL_ECOSYSTEM_DATA.flowSteps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-0.5 md:block" />}
                </div>
                <h3 className="mt-4 text-sm font-black uppercase tracking-tight text-gray-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} className="rounded-3xl border border-blue-100 bg-blue-50/50 p-8 transition-shadow hover:shadow-[0_18px_42px_rgba(0,102,179,0.08)] sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-[#0066B3] p-3 text-white"><School className="h-6 w-6" /></div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900">{BRAZIL_ECOSYSTEM_DATA.sesiRole.badge}</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-gray-950">{BRAZIL_ECOSYSTEM_DATA.sesiRole.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{BRAZIL_ECOSYSTEM_DATA.sesiRole.description}</p>
            <div className="mt-6 space-y-3">
              {BRAZIL_ECOSYSTEM_DATA.sesiRole.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0066B3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 transition-shadow hover:shadow-[0_18px_42px_rgba(217,119,6,0.08)] sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-[#D97706] p-3 text-white"><Factory className="h-6 w-6" /></div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900">{BRAZIL_ECOSYSTEM_DATA.senaiRole.badge}</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-gray-950">{BRAZIL_ECOSYSTEM_DATA.senaiRole.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{BRAZIL_ECOSYSTEM_DATA.senaiRole.description}</p>
            <div className="mt-6 space-y-3">
              {BRAZIL_ECOSYSTEM_DATA.senaiRole.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-5 flex flex-col gap-1 text-[10px] font-mono uppercase tracking-wider text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>Dados de participação: Festival SESI de Educação 2026.</span>
          <span>Fotos e histórias do DF: Sistema Fibra / SESI-DF / SENAI-DF.</span>
        </div>
      </div>
    </section>
  );
};
