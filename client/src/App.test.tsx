import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders shopping list heading', () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  const linkElement = screen.getByText(/shopping list/i);
  expect(linkElement).toBeInTheDocument();
});
