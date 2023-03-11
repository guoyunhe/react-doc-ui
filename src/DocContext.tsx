import prismDarkStyle from '@guoyunhe/prism-theme-github/github-dark.css?raw';
import prismLightStyle from '@guoyunhe/prism-theme-github/github-light.css?raw';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type Theme = 'auto' | 'light' | 'dark';

interface DocContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SPDContext = createContext<DocContextValue>({
  theme: 'auto',
  setTheme: () => null,
});

export interface DocProviderProps {
  children?: ReactNode;
}

export function DocProvider({ children }: DocProviderProps) {
  const [theme, setTheme] = useState<Theme>('auto');
  const preferDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  const systemTheme = preferDark ? 'dark' : 'light';
  const actualTheme = theme === 'auto' ? systemTheme : theme;
  return (
    <SPDContext.Provider value={{ theme, setTheme }}>
      <style>{actualTheme === 'light' ? prismLightStyle : prismDarkStyle}</style>
      <style>{actualTheme === 'light' ? prismLightStyle : prismDarkStyle}</style>
      {children}
    </SPDContext.Provider>
  );
}

export function useDoc() {
  return useContext(SPDContext);
}
