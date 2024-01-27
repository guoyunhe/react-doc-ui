import { getLang } from './getLang';

describe('getLang()', () => {
  test('README.md => null', () => {
    expect(getLang('README.md')).toBe(null);
  });

  test('README.zh.md => zh', () => {
    expect(getLang('README.zh.md')).toBe('zh');
  });
});
