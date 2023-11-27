import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from "@testing-library/react"
import { Rating } from "./Rating"

test("Renders the Rating page", () => {
    render(
        <Rating
            animalIndex={0}
            checkedIndex={0}
            updateAnimalRating={jest.fn()}
        />
    )
    expect(screen.getByTestId("rating")).toBeTruthy();
});

test("Renders the Rating page - default args", () => {
    render(
        <Rating
            animalIndex={0}
        />
    )
    expect(screen.getByTestId("rating")).toBeTruthy();
});

test("Rating - onClick stopPropagation", async () => {
    const updateRatingMock = jest.fn();
    const { container } = render(
        <Rating
            animalIndex={0}
            checkedIndex={0}
            updateAnimalRating={updateRatingMock}
        />
    )

    const inputTags = container.getElementsByTagName("input");

    await act(async () => {
        fireEvent.change(inputTags[1]);
        fireEvent.click(inputTags[1])

        // To trigger any onChange listeners
        fireEvent.blur(inputTags[1])
    })

    expect(updateRatingMock).toHaveBeenCalled();
});