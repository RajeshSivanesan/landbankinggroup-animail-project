import { useState } from "react";
import { Card } from "./common/Card";
import { Rating } from "./common/Rating";
import { AnimalCharacteristicsModal } from "./AnimalCharacteristicsModal";

export const AnimalCards = ({ animals = [] }: any) => {
    const [animalSelected, setAnimalSelected] = useState({ characteristics: {}, name: "" });
    const [openDialog, setOpenDialog] = useState(false);
    const onAnimalClick = (name: string, characteristics: any) => {
        setAnimalSelected({ name, characteristics });
        setOpenDialog(true);
    }

    return (
        <>
            <div style={{ padding: 20, justifyContent: "center", display: "flex", gap: 20, flexWrap: "wrap", cursor: "pointer" }}>
                {animals.map((animal: any) => {
                    const { name, locations, characteristics } = animal;

                    return (
                        <Card
                            onClick={() => onAnimalClick(name, characteristics)}
                            key={name}
                            title={name}
                            description={locations?.join(',')}
                        >
                            <Rating checkedIndex={0} />
                        </Card>
                    )
                })}
            </div>
            {openDialog && <AnimalCharacteristicsModal
                isOpen={openDialog}
                setIsOpen={setOpenDialog}
                info={animalSelected?.characteristics}
                animalName={animalSelected?.name}
            />}
        </>
    )
}