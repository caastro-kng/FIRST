import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { GlossaryModal } from './GlossaryModal';

describe('GlossaryModal', () => {
  it('opens already filtered by the contextual search term', () => {
    render(<GlossaryModal isOpen initialSearch="Swerve Drive" onClose={vi.fn()} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('Swerve Drive');
    expect(screen.getByText('Swerve Drive')).toBeInTheDocument();
    expect(screen.getByText(/1 DE \d+ TERMOS/i)).toBeInTheDocument();
  });
});
