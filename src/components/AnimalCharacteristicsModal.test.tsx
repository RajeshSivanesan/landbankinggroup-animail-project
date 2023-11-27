import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { AnimalCharacteristicsModal } from "./AnimalCharacteristicsModal"

test("Renders the AnimalCharacteristicsModal page", () => {
    render(<AnimalCharacteristicsModal 
        animalIndex={0}
        animalName='cheetah'
        info={{}}
        isOpen={true}
        setAnimalSelected={jest.fn()}
        setIsOpen={jest.fn()}
        updateAnimalCharacteristicsLikeDislike={jest.fn()}
    />)
    expect(screen.getByText(/cheetah Characteristics/)).toBeTruthy();
    expect(screen.getByText(/We can like \/ dislike an animal characteristic/)).toBeTruthy();
});

test("Handle thumbs up", () => {
    const mock = jest.fn();
    render(<AnimalCharacteristicsModal 
        animalIndex={0}
        animalName='cheetah'
        info={{
            "prey": "goat"
        }}
        isOpen={true}
        setAnimalSelected={jest.fn()}
        setIsOpen={jest.fn()}
        updateAnimalCharacteristicsLikeDislike={mock}
    />)

    const thumbsUp = screen.getByTestId('thumbs-up');
    fireEvent.click(thumbsUp);

    expect(mock).toHaveBeenCalled();
});

test("Handle thumbs down", () => {
    const mock = jest.fn();
    render(<AnimalCharacteristicsModal 
        animalIndex={0}
        animalName='cheetah'
        info={{
            "prey": "goat"
        }}
        isOpen={true}
        setAnimalSelected={jest.fn()}
        setIsOpen={jest.fn()}
        updateAnimalCharacteristicsLikeDislike={mock}
    />)

    const thumbsUp = screen.getByTestId('thumbs-down');
    fireEvent.click(thumbsUp);

    expect(mock).toHaveBeenCalled();
});

test("Renders the AnimalCharacteristicsModal page - default args", () => {
    render(<AnimalCharacteristicsModal 
        animalIndex={0}
        setAnimalSelected={jest.fn()}
        updateAnimalCharacteristicsLikeDislike={jest.fn()}
    />)
    expect(screen.queryByText(/We can like \/ dislike an animal characteristic/)).toBeFalsy();
});

test("Renders the AnimalCharacteristicsModal page - dialog cancel", () => {
    const mock = jest.fn();
    render(<AnimalCharacteristicsModal 
        animalIndex={0}
        animalName='cheetah'
        info={{
            "prey": "goat"
        }}
        isOpen={true}
        setAnimalSelected={jest.fn()}
        setIsOpen={mock}
        updateAnimalCharacteristicsLikeDislike={jest.fn()}
    />)

    fireEvent.click(screen.getByTestId('dialog-cancel'));

    expect(mock).toHaveBeenCalled();
});

test("Renders the AnimalCharacteristicsModal page - container escape", () => {
    const mock = jest.fn();
    const { container } = render(<AnimalCharacteristicsModal 
        animalIndex={0}
        animalName='cheetah'
        info={{
            "prey": "goat"
        }}
        isOpen={true}
        setAnimalSelected={jest.fn()}
        setIsOpen={mock}
        updateAnimalCharacteristicsLikeDislike={jest.fn()}
    />)

    fireEvent.keyDown(container, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27
  });

    expect(mock).toHaveBeenCalled();
});