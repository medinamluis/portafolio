import { render, screen } from '@testing-library/react';
import App from './App';

// Original React Create App template:

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Edited form seach-app:

test('renders without crashing', () => {
  render(<App />);
  const h1Elem = screen.getByText(/Search App/i);
  expect(h1Elem).toBeInTheDocument();
});
