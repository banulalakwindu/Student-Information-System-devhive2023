import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../components/Footer';

test("Render the link for the website correctly", () => {
  render(<Footer />);
  const weblink = screen.getByTestId('web-link');
  expect(weblink.href).toContain('https://www.eng.jfn.ac.lk');
});
