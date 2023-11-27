import { transformApiResponse } from "./utils";

describe("Utils", () => {
    describe("transformApiResponse", () => {
        it("should work as expected", () => {
            const result = transformApiResponse([{
                characteristics: {
                    "prey": "goat"
                },
                locations: ["Africa"],
                name: "Cheetah",
                taxonamy: {}
            }]);
            expect(result[0].rating).toBe(0),
            expect(result[0].characteristics).toMatchObject({
                prey: {
                    like: false,
                    "value": "goat",
                }
            })
        });
    });
});