import React, { useEffect, useId, useMemo, useState } from 'react';
import { QUIZ_QUESTIONS, LEAGUES_DATA } from '../data/firstData';
import { LeagueId } from '../types/first';
import { Compass, RotateCcw, ArrowRight, Sparkles, X, BarChart3 } from 'lucide-react';

interface LeagueFinderQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEAGUE_META: Record<LeagueId, { label: string; accent: string; soft: string }> = {
  fll: { label: 'FLL', accent: '#FF5F00', soft: '#FFF4E8' },
  ftc: { label: 'FTC', accent: '#0066B3', soft: '#EAF5FF' },
  frc: { label: 'FRC', accent: '#ED1C24', soft: '#FFF0F1' },
};

export const LeagueFinderQuiz: React.FC<LeagueFinderQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ fll: 0, ftc: 0, frc: 0 });
  const [result, setResult] = useState<LeagueId | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const scoreBreakdown = useMemo(() => {
    const total = scores.fll + scores.ftc + scores.frc;
    return (['fll', 'ftc', 'frc'] as LeagueId[]).map((league) => ({
      league,
      score: scores[league],
      percent: total > 0 ? Math.round((scores[league] / total) * 100) : 0,
    }));
  }, [scores]);

  if (!isOpen) return null;

  const handleSelectOption = (points: { fll: number; ftc: number; frc: number }) => {
    const newScores = {
      fll: scores.fll + points.fll,
      ftc: scores.ftc + points.ftc,
      frc: scores.frc + points.frc,
    };
    setScores(newScores);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      let winner: LeagueId = 'ftc';
      if (newScores.fll >= newScores.ftc && newScores.fll >= newScores.frc) winner = 'fll';
      else if (newScores.frc >= newScores.fll && newScores.frc >= newScores.ftc) winner = 'frc';
      setResult(winner);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScores({ fll: 0, ftc: 0, frc: 0 });
    setResult(null);
  };

  const recommendedLeague = result ? LEAGUES_DATA[result] : null;
  const recommendedMeta = result ? LEAGUE_META[result] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-xs"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 relative"
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <Compass className="w-4 h-4 text-[#ED1C24]" />
            <span>DIAGNÓSTICO EDUCACIONAL INTERATIVO</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Fechar diagnóstico de ligas"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!result ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                PERGUNTA {currentQuestion + 1} DE {QUIZ_QUESTIONS.length}
              </div>
              <h2 id={titleId} className="text-lg sm:text-xl font-black text-gray-950 uppercase tracking-tight">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-2.5">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSelectOption(option.points)}
                  className="w-full text-left p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-[#0066B3] hover:bg-blue-50/40 transition-all text-xs sm:text-sm font-medium text-gray-800 flex items-start gap-3 group"
                >
                  <span className="w-5 h-5 rounded-md border border-gray-300 group-hover:border-[#0066B3] group-hover:bg-[#0066B3] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono font-bold transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{option.label}</span>
                </button>
              ))}
            </div>

            <div
              className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"
              role="progressbar"
              aria-label="Progresso do diagnóstico"
              aria-valuemin={1}
              aria-valuemax={QUIZ_QUESTIONS.length}
              aria-valuenow={currentQuestion + 1}
            >
              <div
                className="h-full bg-[#0066B3] rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          recommendedLeague && recommendedMeta && (
            <div className="space-y-5 text-center sm:text-left" aria-live="polite">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border"
                style={{ backgroundColor: recommendedMeta.soft, borderColor: `${recommendedMeta.accent}30`, color: recommendedMeta.accent }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>CATEGORIA MAIS COMPATÍVEL</span>
              </div>

              <div>
                <h2 id={titleId} className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
                  {recommendedLeague.name} ({recommendedLeague.acronym})
                </h2>
                <p className="text-xs font-mono font-bold uppercase mt-1" style={{ color: recommendedMeta.accent }}>{recommendedLeague.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pelas respostas, a <strong>{recommendedLeague.acronym}</strong> aparece como a categoria mais compatível com seu perfil atual. O resultado é orientativo: idade, disponibilidade de equipe, estrutura e objetivos locais também influenciam a escolha.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left">
                <div className="flex items-center gap-2 mb-4 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                  <BarChart3 className="w-4 h-4" />
                  Afinidade entre as ligas
                </div>
                <div className="space-y-3">
                  {scoreBreakdown.map(({ league, percent }) => {
                    const meta = LEAGUE_META[league];
                    return (
                      <div key={league}>
                        <div className="mb-1.5 flex items-center justify-between gap-3 text-[10px] font-mono font-bold uppercase">
                          <span style={{ color: meta.accent }}>{meta.label}</span>
                          <span className="text-gray-500">{percent}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent}%`, backgroundColor: meta.accent }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-xl text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between gap-4"><span className="text-gray-500 uppercase">Idade sugerida:</span><span className="font-bold text-gray-900 text-right">{recommendedLeague.targetAge}</span></div>
                <div className="flex justify-between gap-4"><span className="text-gray-500 uppercase">Tamanho da equipe:</span><span className="font-bold text-gray-900 text-right">{recommendedLeague.teamSize}</span></div>
                <div className="flex justify-between gap-4"><span className="text-gray-500 uppercase">Linguagem chave:</span><span className="font-bold text-gray-900 text-right">{recommendedLeague.programming.join(' ou ')}</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <a
                  href="#ligas"
                  onClick={onClose}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-mono font-bold uppercase tracking-wider text-white rounded-xl transition-all shadow-2xs"
                  style={{ backgroundColor: recommendedMeta.accent }}
                >
                  <span>Explorar {recommendedLeague.acronym} nas ligas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-5 text-xs font-mono font-bold uppercase tracking-wider text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl border border-gray-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer</span>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
