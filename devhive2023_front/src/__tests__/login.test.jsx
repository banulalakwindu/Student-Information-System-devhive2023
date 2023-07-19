import React from "react";
import { render ,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Login from '../pages/login'

test("render login page", () =>{
    render(<Login/>)
    const title = screen.getByText('Faculty of Engineering - University of Jaffna')
    expect(title).toBeInTheDocument()
});