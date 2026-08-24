/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
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
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = document.activeElement?.tagName;
      const isTyping = target === 'INPUT' || target === 'TEXTAREA' || target === 'SELECT';

      if (!isTyping && (event.key === 'g' || event.key === 'G')) {
        setGlossaryOpen((open) => !open);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased selection:bg-[#0066B3] selection:text-white">
      <Header />

      <main className="flex-1">
        <Hero onOpenQuiz={() => setQuizOpen(true)} />
        <AboutFirst />
        <FirstBrazilSesiSenai />
        <TeamCulture />
        <HowItWorks />
        <LeaguesCarousel />
        <ComparisonMatrix />
        <ImpactStatement />
        <StudentJourney />
        <SeasonTimeline />
        <CompetitionExperience />
      </main>

      <Footer />

      <LeagueFinderQuiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
      <GlossaryModal isOpen={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
    </div>
  );
}
