import { ANIMALS_LIST } from "../utils"

export const AnimalsList = ({ selectedAnimal, setSelectedAnimal }: { selectedAnimal: string, setSelectedAnimal: Function }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnimal(event.target.value);
    }

    return (
        <div style={{ marginTop: "20px", gap: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <label htmlFor="animals" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select data-testid="animal-selection" onChange={handleChange} value={selectedAnimal} id="animals" style={{ color: "black" }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Choose an animal</option>
                {
                    ANIMALS_LIST.map(animal => {
                        return (
                            <option key={animal.name} value={animal.value}>{animal.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}