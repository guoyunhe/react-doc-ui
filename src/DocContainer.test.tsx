import { render, screen } from '@testing-library/react';
import { DocContainer } from './DocContainer';

describe('<DocContainer/>', () => {
  it('render', async () => {
    render(<DocContainer>Hello</DocContainer>);

    const elem = await screen.findByText('Hello');

    expect(elem).toBeTruthy();
  });
});
