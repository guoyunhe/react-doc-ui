import { ReactNode } from 'react';

export interface DocDemoBlockProps {
  children?: ReactNode;
}

export function DocDemoBlock({ children }: DocDemoBlockProps) {
  return (
    <div
      style={{
        border: 4,
      }}
    >
      {children}
    </div>
  );
}
