import { ReactNode } from 'react';
import { DocProvider } from './DocContext';

export interface SPDPageProps {
  children?: ReactNode;
}

export function DocPage({ children }: SPDPageProps) {
  return (
    <DocProvider>
      <div>{children}</div>
    </DocProvider>
  );
}
