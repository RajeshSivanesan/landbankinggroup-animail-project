import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { AnimalCards } from "./AnimalCards"

test("Renders the AnimalCards page", () => {
    render(
        <AnimalCards
            animals={[
                {
                    characteristics: {},
                    locations: ["india"],
                    name: "cheetah",
                    taxonamy: {},
                    rating: 0
                }
            ]}
            updateAnimalCharacteristicsLikeDislike={jest.fn()}
            updateAnimalRating={jest.fn()}
        />
    )
    expect(screen.getByText("cheetah")).toBeTruthy();
    expect(screen.getByText("india")).toBeTruthy();
});

test("AnimalCards - card Click", () => {
    render(
        <AnimalCards
            animals={[
                {
                    characteristics: {},
                    locations: ["india"],
                    name: "cheetah",
                    taxonamy: {},
                    rating: 0
                }
            ]}
            updateAnimalCharacteristicsLikeDislike={jest.fn()}
            updateAnimalRating={jest.fn()}
        />
    )
    
    fireEvent.click(screen.getByTestId("card"));

    const modal = screen.getByRole("dialog");
    expect(modal).toBeTruthy(); 
});

test("AnimalCards - default args", () => {
    const { container } = render(
        <AnimalCards
            updateAnimalCharacteristicsLikeDislike={jest.fn()}
            updateAnimalRating={jest.fn()}
        />
    )
    expect(container.getElementsByTagName('div')[0]).toBeTruthy();
});
