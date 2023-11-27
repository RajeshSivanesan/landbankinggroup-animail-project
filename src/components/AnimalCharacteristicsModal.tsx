import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { FontAwesomeIconButton } from "./common/IconButton";

export const AnimalCharacteristicsModal = ({ setAnimalSelected, animalIndex, animalName = "", info = {}, isOpen = false, setIsOpen = () => { }, updateAnimalCharacteristicsLikeDislike }: {
    setAnimalSelected: Function,
    animalIndex: number,
    animalName?: string,
    isOpen?: boolean,
    info?: Object,
    setIsOpen?: Function,
    updateAnimalCharacteristicsLikeDislike: Function
}) => {
    const handleLikeDislike = (index: number, characteristic: string, like: boolean) => {
        updateAnimalCharacteristicsLikeDislike(index, characteristic, like);
        setAnimalSelected({
            name: animalName, 
            characteristics: {
                ...info,
                [characteristic]: {
                    //@ts-ignore
                    ...info[characteristic],
                    like
                }
            },
            animalIndex
        })
    }

    const renderCharacteristics = (info: any) => {
        return Object.keys(info).map(i => {
            return (
                <tr key={i}>
                    <td>{i}</td>
                    <td>{info[i]?.value}</td>
                    <td data-testid="thumbs-up" onClick={() => handleLikeDislike(animalIndex, i, true)}><FontAwesomeIconButton fill={info[i]?.like} icon="fa-thumbs-up" /></td>
                    <td data-testid="thumbs-down" onClick={() => handleLikeDislike(animalIndex, i, false)}><FontAwesomeIconButton fill={!info[i]?.like} icon="fa-thumbs-down" /></td>
                </tr>
            )
        })
    }

    return (
        <Dialog data-testid="animal-characteristics-modal" open={isOpen} handler={() => setIsOpen(false)}>
            <DialogHeader>
                {`${animalName} Characteristics`}
            </DialogHeader>
            <p style={{ textAlign: "center", marginBottom: 10 }}>We can like / dislike an animal characteristic</p>
            <DialogBody>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <table cellPadding={10} cellSpacing={15} className="table-auto">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCharacteristics(info)}
                        </tbody>
                    </table>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    data-testid="dialog-cancel"
                    onClick={() => setIsOpen(false)}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}