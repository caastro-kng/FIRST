import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Menu, X } from 'lucide-react';
import { FirstLogo, SenaiLogo } from './OfficialLogos';

interface HeaderProps {
  onOpenGlossary?: () => void;
  onOpenQuiz?: () => void;
}

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Ligas', href: '#ligas', id: 'ligas' },
  { label: 'Jornada', href: '#jornada', id: 'jornada' },
  { label: 'Temporada', href: '#temporada', id: 'temporada' },
  { label: 'Brasil', href: '#sesi-senai', id: 'sesi-senai' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenGlossary }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 16);

      const header = document.getElementById('main-header');
      const headerHeight = header?.getBoundingClientRect().height ?? 68;
      const probeY = headerHeight + 24;
      let current = '';

      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = link.id;
          break;
        }
      }

      // Between mapped sections, keep the nearest previous navigation item active.
      if (!current) {
        const position = window.scrollY + probeY;
        for (const link of NAV_LINKS) {
          const element = document.getElementById(link.id);
          if (element && position >= element.offsetTop) current = link.id;
        }
      }

      setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('resize', closeOnResize);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.05)]'
          : 'bg-white/95 border-b border-gray-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[62px] sm:h-[68px]' : 'h-[66px] sm:h-[76px]'}`}>
          <a
            href="#inicio"
            onClick={() => setActiveSection('')}
            className="flex min-w-0 items-center gap-2.5 sm:gap-4 shrink group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35 focus-visible:ring-offset-4 rounded-lg"
            aria-label="FIRST e SENAI — início"
          >
            <FirstLogo className="h-6.5 sm:h-8 w-auto max-w-[108px] sm:max-w-[142px] transition-transform duration-300 group-hover:scale-[1.02]" />
            <span className="h-5 sm:h-6 w-px bg-gray-300 shrink-0" aria-hidden="true" />
            <SenaiLogo className="h-4.5 sm:h-6 w-auto max-w-[72px] sm:max-w-[102px] transition-transform duration-300 group-hover:scale-[1.02]" />
          </a>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-gray-200/80 bg-gray-50/80 p-1" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={active ? 'location' : undefined}
                  className={`relative rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35 ${
                    active
                      ? 'bg-gray-950 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-950 hover:bg-white'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 -bottom-[5px] h-1 rounded-full bg-[#0066B3] transition-all duration-200 ${active ? 'w-4 -translate-x-1/2 opacity-100' : 'w-0 -translate-x-1/2 opacity-0'}`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {onOpenGlossary && (
              <button
                type="button"
                onClick={onOpenGlossary}
                className="btn-hover inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-700 hover:border-gray-300 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Glossário
              </button>
            )}
            <a
              href="#ligas"
              onClick={() => handleNavClick('ligas')}
              className="btn-hover inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.11em] text-white hover:bg-[#0066B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35 focus-visible:ring-offset-2"
            >
              Explorar ligas
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden max-h-[calc(100dvh-62px)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white/98 backdrop-blur-xl shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-3.5 sm:py-4">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {NAV_LINKS.map((link) => {
                const active = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={active ? 'location' : undefined}
                    className={`flex min-h-11 items-center justify-between rounded-xl px-4 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35 ${
                      active ? 'bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <span className={`h-1.5 rounded-full transition-all ${active ? 'w-5 bg-[#0066B3]' : 'w-1.5 bg-gray-300'}`} aria-hidden="true" />
                  </a>
                );
              })}
            </nav>

            {onOpenGlossary && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGlossary();
                }}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35"
              >
                <BookOpen className="w-4 h-4" />
                Abrir glossário
              </button>
            )}

            <a
              href="#ligas"
              onClick={() => handleNavClick('ligas')}
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0066B3] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/35"
            >
              Explorar as ligas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
