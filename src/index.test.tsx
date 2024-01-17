import { render, screen } from '@testing-library/react';
import { StaticDemo } from '.';

describe('<ReactLivePlayground/>', () => {
  it('render', async () => {
    render(<StaticDemo>Hello</StaticDemo>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('ReactLivePlayground');
  });
});
