export const Rating = ({ checkedIndex = 0, animalIndex, updateAnimalRating = () => {} }: { animalIndex: number, checkedIndex: number, updateAnimalRating: Function }) => {
    const rating = [0, 1, 2, 3, 4];

    const handleChange = (index: number, rating: number) => {
        updateAnimalRating(index, rating);
    }

    return (
        <div className="rating">
            {
                rating.map((r, index) => {
                    return (
                        <input onClick={e => e.stopPropagation()} onChange={() => handleChange(animalIndex, index)} checked={index === checkedIndex} key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    )
                })
            }
        </div>
    )
}