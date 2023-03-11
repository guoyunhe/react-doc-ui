import { ReactNode } from 'react';
import { useDoc } from './DocContext';

export interface DocDemoBlockProps {
  children?: ReactNode;
}

export function DocDemoBlock({ children }: DocDemoBlockProps) {
  const { actualTheme } = useDoc();
  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: actualTheme === 'dark' ? '#30363d' : '#d8dee4',
        borderRadius: 6,
        padding: 16,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}
