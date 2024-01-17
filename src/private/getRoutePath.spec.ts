import { getRoutePath } from './getRoutePath';

describe('getRoutePath()', () => {
  test('README.md => /', () => {
    expect(getRoutePath('README.md')).toBe('/');
  });
});
