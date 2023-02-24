import { render, screen } from '@testing-library/react';
import { ReactSpd } from '.';

describe('<ReactSpd/>', () => {
  it('render', async () => {
    render(<ReactSpd>Hello</ReactSpd>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('ReactSpd');
  });
});
