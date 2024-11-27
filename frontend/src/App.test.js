import React from 'react'; // Add the missing import statement
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(welcomeElement).toBeInTheDocument();
});