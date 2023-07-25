import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Medical from '../pages/medical';


test('test', () => {
    render(<Medical />)
    const heading = screen.getByText('Upload Your Medical Report')
    expect(heading).toBeInTheDocument()
});