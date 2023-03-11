import { ReactNode } from 'react';
import { Theme } from './DocContext';
import { useDoc } from './useDoc';

export interface DocHeaderProps {
  title?: ReactNode;
}

export function DocHeader({ title }: DocHeaderProps) {
  const { theme, systemTheme, setTheme } = useDoc();
  return (
    <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
      <h1 style={{ flex: '1 1 auto', margin: 0 }}>{title}</h1>
      <div style={{ textAlign: 'right' }}>
        Theme:&nbsp;
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          style={{ border: 0, padding: 0, background: 'transparent', color: 'inherit' }}
        >
          <option value="auto">{systemTheme === 'dark' ? '🌙' : '☀️'} Auto</option>
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </div>
    </div>
  );
}
