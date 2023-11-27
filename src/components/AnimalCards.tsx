import { useState } from "react";
import { Card } from "./common/Card";
import { Rating } from "./common/Rating";
import { AnimalCharacteristicsModal } from "./AnimalCharacteristicsModal";
import { apiResponse } from "../types";

export const AnimalCards = ({ animals = [], updateAnimalRating, updateAnimalCharacteristicsLikeDislike }: {
    animals?: apiResponse[],
    updateAnimalRating: Function,
    updateAnimalCharacteristicsLikeDislike: Function
}) => {
    const [animalSelected, setAnimalSelected] = useState({ characteristics: {}, name: "", animalIndex: 0 });
    const [openDialog, setOpenDialog] = useState(false);
    const onAnimalClick = (name: string, characteristics: Object, animalIndex: number) => {
        setAnimalSelected({ name, characteristics, animalIndex });
        setOpenDialog(true);
    }

    return (
        <>
            <div style={{ padding: 20, justifyContent: "center", display: "flex", gap: 20, flexWrap: "wrap", cursor: "pointer" }}>
                {animals.map((animal: { [key: string]: any }, animalIndex: number) => {
                    const { name, locations, characteristics, rating } = animal;

                    return (
                        <Card
                            data-testid="animalCard"
                            onClick={() => onAnimalClick(name, characteristics, animalIndex)}
                            key={name}
                            title={name}
                            description={locations?.join(',')}
                        >
                            <Rating animalIndex={animalIndex} updateAnimalRating={updateAnimalRating} checkedIndex={rating} />
                        </Card>
                    )
                })}
            </div>
            {openDialog && animalSelected?.characteristics && <AnimalCharacteristicsModal
                isOpen={openDialog}
                setIsOpen={setOpenDialog}
                info={animalSelected?.characteristics}
                updateAnimalCharacteristicsLikeDislike={updateAnimalCharacteristicsLikeDislike}
                animalName={animalSelected?.name}
                animalIndex={animalSelected?.animalIndex}
                setAnimalSelected={setAnimalSelected}
            />}
        </>
    )
}