import { apiResponse } from "./types"

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

export const transformApiResponse = (response: apiResponse[]) => {
    const result = response.map((data: apiResponse) => {
        return {
            ...data,
            rating: 0,
            characteristics: Object.keys(data.characteristics)?.reduce((acc, value) => {
                //@ts-ignore
                acc[value] = {
                    value: data.characteristics[value],
                    like: true
                }
                return acc;
            }, {})
        }
    })
    
    return result;
}