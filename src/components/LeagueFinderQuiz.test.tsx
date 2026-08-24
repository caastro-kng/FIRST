import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LeagueFinderQuiz } from './LeagueFinderQuiz';

describe('LeagueFinderQuiz', () => {
  it('returns the recommended league through the explore callback', async () => {
    const user = userEvent.setup();
    const onExploreLeague = vi.fn();

    render(
      <LeagueFinderQuiz
        isOpen
        onClose={vi.fn()}
        onExploreLeague={onExploreLeague}
      />,
    );

    await user.click(screen.getByRole('button', { name: /Crianças de 9 a 12 anos/i }));
    await user.click(screen.getByRole('button', { name: /Espaço em sala comum/i }));
    await user.click(screen.getByRole('button', { name: /Introdução lúdica/i }));

    expect(screen.getByText(/FIRST LEGO League \(FLL\)/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Explorar FLL nas ligas/i }));
    expect(onExploreLeague).toHaveBeenCalledWith('fll');
  });
});
