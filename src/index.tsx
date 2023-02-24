import { ReactNode } from 'react';

export interface ReactSpdProps {
  children: ReactNode;
}

export function ReactSpd({ children }: ReactSpdProps) {
  return <div className="ReactSpd">{children}</div>;
}
