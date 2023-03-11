import { createContext } from 'react';

export type Theme = 'auto' | 'light' | 'dark';
export type ActualTheme = 'light' | 'dark';

interface DocContextValue {
  theme: Theme;
  systemTheme: ActualTheme;
  actualTheme: ActualTheme;
  setTheme: (theme: Theme) => void;
}

export const DocContext = createContext<DocContextValue>({
  theme: 'auto',
  actualTheme: 'light',
  systemTheme: 'light',
  setTheme: () => null,
});
