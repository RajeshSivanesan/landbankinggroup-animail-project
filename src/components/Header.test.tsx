import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

test("Renders the header page", () => {
    render(<Header />)
    expect(screen.getByText(/Animals - Characteristics/)).toBeTruthy();
})