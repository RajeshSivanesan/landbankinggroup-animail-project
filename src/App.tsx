import { useState, useEffect } from 'react';
import './App.css'
import { AnimalsList } from './components/AnimalsList'
import { AnimalCards } from './components/AnimalCards';
import { transformApiResponse } from './utils';
import { Header } from './components/Header';
import { checkForCacheAndInvokeApi } from './api';
import { apiResponse } from './types';

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [apiResult, setApiResult] = useState<apiResponse[]>([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (selectedAnimal) {
      checkForCacheAndInvokeApi(selectedAnimal, (response: apiResponse[], err: string) => {
        if (err) {
          setApiError(err);
          return;
        }
        setApiResult(transformApiResponse(response));
      })
    }
  }, [selectedAnimal]);

  const updateAnimalRating = (index: number, rating: number) => {
    const copyApiResult: apiResponse[]  = [...apiResult];
    copyApiResult[index] = {
      ...copyApiResult[index],
      rating
    }
    setApiResult(copyApiResult);
  };

  const updateAnimalCharacteristicsLikeDislike = (index: number, characteristic: string, like: boolean) => {
    const copyApiResult: apiResponse[] = [...apiResult];
    copyApiResult[index].characteristics = {
      ...copyApiResult[index].characteristics,
      [characteristic]: {
        //@ts-ignore
        ...(copyApiResult[index].characteristics[characteristic]),
        like
      }
    }
    setApiResult(copyApiResult);
  }

  return (
    <div>
      <Header />
      <AnimalsList selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal} />
      {apiError && <p>Error: {apiError}</p>}
      {!apiError && (
        <>
          <p>Select any animal to display its characteristics below</p>
          <AnimalCards updateAnimalRating={updateAnimalRating} updateAnimalCharacteristicsLikeDislike={updateAnimalCharacteristicsLikeDislike} animals={apiResult} />
        </>
      )}
    </div>
  )
}

export default App
