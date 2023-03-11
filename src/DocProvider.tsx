import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import prismDarkStyle from '@guoyunhe/prism-theme-github/github-dark.css?raw';
import prismLightStyle from '@guoyunhe/prism-theme-github/github-light.css?raw';
import useLocalStorage from 'react-use-localstorage';
import { ActualTheme, DocContext, Theme } from './DocContext';
import resetStyle from './reset.css?raw';
import darkStyle from './theme-dark.css?raw';
import lightStyle from './theme-light.css?raw';

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
      <style>{resetStyle}</style>
      <style>{actualTheme === 'light' ? lightStyle : darkStyle}</style>
      <style>{actualTheme === 'light' ? prismLightStyle : prismDarkStyle}</style>
      {children}
    </DocContext.Provider>
  );
}
