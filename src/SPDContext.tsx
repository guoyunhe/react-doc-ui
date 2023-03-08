import prismDarkStyle from '@guoyunhe/prism-theme-github/github-dark.css?raw';
import prismLightStyle from '@guoyunhe/prism-theme-github/github-light.css?raw';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type Theme = 'auto' | 'light' | 'dark';

interface SPDContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SPDContext = createContext<SPDContextValue>({
  theme: 'auto',
  setTheme: () => null,
});

export interface SPDProviderProps {
  children?: ReactNode;
}

export function SPDProvider({ children }: SPDProviderProps) {
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

export function useSPD() {
  return useContext(SPDContext);
}
