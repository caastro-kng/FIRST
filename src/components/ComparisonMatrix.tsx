import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPARISON_CRITERIA } from '../data/firstData';
import {
  Users,
  Users2,
  Layers,
  Scale,
  Maximize2,
  Cpu,
  Code2,
  Compass,
  LayoutGrid,
  Shield,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [highlightLeague, setHighlightLeague] = useState<'all' | 'fll' | 'ftc' | 'frc'>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobileActiveLeague, setMobileActiveLeague] = useState<'fll' | 'ftc' | 'frc'>('fll');
  const touchStartX = useRef<number | null>(null);

  const categories = [
    { label: 'TODAS', key: 'Todas' },
    { label: 'GERAL', key: 'Geral' },
    { label: 'ROBÓTICA & HARDWARE', key: 'Robótica & Hardware' },
    { label: 'SOFTWARE & AUTOMAÇÃO', key: 'Software & Autonomia' },
    { label: 'COMPETIÇÃO & ARENA', key: 'Competição & Arena' }
  ];

  // Map category icons
  const getCriteriaIcon = (id: string) => {
    switch (id) {
      case 'age': return <Users className="w-4 h-4 text-blue-600" />;
      case 'team_size': return <Users2 className="w-4 h-4 text-indigo-600" />;
      case 'platform': return <Layers className="w-4 h-4 text-amber-600" />;
      case 'weight': return <Scale className="w-4 h-4 text-emerald-600" />;
      case 'size': return <Maximize2 className="w-4 h-4 text-purple-600" />;
      case 'control_system': return <Cpu className="w-4 h-4 text-cyan-600" />;
      case 'programming_lang': return <Code2 className="w-4 h-4 text-red-600" />;
      case 'autonomous_mode': return <Compass className="w-4 h-4 text-orange-600" />;
      case 'field_size': return <LayoutGrid className="w-4 h-4 text-blue-500" />;
      case 'alliance_structure': return <Shield className="w-4 h-4 text-emerald-500" />;
      case 'innovation_project': return <Lightbulb className="w-4 h-4 text-amber-500" />;
      default: return <CheckCircle2 className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredCriteria = selectedCategory === 'Todas'
    ? COMPARISON_CRITERIA
    : COMPARISON_CRITERIA.filter(c => c.category === selectedCategory);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filteredCriteria.length / ITEMS_PER_PAGE) || 1;

  // Reset page when category changes
  const handleCategoryChange = (catKey: string) => {
    setSelectedCategory(catKey);
    setCurrentPage(0);
    setDirection(1);
  };

  const goToNextPage = () => {
    setDirection(1);
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setDirection(-1);
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = filteredCriteria.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // Keyboard navigation for desktop table
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      const el = document.getElementById('comparativo');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && totalPages > 1) {
        if (e.key === 'ArrowRight') goToNextPage();
        if (e.key === 'ArrowLeft') goToPrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  // Mobile swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next league
        if (mobileActiveLeague === 'fll') setMobileActiveLeague('ftc');
        else if (mobileActiveLeague === 'ftc') setMobileActiveLeague('frc');
      } else {
        // Swipe right -> prev league
        if (mobileActiveLeague === 'frc') setMobileActiveLeague('ftc');
        else if (mobileActiveLeague === 'ftc') setMobileActiveLeague('fll');
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="comparativo" className="py-24 lg:py-32 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LADO ESQUERDO (Aproximadamente 30-35%) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0066B3]">
                <span className="w-1.5 h-1.5 bg-[#0066B3] rounded-full" />
                <span>04 / COMPARATIVO TÉCNICO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase leading-[1.08]">
                QUAL É A DIFERENÇA <br />
                ENTRE AS <span className="text-[#0066B3]">CATEGORIAS?</span>
              </h2>

              <p className="text-base text-gray-600 font-normal leading-relaxed pt-1">
                Compare lado a lado os requisitos técnicos, materiais estruturais, linguagens de 
                programação e dimensões oficiais das três ligas FIRST.
              </p>
            </div>

            {/* Filtros de Categoria */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider block">
                FILTRAR CARACTERÍSTICAS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryChange(cat.key)}
                      id={`filter-cat-${cat.key.toLowerCase().replace(/[\s&]+/g, '-')}`}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-tight rounded-lg border transition-all ${
                        isActive
                          ? 'bg-[#111827] text-white border-[#111827] shadow-2xs'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Destaque de Liga */}
            <div className="space-y-2 pt-3 border-t border-gray-100 hidden sm:block">
              <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider block">
                DESTAQUE NA TABELA:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHighlightLeague('all')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    highlightLeague === 'all'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  TODAS
                </button>
                <button
                  onClick={() => setHighlightLeague('fll')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    highlightLeague === 'fll'
                      ? 'bg-amber-500 text-white border-amber-500 shadow-2xs'
                      : 'bg-amber-50/70 text-amber-900 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  FLL
                </button>
                <button
                  onClick={() => setHighlightLeague('ftc')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    highlightLeague === 'ftc'
                      ? 'bg-[#0066B3] text-white border-[#0066B3] shadow-2xs'
                      : 'bg-blue-50/70 text-blue-900 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  FTC
                </button>
                <button
                  onClick={() => setHighlightLeague('frc')}
                  className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    highlightLeague === 'frc'
                      ? 'bg-[#ED1C24] text-white border-[#ED1C24] shadow-2xs'
                      : 'bg-red-50/70 text-red-900 border-red-200 hover:bg-red-100'
                  }`}
                >
                  FRC
                </button>
              </div>
            </div>

          </div>

          {/* LADO DIREITO (Aproximadamente 65-70%) - QUADRO COMPARATIVO LIMPO */}
          <div className="lg:col-span-8">
            
            {/* Desktop Table View with Animated Pages */}
            <div className="hidden md:block bg-white border border-gray-200/90 rounded-2xl shadow-xs overflow-hidden">
              
              {/* Header Columns */}
              <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-50/90 text-xs font-mono font-bold uppercase tracking-wider">
                <div className="col-span-4 p-4 text-gray-700 border-r border-gray-200/70 flex items-center">
                  CARACTERÍSTICAS
                </div>
                
                {/* FLL Column Header */}
                <div
                  className={`col-span-2.5 sm:col-span-3 p-4 border-r border-gray-200/70 flex items-center justify-between transition-colors ${
                    highlightLeague === 'fll' ? 'bg-amber-50 text-amber-950 font-black' : 'text-amber-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>FLL</span>
                  </div>
                  <span className="text-[10px] text-amber-700/80 font-normal">9-16 anos</span>
                </div>

                {/* FTC Column Header */}
                <div
                  className={`col-span-2.5 sm:col-span-2.5 p-4 border-r border-gray-200/70 flex items-center justify-between transition-colors ${
                    highlightLeague === 'ftc' ? 'bg-blue-50 text-blue-950 font-black' : 'text-blue-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0066B3]" />
                    <span>FTC</span>
                  </div>
                  <span className="text-[10px] text-blue-700/80 font-normal">12-18 anos</span>
                </div>

                {/* FRC Column Header */}
                <div
                  className={`col-span-3 sm:col-span-2.5 p-4 flex items-center justify-between transition-colors ${
                    highlightLeague === 'frc' ? 'bg-red-50 text-red-950 font-black' : 'text-red-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                    <span>FRC</span>
                  </div>
                  <span className="text-[10px] text-red-700/80 font-normal">14-18 anos</span>
                </div>
              </div>

              {/* Animated Table Body Rows */}
              <div className="relative min-h-[380px] p-0 divide-y divide-gray-100">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${selectedCategory}-${currentPage}`}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 20 : -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -20 : 20,
                      transition: {
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="divide-y divide-gray-100"
                  >
                    {currentItems.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-12 hover:bg-gray-50/80 transition-colors items-stretch"
                      >
                        {/* Characteristic Label & Icon */}
                        <div className="col-span-4 p-4.5 bg-gray-50/40 border-r border-gray-200/70 flex flex-col justify-center space-y-1">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-white border border-gray-200 rounded-md shrink-0">
                              {getCriteriaIcon(item.id)}
                            </div>
                            <span className="text-sm font-bold text-gray-900 leading-snug">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider pl-8">
                            {item.category}
                          </span>
                        </div>

                        {/* FLL Cell */}
                        <div
                          className={`col-span-2.5 sm:col-span-3 p-4.5 text-sm text-gray-700 leading-relaxed border-r border-gray-200/70 flex items-center transition-colors ${
                            highlightLeague === 'fll' ? 'bg-amber-50/60 font-semibold text-amber-950' : ''
                          }`}
                        >
                          {item.fll}
                        </div>

                        {/* FTC Cell */}
                        <div
                          className={`col-span-2.5 sm:col-span-2.5 p-4.5 text-sm text-gray-700 leading-relaxed border-r border-gray-200/70 flex items-center transition-colors ${
                            highlightLeague === 'ftc' ? 'bg-blue-50/60 font-semibold text-blue-950' : ''
                          }`}
                        >
                          {item.ftc}
                        </div>

                        {/* FRC Cell */}
                        <div
                          className={`col-span-3 sm:col-span-2.5 p-4.5 text-sm text-gray-700 leading-relaxed flex items-center transition-colors ${
                            highlightLeague === 'frc' ? 'bg-red-50/60 font-semibold text-red-950' : ''
                          }`}
                        >
                          {item.frc}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Table Footer Navigation (Pagination Controls: ← ● ● ● ● →) */}
              <div className="p-4 bg-gray-50/70 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">
                  Mostrando {currentPage * ITEMS_PER_PAGE + 1}–{Math.min((currentPage + 1) * ITEMS_PER_PAGE, filteredCriteria.length)} de {filteredCriteria.length} características
                </span>

                {totalPages > 1 && (
                  <div className="flex items-center gap-3">
                    {/* Previous Page Arrow */}
                    <button
                      onClick={goToPrevPage}
                      id="compare-prev-page-btn"
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                      aria-label="Página anterior do comparativo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex items-center gap-1.5" role="tablist">
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setDirection(idx > currentPage ? 1 : -1);
                            setCurrentPage(idx);
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentPage === idx ? 'bg-[#0066B3] w-5' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Ir para página ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Next Page Arrow */}
                    <button
                      onClick={goToNextPage}
                      id="compare-next-page-btn"
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black flex items-center justify-center transition-all hover:bg-gray-50 active:scale-95 shadow-2xs"
                      aria-label="Próxima página do comparativo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Mobile View: League Selector + Swipeable Cards */}
            <div
              className="md:hidden space-y-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Mobile League Selector Pills */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setMobileActiveLeague('fll')}
                  className={`py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    mobileActiveLeague === 'fll'
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  FLL (9–16)
                </button>
                <button
                  onClick={() => setMobileActiveLeague('ftc')}
                  className={`py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    mobileActiveLeague === 'ftc'
                      ? 'bg-[#0066B3] text-white shadow-2xs'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  FTC (12–18)
                </button>
                <button
                  onClick={() => setMobileActiveLeague('frc')}
                  className={`py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    mobileActiveLeague === 'frc'
                      ? 'bg-[#ED1C24] text-white shadow-2xs'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  FRC (14–18)
                </button>
              </div>

              {/* Cards List for Selected League */}
              <div className="space-y-3">
                {filteredCriteria.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-gray-200 rounded-xl space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        {getCriteriaIcon(item.id)}
                        <span className="text-xs font-bold text-gray-900 uppercase">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-gray-500 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed font-medium ${
                        mobileActiveLeague === 'fll'
                          ? 'bg-amber-50 text-amber-950 border border-amber-200/70'
                          : mobileActiveLeague === 'ftc'
                          ? 'bg-blue-50 text-blue-950 border border-blue-200/70'
                          : 'bg-red-50 text-red-950 border border-red-200/70'
                      }`}
                    >
                      {item[mobileActiveLeague]}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-mono text-gray-400 text-center uppercase tracking-wider">
                ← Deslize lateralmente para trocar de liga →
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
