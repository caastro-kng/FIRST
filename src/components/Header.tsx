import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { FirstLogo, SenaiLogo } from './OfficialLogos';

interface HeaderProps {
  onOpenGlossary?: () => void;
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = [
      { id: 'sobre', matchIds: ['sobre', 'valores'] },
      { id: 'ligas', matchIds: ['ligas', 'fll', 'ftc', 'frc', 'comparativo'] },
      { id: 'sesi-senai', matchIds: ['sesi-senai', 'brasil'] },
      { id: 'jornada', matchIds: ['jornada', 'equipe', 'como-funciona'] },
      { id: 'temporada', matchIds: ['temporada', 'arena'] },
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;

      for (const sec of sections) {
        const primaryEl = document.getElementById(sec.id);
        if (primaryEl) {
          const top = primaryEl.offsetTop;
          const height = primaryEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SOBRE', href: '#sobre', id: 'sobre' },
    { label: 'LIGAS', href: '#ligas', id: 'ligas' },
    { label: 'SESI/SENAI', href: '#sesi-senai', id: 'sesi-senai' },
    { label: 'JORNADA', href: '#jornada', id: 'jornada' },
    { label: 'TEMPORADA', href: '#temporada', id: 'temporada' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-2xs py-3.5'
          : 'bg-white border-b border-gray-200/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12">
          
          {/* Institutional Co-Branding Signature: [FIRST OFICIAL] | [SENAI OFICIAL] */}
          <a
            href="#inicio"
            id="brand-logo-link"
            className="flex items-center gap-3 sm:gap-4.5 focus:outline-hidden group shrink-0"
            aria-label="FIRST e SENAI Brasil - Início"
          >
            {/* Official FIRST Logo */}
            <div className="flex items-center h-8 sm:h-9">
              <FirstLogo className="h-7 sm:h-8.5 w-auto max-w-[130px] sm:max-w-[155px] transition-transform group-hover:scale-101" />
            </div>

            {/* Discrete, fine vertical divider */}
            <div className="h-5 sm:h-6 w-px bg-gray-300/80" aria-hidden="true" />

            {/* Official SENAI Logo */}
            <div className="flex items-center h-6 sm:h-7.5">
              <SenaiLogo className="h-5.5 sm:h-7 w-auto max-w-[95px] sm:max-w-[115px] transition-transform group-hover:scale-101" />
            </div>
          </a>

          {/* Desktop Navigation Menu (Centered & Clean) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider text-gray-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`py-1.5 transition-colors relative tracking-wide uppercase ${
                    isActive ? 'text-[#0066B3]' : 'hover:text-gray-950 text-gray-700'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#0066B3] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA EXPLORAR LIGAS → */}
          <div className="hidden sm:flex items-center">
            <a
              href="#ligas"
              id="header-cta-leagues"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0066B3] hover:bg-[#005291] rounded-lg shadow-2xs transition-all hover:translate-y-[-1px] active:translate-y-0"
            >
              <span>Explorar ligas</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-gray-800 hover:text-black focus:outline-hidden rounded-lg hover:bg-gray-100"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-gray-800 hover:bg-gray-50 hover:text-[#0066B3] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-gray-100">
            <a
              href="#ligas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0066B3] rounded-lg"
            >
              <span>Explorar ligas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
