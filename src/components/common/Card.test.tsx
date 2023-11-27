import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { Card } from "./Card"

test("Renders the Card page", () => {
    render(<Card
        description='Testing Description'
        title='Testing title'
        onClick={jest.fn()}
    >
        <p>Testing</p>
    </Card>)
    expect(screen.getByText("Testing")).toBeTruthy();
});

test("Card onClick", () => {
    const cardMockClick = jest.fn();
    render(<Card
        description='Testing Description'
        title='Testing title'
        onClick={cardMockClick}
    >
        <p>Testing</p>
    </Card>)
    
    fireEvent.click(screen.getByTestId("card"));

    expect(cardMockClick).toHaveBeenCalled();
});