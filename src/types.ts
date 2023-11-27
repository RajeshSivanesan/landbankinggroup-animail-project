export interface apiResponse {
    name: string;
    taxonamy: {
        [key: string]: string
    },
    locations: string[],
    rating?: number,
    characteristics: {
        [key: string]: string
    }
}