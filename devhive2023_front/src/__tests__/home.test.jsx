import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


import Home from '../pages/home'

describe("test home page", () => {
    test("test home page", () => {
        render(<Home/>)

        
        expect(screen.getAllByRole('button')).toBeInTheDocument()
    });

});