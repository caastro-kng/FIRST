import React from 'react';
import firstLogoUrl from '../assets/first-logo.svg';
import senaiLogoUrl from '../assets/senai-logo.svg';

/**
 * Official FIRST Logo (Authentic Asset)
 * Utiliza o arquivo oficial do projeto /src/assets/first-logo.svg (e /public/assets/first-logo.svg).
 * Sem texto estilizado, sem imitação e sem simulação por IA.
 */
export const FirstLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => {
  return (
    <img
      src={firstLogoUrl}
      alt="FIRST - For Inspiration and Recognition of Science and Technology"
      className={`${className} object-contain select-none`}
      loading="eager"
      width={120}
      height={36}
    />
  );
};

/**
 * Official SENAI Logo (Authentic Asset)
 * Utiliza o arquivo oficial do projeto /src/assets/senai-logo.svg (e /public/assets/senai-logo.svg).
 * Banner vermelho com as listras horizontais e tipografia oficial.
 */
export const SenaiLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => {
  return (
    <img
      src={senaiLogoUrl}
      alt="SENAI - Serviço Nacional de Aprendizagem Industrial"
      className={`${className} object-contain select-none`}
      loading="eager"
      width={115}
      height={28}
    />
  );
};
