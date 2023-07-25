import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/home'

test("test home page", () => {
    render(<Home/>)
    const button = screen.getAllByRole('button')
    expect(button).toBeInTheDocument()
});