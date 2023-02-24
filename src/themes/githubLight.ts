import { PrismTheme } from 'prism-react-renderer';

/**
 * @see https://github.com/primer/github-syntax-light/blob/master/lib/github-light.css
 */
export const githubLight: PrismTheme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['keyword', 'atrule'],
      style: {
        color: '#cf222e',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#6a737d',
      },
    },
    {
      types: ['constant', 'boolean', 'number', 'doctype', 'attr-name'],
      style: {
        color: '#0550ae',
      },
    },
    {
      types: ['entity'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#0a3069',
      },
    },
    {
      types: ['property', 'tag'],
      style: {
        color: '#116329',
      },
    },
    {
      types: ['imports', 'function'],
      style: {
        color: '#953800',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#8250df',
      },
    },
    {
      types: ['attr-equals'],
      style: {
        color: 'inherit',
      },
    },
  ],
};
