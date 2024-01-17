import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(
    <div>
        <h1>
            Hello
        </h1>
    </div>
  );
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});