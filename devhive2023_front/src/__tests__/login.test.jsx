import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Login from '../pages/login';


describe('Login', () => {
  it('renders the login form with all of the required elements', () => {
    render(<Login />);
    const form = screen.getByTestId('login-form'); // Use 'screen.getByTestId' to get the element
    expect(form).toBeVisible();
    expect(form.querySelector('input[type="email"]')).toBeVisible();
    expect(form.querySelector('input[type="password"]')).toBeVisible();
    expect(form.querySelector('input[type="submit"]')).toBeVisible();
  });

  // test('validates the user input', () => {
  //   render(<Login />);
  //   const form = screen.getByTestId('login-form');
  //   const emailInput = form.querySelector('input[type="email"]');
  //   const passwordInput = form.querySelector('input[type="password"]');

  //   // Trigger the form submission handling function without actually submitting the form
  //   fireEvent.submit(form);

  //   // Expect that the validation error messages are displayed
  //   expect(screen.getByText('Please enter your email address.')).toBeVisible();
  //   expect(screen.getByText('Please enter your password.')).toBeVisible();

  //   // Set valid email and password
  //   fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password' } });

  //   // Trigger the form submission handling function again
  //   fireEvent.submit(form);

  //   // Expect that the validation error messages are no longer displayed
  //   expect(screen.queryByText('Please enter your email address.')).toBeNull();
  //   expect(screen.queryByText('Please enter your password.')).toBeNull();
  // });

  // Your other test cases...
});
  //

  // test('validates the user input', () => {
  //   const form = render(<Login />);
  //   const emailInput = form.querySelector('input[type="email"]');
  //   const passwordInput = form.querySelector('input[type="password"]');

  //   emailInput.value = '';
  //   passwordInput.value = '';
  //   expect(() => form.submit()).toThrow('Please enter your email address.');

  //   emailInput.value = 'johndoe@example.com';
  //   passwordInput.value = '';
  //   expect(() => form.submit()).toThrow('Please enter your password.');

  //   emailInput.value = '';
  //   passwordInput.value = 'password';
  //   expect(() => form.submit()).toThrow('Please enter a valid email address.');
  // });

  // test('redirects to the /home URL when the user submits the form', () => {
  //   const form = render(<Login />);
  //   expect(form).toBeVisible();
  //   screen.simulate('submit',form);
  //   expect(window.location.pathname).toBe('/home');
  // });

  // test('redirects to the /home URL when the user clicks the dev login link', () => {
  //   const form = render(<Login />);
  //   const devLoginLink = screen.getByText('Dev Login');
  //   devLoginLink.click();
  //   expect(window.location.pathname).toBe('/home');
  // });
  // test('redirects to the /home URL when the user submits the form', async () => {
  //   render(<Login />);
  //   const form = screen.getByTestId('login-form'); // Use 'screen.getByTestId' to get the element
  //   form.submit();
  //   await screen.findByText(/redirecting/i); // Wait for the redirect message to appear
  //   expect(window.location.pathname).toBe('/home');
  // });

  // test('redirects to the /home URL when the user clicks the dev login link', async () => {
  //   render(<Login />);
  //   const devLoginLink = screen.getByTestId('dev-login'); // Use 'screen.getByTestId' to get the element
  //   devLoginLink.click();
  //   //await screen.findByText(/redirecting/i); // Wait for the redirect message to appear
  //   expect(window.location.pathname).toBe('/home');
  // });
