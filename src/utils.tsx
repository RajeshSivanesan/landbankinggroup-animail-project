export const ANIMALS_LIST = [
    {
        name: "Cheetah",
        value: "cheetah"
    },
    {
        name: "Lion",
        value: "lion"
    },
    {
        name: "Elephant",
        value: "elephant"
    },
    {
        name: "Tiger",
        value: "Tiger"
    },
    {
        name: "Wolf",
        value: "wolf"
    },
    {
        name: "Hyena",
        value: "hyena"
    }
]

export const transformApiResponse = (response: any) => {
    const result = response.map((data: any) => {
        return {
            ...data,
            rating: 1,
            characteristics: Object.keys(data.characteristics)?.reduce((acc, value): any => {
                //@ts-ignore
                acc[value] = {
                    value: data.characteristics[value],
                    like: true
                }
                return acc;
            }, {})
        }
    })
    
    console.log(result);
    return result;
}