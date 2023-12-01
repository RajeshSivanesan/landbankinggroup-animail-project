const rating = [0, 1, 2, 3, 4];

export const Rating = ({ checkedIndex = 0, animalIndex, updateAnimalRating = () => {} }: { animalIndex: number, checkedIndex?: number, updateAnimalRating?: Function }) => {

    const handleChange = (index: number, rating: number) => {
        updateAnimalRating(index, rating);
    }

    return (
        <div data-testid="rating" className="rating">
            {
                rating.map((_, index) => {
                    return (
                        <input onClick={e => e.stopPropagation()} onChange={() => handleChange(animalIndex, index)} checked={index === checkedIndex} key={index} type="radio" className="mask mask-star-2 bg-orange-400" />
                    )
                })
            }
        </div>
    )
}