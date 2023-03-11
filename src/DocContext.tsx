import { createContext, ReactNode, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import prismDarkStyle from '@guoyunhe/prism-theme-github/github-dark.css?raw';
import prismLightStyle from '@guoyunhe/prism-theme-github/github-light.css?raw';
import useLocalStorage from 'react-use-localstorage';
import darkStyle from './theme-dark.css?raw';
import lightStyle from './theme-light.css?raw';

export type Theme = 'auto' | 'light' | 'dark';
export type ActualTheme = 'light' | 'dark';

interface DocContextValue {
  theme: Theme;
  systemTheme: ActualTheme;
  actualTheme: ActualTheme;
  setTheme: (theme: Theme) => void;
}

const DocContext = createContext<DocContextValue>({
  theme: 'auto',
  actualTheme: 'light',
  systemTheme: 'light',
  setTheme: () => null,
});

export interface DocProviderProps {
  children?: ReactNode;
}

export function DocProvider({ children }: DocProviderProps) {
  const [theme, setTheme] = useLocalStorage('react-doc-ui-theme', 'auto');
  const preferDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  const systemTheme = preferDark ? 'dark' : 'light';
  const actualTheme = theme === 'auto' ? systemTheme : (theme as ActualTheme);

  return (
    <DocContext.Provider value={{ theme: theme as Theme, systemTheme, actualTheme, setTheme }}>
      <style>{actualTheme === 'light' ? lightStyle : darkStyle}</style>
      <style>{actualTheme === 'light' ? prismLightStyle : prismDarkStyle}</style>
      {children}
    </DocContext.Provider>
  );
}

export function useDoc() {
  return useContext(DocContext);
}
