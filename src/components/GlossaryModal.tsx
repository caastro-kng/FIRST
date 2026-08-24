import React, { useEffect, useId, useMemo, useState } from 'react';
import { GLOSSARY_TERMS } from '../data/firstData';
import { BookOpen, Search, X, RotateCcw } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSearch?: string;
}

const CATEGORIES = ['Todas', 'Arena', 'Hardware', 'Software', 'Estratégia', 'Cultura FIRST'];

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose, initialSearch = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const titleId = useId();
  const searchId = useId();

  useEffect(() => {
    if (!isOpen) return;

    setSearchTerm(initialSearch);
    setActiveCategory('Todas');

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
  }, [isOpen, onClose, initialSearch]);

  const categoryCounts = useMemo(() => {
    return CATEGORIES.reduce<Record<string, number>>((acc, category) => {
      acc[category] = category === 'Todas' ? GLOSSARY_TERMS.length : GLOSSARY_TERMS.filter((item) => item.category === category).length;
      return acc;
    }, {});
  }, []);

  if (!isOpen) return null;

  const query = searchTerm.trim().toLowerCase();
  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const searchable = `${item.term} ${item.definition} ${item.example} ${item.category}`.toLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('Todas');
  };

  const hasFilters = searchTerm.length > 0 || activeCategory !== 'Todas';

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
        className="bg-white max-w-3xl w-full max-h-[85vh] flex flex-col rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        <div className="p-5 sm:p-6 border-b border-gray-200 flex items-center justify-between shrink-0 bg-gray-50/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-white border border-gray-200 rounded-xl text-[#0066B3] shadow-2xs shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">TERMINOLOGIA FIRST</div>
              <h2 id={titleId} className="text-lg sm:text-xl font-black text-gray-950 uppercase tracking-tight">Glossário Técnico FIRST</h2>
            </div>
          </div>
          <button type="button" onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors shrink-0" aria-label="Fechar glossário técnico">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-6 border-b border-gray-200 space-y-3 shrink-0 bg-white">
          <div className="relative">
            <label htmlFor={searchId} className="sr-only">Buscar termo no glossário</label>
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id={searchId}
              type="search"
              placeholder="Buscar termo, conceito ou exemplo (ex: Swerve, AprilTag, aliança)..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:border-[#0066B3] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Filtrar termos por categoria">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors border ${activeCategory === category ? 'bg-gray-950 text-white border-gray-950' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'}`}
              >
                {category} <span className={activeCategory === category ? 'text-white/50' : 'text-gray-400'}>{categoryCounts[category]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 divide-y divide-gray-100" aria-live="polite">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <article key={`${item.term}-${index}`} className={index > 0 ? 'pt-4 space-y-2' : 'space-y-2'}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-black text-gray-950 uppercase tracking-tight">{item.term}</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md uppercase tracking-wider shrink-0">{item.category}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item.definition}</p>
                <div className="p-3 bg-gray-50 border border-gray-200/80 rounded-xl text-xs text-gray-700 font-mono">
                  <strong className="text-[#0066B3] uppercase">Exemplo prático: </strong><span>{item.example}</span>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-xs font-mono mb-4">Nenhum termo encontrado para “{searchTerm}”.</div>
              <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100">
                <RotateCcw className="w-3.5 h-3.5" />Limpar filtros
              </button>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50/80 flex items-center justify-between gap-4 shrink-0 text-xs font-mono text-gray-500">
          <span>{filteredTerms.length} DE {GLOSSARY_TERMS.length} TERMOS</span>
          <div className="flex items-center gap-2">
            {hasFilters && (
              <button type="button" onClick={clearFilters} className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-600 hover:text-gray-950 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />Limpar
              </button>
            )}
            <button type="button" onClick={onClose} className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors shadow-2xs">Fechar glossário</button>
          </div>
        </div>
      </div>
    </div>
  );
};
