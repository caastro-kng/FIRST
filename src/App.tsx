/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutFirst } from './components/AboutFirst';
import { FirstBrazilSesiSenai } from './components/FirstBrazilSesiSenai';
import { TeamCulture } from './components/TeamCulture';
import { HowItWorks } from './components/HowItWorks';
import { LeaguesCarousel } from './components/LeaguesCarousel';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ImpactStatement } from './components/ImpactStatement';
import { StudentJourney } from './components/StudentJourney';
import { SeasonTimeline } from './components/SeasonTimeline';
import { CompetitionExperience } from './components/CompetitionExperience';
import { LeagueFinderQuiz } from './components/LeagueFinderQuiz';
import { GlossaryModal } from './components/GlossaryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          setGlossaryOpen(prev => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased selection:bg-[#0066B3] selection:text-white">
      {/* Editorial Sticky Header */}
      <Header
        onOpenGlossary={() => setGlossaryOpen(true)}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 1. Hero Section: "MUITO MAIS QUE ROBÔS" */}
        <Hero
          onOpenQuiz={() => setQuizOpen(true)}
          onOpenGlossary={() => setGlossaryOpen(true)}
        />

        {/* 2. Sobre a FIRST: Origem, Dean Kamen, Woodie Flowers, Gracious Professionalism */}
        <AboutFirst />

        {/* 3. FIRST no Brasil: Conexão com Sistema Indústria (SESI & SENAI) */}
        <FirstBrazilSesiSenai />

        {/* 4. Cultura de Equipe: "Antes do robô, existe uma equipe" (8 Áreas Multidisciplinares) */}
        <TeamCulture />

        {/* 5. Como a FIRST Funciona na Prática (Ciclo de Engenharia CAD-Construção-Código) */}
        <HowItWorks />

        {/* 6. Carrossel Editorial das 3 Ligas (01/FLL, 02/FTC, 03/FRC estilo Instagram com swipe e motion) */}
        <LeaguesCarousel />

        {/* 7. Matriz Comparativa Técnica Multidimensional */}
        <ComparisonMatrix />

        {/* 8. Declaração de Alto Impacto: "O robô é o desafio. As pessoas são o resultado." */}
        <ImpactStatement />

        {/* 9. A Jornada do Estudante: "Da primeira peça ao primeiro grande robô" */}
        <StudentJourney />

        {/* 10. Ciclo da Temporada: Do Kickoff ao Championship Mundial */}
        <SeasonTimeline />

        {/* 11. A Atmosfera da Arena & Cultura dos Pits */}
        <CompetitionExperience />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />

      {/* Interactive Modal Tools */}
      <LeagueFinderQuiz
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
      />

      <GlossaryModal
        isOpen={glossaryOpen}
        onClose={() => setGlossaryOpen(false)}
      />
    </div>
  );
}
