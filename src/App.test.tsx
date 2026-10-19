import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('visitors can filter independent apps and restore the gallery', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Explore ¡Viva Lotería!/ })).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'Web', exact: true })[1]);
  expect(screen.queryByRole('link', { name: /Explore ¡Viva Lotería!/ })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explore portfolio website source/ })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /Explore The Hornist/ })).not.toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'iOS', exact: true })[1]);
  expect(screen.getByRole('link', { name: /Explore ¡Viva Lotería!/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explore Harmonius/ })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'All projects' }));
  expect(screen.getAllByRole('link', { name: /Explore .* on the App Store/ })).toHaveLength(3);
});

test('copy email gives accessible feedback', async () => {
  Object.assign(navigator, { clipboard: { writeText: jest.fn().mockResolvedValue(undefined) } });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Copy email ↗' }));
  expect(await screen.findByRole('button', { name: 'Copied ✓' })).toBeInTheDocument();
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('lorenzo@vydr.io');
});

test('visitors can explore iOS and web development in the hero', () => {
  render(<App />);
  expect(screen.getByText('ContentView.swift')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'Web', exact: true })[0]);
  expect(screen.getByText('App.tsx')).toBeInTheDocument();
  expect(screen.getByText('Web development')).toBeInTheDocument();
});
