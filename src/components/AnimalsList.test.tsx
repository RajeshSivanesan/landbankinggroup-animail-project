import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { AnimalsList } from "./AnimalsList"

test("Renders the AnimalsList page", () => {
    render(<AnimalsList selectedAnimal="cheetah" setSelectedAnimal={jest.fn()} />)
    expect(screen.getByText(/Choose an animal/)).toBeTruthy();
});

test("test animal selection", () => {
    const setSelectedAnimalMock = jest.fn();
    render(<AnimalsList selectedAnimal="cheetah" setSelectedAnimal={setSelectedAnimalMock} />)

    fireEvent.change(screen.getByTestId("animal-selection"));
    expect(setSelectedAnimalMock).toHaveBeenCalled();
});