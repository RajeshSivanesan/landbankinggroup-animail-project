import { apiResponse } from "./types";
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
          try {
            localStorage.setItem("animals", JSON.stringify({
                ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || String("")),
                [animal]: response
            }))
          } catch(ex) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
                [animal]: response
            }))
          }
          callback(response);
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