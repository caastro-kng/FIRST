import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/firstData';
import { BookOpen, Search, X, Tag } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  if (!isOpen) return null;

  const categories = ['Todas', 'Arena', 'Hardware', 'Software', 'Estratégia', 'Cultura FIRST'];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-xs">
      <div className="bg-white max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-300 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200 flex items-center justify-between shrink-0 bg-gray-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white border border-gray-300 text-[#0066B3]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
                TERMINOLOGIA OFICIAL
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Glossário Técnico FIRST</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 sm:p-6 border-b border-gray-200 space-y-3 shrink-0 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar termo ou conceito (ex: Swerve, Autônomo, AprilTag)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 text-xs font-medium focus:outline-hidden focus:border-[#0066B3] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider transition-colors border ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 divide-y divide-gray-200">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-4 space-y-2' : 'space-y-2'}>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-black text-gray-950 uppercase tracking-tight">
                    {item.term}
                  </h4>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-gray-100 text-gray-600 border border-gray-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {item.definition}
                </p>
                <div className="p-2.5 bg-gray-50 border border-gray-200 text-xs text-gray-700 font-mono">
                  <strong className="text-[#0066B3] uppercase">Exemplo Prático: </strong>
                  <span>{item.example}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 text-xs font-mono">
              Nenhum termo encontrado para a busca "{searchTerm}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between shrink-0 text-xs font-mono text-gray-500">
          <span>{filteredTerms.length} TERMOS CATALOGADOS</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Fechar Glossário
          </button>
        </div>

      </div>
    </div>
  );
};
