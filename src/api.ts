import { apiResponse } from "./types";
import { transformApiResponse } from "./utils";
const LOCAL_STORAGE_KEY = "animals";

export const callApi = (animal: string, callback: Function) => {
    fetch(`${import.meta.env.VITE_API_URL}${animal}`, {
        method: "GET",
        headers: {
          //@ts-ignore
          "X-Api-Key": import.meta.env.VITE_API_KEY
        }
      })
        .then((response) => response.json())
        .then((response: apiResponse[]) => {
          const apiResponse = transformApiResponse(response);
          try {
            localStorage.setItem("animals", JSON.stringify({
                ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || String("")),
                [animal]: apiResponse
            }))
          } catch(ex) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
                [animal]: apiResponse
            }))
          }
          callback(apiResponse);
        })
        .catch((err) => {
          callback(null, err?.message);
        })
}

export const checkForCacheAndInvokeApi = (animal: string, callback: Function) => {
    try {
        const localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || String(""));
        if (localStorageData) {
            const hasInfo = localStorageData?.[animal]
            if (hasInfo) {
                return callback(localStorageData?.[animal]);
            } else {
                callApi(animal, callback);
            }
        } else {
            callApi(animal, callback);
        }
    } catch(ex) {
        callApi(animal, callback);
    }
}