import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Import jest-dom matchers for this test file
import '@testing-library/jest-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders headline', () => {
    // We need to provide a router context for the App
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Assuming App.tsx has a main heading with the site name "Site"
    const headline = screen.getByRole('heading', {
      name: /Site/i,
    });
    
    expect(headline).toBeInTheDocument();
  });
});