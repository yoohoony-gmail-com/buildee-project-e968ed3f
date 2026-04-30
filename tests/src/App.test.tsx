import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders the main page content correctly', () => {
    render(<App />);

    // Check for header content
    expect(screen.getByRole('heading', { name: 'Site', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '회사 소개' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '서비스' })).toBeInTheDocument();

    // Check for main content
    expect(screen.getByRole('heading', { name: '회사 소개', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('저희 회사를 소개합니다.')).toBeInTheDocument();
    expect(screen.getByText('저희는 최고의 서비스를 제공합니다.')).toBeInTheDocument();
  });
});