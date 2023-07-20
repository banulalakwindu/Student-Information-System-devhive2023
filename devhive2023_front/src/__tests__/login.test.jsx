import React from "react";
import { render ,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Login from '../pages/login'

describe("Testing the login page", () => {

    test("render the heading", () => {
        render(<Login />)
        const heading = screen.getByText('Student Management System')
        expect(heading).toBeInTheDocument()
    });

    test("render the sub heading", () =>{
        render(<Login/>)
        const subheading = screen.getByText('Faculty of Engineering - University of Jaffna')
        expect(subheading).toBeInTheDocument()
    });

    //test for input fields
    test("render input fields", () => {
        render(<Login />)

        const email = screen.getByRole("textbox")
        expect(email).toBeInTheDocument()

        const password = screen.getByRole("textbox")
        expect(password).toBeInTheDocument()

        const other = screen.getByRole("textbox")
        expect(other).toBeInTheDocument()
    })
    
    //test for the submit button


});