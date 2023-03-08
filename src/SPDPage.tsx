import { ReactNode } from 'react';
import { SPDProvider } from './SPDContext';

export interface SPDPageProps {
  children?: ReactNode;
}

export function SPDPage({ children }: SPDPageProps) {
  return (
    <SPDProvider>
      <div>{children}</div>
    </SPDProvider>
  );
}
