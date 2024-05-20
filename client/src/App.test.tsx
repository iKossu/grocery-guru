import React from 'react';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App';

test('renders shopping list heading', () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
  const linkElement = screen.getByText(/shopping list/i);
  expect(linkElement).toBeInTheDocument();
});
