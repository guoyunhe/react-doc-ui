import { Theme, useDoc } from './DocContext';

export function DocHeader() {
  const { theme, systemTheme, setTheme } = useDoc();
  return (
    <div>
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
