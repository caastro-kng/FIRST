/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutFirst } from './components/AboutFirst';
import { LeagueId } from './types/first';

const ImpactStats = lazy(() => import('./components/ImpactStats').then((module) => ({ default: module.ImpactStats })));
const LeaguesCarousel = lazy(() => import('./components/LeaguesCarousel').then((module) => ({ default: module.LeaguesCarousel })));
const ComparisonMatrix = lazy(() => import('./components/ComparisonMatrix').then((module) => ({ default: module.ComparisonMatrix })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then((module) => ({ default: module.HowItWorks })));
const TeamCulture = lazy(() => import('./components/TeamCulture').then((module) => ({ default: module.TeamCulture })));
const ImpactStatement = lazy(() => import('./components/ImpactStatement').then((module) => ({ default: module.ImpactStatement })));
const StudentJourney = lazy(() => import('./components/StudentJourney').then((module) => ({ default: module.StudentJourney })));
const SeasonTimeline = lazy(() => import('./components/SeasonTimeline').then((module) => ({ default: module.SeasonTimeline })));
const CompetitionExperience = lazy(() => import('./components/CompetitionExperience').then((module) => ({ default: module.CompetitionExperience })));
const FirstBrazilSesiSenai = lazy(() => import('./components/FirstBrazilSesiSenai').then((module) => ({ default: module.FirstBrazilSesiSenai })));
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })));
const LeagueFinderQuiz = lazy(() => import('./components/LeagueFinderQuiz').then((module) => ({ default: module.LeagueFinderQuiz })));
const GlossaryModal = lazy(() => import('./components/GlossaryModal').then((module) => ({ default: module.GlossaryModal })));

const PageLoadingFallback: React.FC = () => (
  <div className="border-y border-gray-200 bg-[#F6F7F9] py-16" aria-hidden="true">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-3 w-24 animate-pulse rounded-full bg-gray-200" />
      <div className="mt-5 h-10 max-w-xl animate-pulse rounded-2xl bg-gray-200" />
      <div className="mt-4 h-4 max-w-2xl animate-pulse rounded-full bg-gray-200/80" />
    </div>
  </div>
);

export default function App() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState<LeagueId | null>(null);

  const openGlossary = (query = '') => {
    setGlossaryQuery(query);
    setGlossaryOpen(true);
  };

  const handleExploreLeague = (league: LeagueId) => {
    setSelectedLeague(league);
    setQuizOpen(false);

    window.requestAnimationFrame(() => {
      document.getElementById('ligas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = document.activeElement?.tagName;
      const isTyping = target === 'INPUT' || target === 'TEXTAREA' || target === 'SELECT';

      if (!isTyping && (event.key === 'g' || event.key === 'G')) {
        if (glossaryOpen) {
          setGlossaryOpen(false);
        } else {
          openGlossary();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [glossaryOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111827] antialiased selection:bg-[#0066B3] selection:text-white">
      <Header onOpenGlossary={() => openGlossary()} />

      <main className="flex-1">
        <Hero onOpenQuiz={() => setQuizOpen(true)} />
        <AboutFirst />

        <Suspense fallback={<PageLoadingFallback />}>
          <ImpactStats />
          <LeaguesCarousel selectedLeague={selectedLeague} onOpenGlossary={openGlossary} />
          <ComparisonMatrix />
          <HowItWorks />
          <TeamCulture />
          <ImpactStatement />
          <StudentJourney />
          <SeasonTimeline />
          <CompetitionExperience />
          <FirstBrazilSesiSenai />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {quizOpen && (
        <Suspense fallback={null}>
          <LeagueFinderQuiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} onExploreLeague={handleExploreLeague} />
        </Suspense>
      )}

      {glossaryOpen && (
        <Suspense fallback={null}>
          <GlossaryModal isOpen={glossaryOpen} initialSearch={glossaryQuery} onClose={() => setGlossaryOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
