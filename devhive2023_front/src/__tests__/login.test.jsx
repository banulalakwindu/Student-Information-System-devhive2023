import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import Login from '../pages/login';


describe('Test Login Page', () => {
  test("hedings", () =>{
    render(<Login />)

    expect(screen.getByRole("heading",{name:"Student Management System"})).toBeInTheDocument();
    expect(screen.getByRole("heading",{name:"Login"})).toBeInTheDocument();
  })


  test('renders the login form with all of the required elements', () => {
    render(<Login />);
    
    const email = screen.getByPlaceholderText(form,"Enter email")
    const password = screen.getByPlaceholderText(form, "Password")
    const login =screen.getByDisplayValue(form, "Login")
    //const devLogin = screen.getByDisplayValue("dev login")

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(login).toBeInTheDocument()
    expect(devLogin).toBeInTheDocument()

  });

  test("input field's placeholder text", () =>{
    render(<Login />)

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  

  


  // test("validate user inputs", () =>{
  //   render(<Login />)

  //   expect(screen.getByRole("link",{ name:"Dev Login"})).toBeInTheDocument();
  // });

// test("check button working", () => {
//     render(<Login />);

//     // Find the initial text before clicking the button
//     const initialText = screen.getByText('Please Click!');
//     expect(initialText).toBeInTheDocument();
  
//     // Find the button element by its text content
//     const button = screen.getByRole('button',{name: "Login"});
  
//     // Click the button to trigger the onClick event and update the state
//     fireEvent.click(button);
  
//     // Find the updated text after clicking the button
//     const updatedText = screen.getByText('Clicked!');
//     expect(updatedText).toBeInTheDocument();
// });

// test('clicking on Login button should redirect to home page', () => {
//   const history = createMemoryHistory();
//   history.push = jest.fn(); // Mock the push function of history

//   render(
//     <Router history={history}>
//       <Login />
//       <Route path="/home">Home Page</Route>
//     </Router>
//   );

//   const loginButton = screen.getByDisplayValue('Login Button', { type: 'submit' });

//   // Click on the Login button
//   fireEvent.click(loginButton);

//   // Check if history.push was called with the correct path
//   expect(history.push).toHaveBeenCalledWith('/home');
// });

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
