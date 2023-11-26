import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { FontAwesomeIconButton } from "./common/IconButton";

export const AnimalCharacteristicsModal = ({ animalName = "", info = {}, isOpen = false, setIsOpen = () => { } }: any) => {
    const renderCharacteristics = (info: any) => {
        return Object.keys(info).map(i => {
            return (
                <tr key={i}>
                    <td>{i}</td>
                    <td>{info[i]?.value}</td>
                    <td><FontAwesomeIconButton fill={info[i]?.like} icon="fa-thumbs-up" /></td>
                    <td><FontAwesomeIconButton fill={!info[i]?.like} icon="fa-thumbs-down" /></td>
                </tr>
            )
        })
    }

    return (
        <Dialog open={isOpen} handler={() => setIsOpen(false)}>
            <DialogHeader>
                {`${animalName} Characteristics`}
            </DialogHeader>
            <DialogBody>
                We can like / dislike an animal characteristic

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
                    onClick={() => setIsOpen(false)}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}