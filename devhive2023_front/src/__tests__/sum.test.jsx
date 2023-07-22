import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { Sum } from './sum';

test("check", () => {
    render(<Sum />)
    const text = screen.getByText('Hello World')
    expect(text).toBeInTheDocument()
});