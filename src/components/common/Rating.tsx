export const Rating = ({ checkedIndex = 0 }: any) => {
    const rating = [0, 1, 2, 3, 4];
    return (
        <div className="rating">
            {
                rating.map((r, index) => {
                    return (
                        <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    )
                })
            }
        </div>
    )
}