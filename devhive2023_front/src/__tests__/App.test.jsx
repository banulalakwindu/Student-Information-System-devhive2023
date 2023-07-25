import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

import App from '../App';

test('Navigates to the home page', () => {
  // Create a mock history object with an initial path of '/'
  const history = createMemoryHistory();
  history.push('/');

  // Render the App component within the Router context
  const { getByText } = render(
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );

  // Find and click the link that navigates to the home page
  const homeLink = getByText('Home');
  fireEvent.click(homeLink);

  // Check if the URL has changed to the home page
  expect(history.location.pathname).toBe('/home');
});

// // You can write similar tests for other routes in the App component
// test('Navigates to the login page', () => {
//   // ...
// });

// test('Navigates to the semesters page', () => {
//   // ...
// });

// ... (add more tests for other routes)
