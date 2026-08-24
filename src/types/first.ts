export type LeagueId = 'fll' | 'ftc' | 'frc';

export interface LeagueInfo {
  id: LeagueId;
  acronym: string;
  name: string;
  tagline: string;
  description: string;
  targetAge: string;
  teamSize: string;
  robotSize: string;
  robotWeight: string;
  materials: string;
  programming: string[];
  fieldSize: string;
  matchDuration: string;
  allianceFormat: string;
  costLevel: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
  highlights: string[];
  keyComponents: string[];
  evaluationPillars: {
    title: string;
    description: string;
  }[];
  quote: string;
  imageUrl: string;
  imageCaption: string;
}

export interface SeasonStep {
  number: string;
  phase: string;
  title: string;
  period: string;
  description: string;
  deliverables: string[];
  focusArea: 'Estratégia' | 'Engenharia' | 'Software' | 'Competição';
}

export interface StudentMilestone {
  stage: string;
  level: string;
  ageRange: string;
  leagueMatch: string;
  technicalSkills: string[];
  softSkills: string[];
  description: string;
  outcome: string;
}

export interface CoreValue {
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface GlossaryTerm {
  term: string;
  phonetic?: string;
  category: 'Arena' | 'Hardware' | 'Cultura FIRST' | 'Software' | 'Estratégia';
  definition: string;
  example: string;
}

export interface ComparisonCriterion {
  id: string;
  label: string;
  category: 'Geral' | 'Robótica & Hardware' | 'Software & Autonomia' | 'Competição & Arena';
  fll: string;
  ftc: string;
  frc: string;
  details?: string;
}
