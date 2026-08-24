import React, { useState } from 'react';
import { QUIZ_QUESTIONS, LEAGUES_DATA } from '../data/firstData';
import { LeagueId } from '../types/first';
import { Compass, CheckCircle2, RotateCcw, ArrowRight, Sparkles, X } from 'lucide-react';

interface LeagueFinderQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeagueFinderQuiz: React.FC<LeagueFinderQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ fll: 0, ftc: 0, frc: 0 });
  const [result, setResult] = useState<LeagueId | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (points: { fll: number; ftc: number; frc: number }) => {
    const newScores = {
      fll: scores.fll + points.fll,
      ftc: scores.ftc + points.ftc,
      frc: scores.frc + points.frc
    };
    setScores(newScores);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate winner
      let winner: LeagueId = 'ftc';
      if (newScores.fll >= newScores.ftc && newScores.fll >= newScores.frc) {
        winner = 'fll';
      } else if (newScores.frc >= newScores.fll && newScores.frc >= newScores.ftc) {
        winner = 'frc';
      }
      setResult(winner);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScores({ fll: 0, ftc: 0, frc: 0 });
    setResult(null);
  };

  const recommendedLeague = result ? LEAGUES_DATA[result] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-xs">
      <div className="bg-white max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 relative overflow-hidden">
        
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
            <Compass className="w-4 h-4 text-[#ED1C24]" />
            <span>DIAGNÓSTICO EDUCACIONAL INTERATIVO</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!result ? (
          /* Question Mode */
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                PERGUNTA {currentQuestion + 1} DE {QUIZ_QUESTIONS.length}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-950 uppercase tracking-tight">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h3>
            </div>

            {/* Options list */}
            <div className="space-y-2.5">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                <button
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

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0066B3] rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          /* Result Mode */
          recommendedLeague && (
            <div className="space-y-5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>CATEGORIA RECOMENDADA</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
                  {recommendedLeague.name} ({recommendedLeague.acronym})
                </h3>
                <p className="text-xs font-mono font-bold text-[#0066B3] uppercase mt-1">
                  {recommendedLeague.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Com base no perfil informado de faixa etária, recursos laboratoriais e foco de aprendizado, a <strong>{recommendedLeague.acronym}</strong> é o ponto de partida ideal para engajar seus alunos com o máximo de retorno formativo.
              </p>

              <div className="p-4 bg-gray-50 border border-gray-200/80 rounded-xl text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Idade sugerida:</span>
                  <span className="font-bold text-gray-900">{recommendedLeague.targetAge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Tamanho da equipe:</span>
                  <span className="font-bold text-gray-900">{recommendedLeague.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Linguagem chave:</span>
                  <span className="font-bold text-gray-900">{recommendedLeague.programming.join(' ou ')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <a
                  href={`#${recommendedLeague.id}`}
                  onClick={onClose}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#0066B3] hover:bg-[#005291] rounded-xl transition-all shadow-2xs"
                >
                  <span>Ver Detalhes da {recommendedLeague.acronym}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
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
