import {render, fireEvent} from '@testing-library/react'
import StateComponent from './StateComponent'

test("render button", () => {
    const { getByText } = render(<StateComponent/>)
    const button = getByText("Click me")
    fireEvent.click(button)
    expect(getByText("Clicked!")).toBeInTheDocument()

});