import { useState, useEffect } from 'react';
import './App.css'
import { AnimalsList } from './components/AnimalsList'
import { Card } from './components/common/Card'
import { Rating } from './components/common/Rating'
import { AnimalCards } from './components/AnimalCards';
import { transformApiResponse } from './utils';

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    if (selectedAnimal) {
      fetch(`${import.meta.env.VITE_API_URL}${selectedAnimal}`, {
        method: "GET",
        headers: {
          //@ts-ignore
          "X-Api-Key": import.meta.env.VITE_API_KEY
        }
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setApiResult(transformApiResponse(response));
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [selectedAnimal]);

  return (
    <div>
      <h1 className="font-bold underline text-xl">
        Animals - Characteristics
      </h1>
      <div style={{ marginTop: "20px" }}></div>
      <p>
        Animals are multicellular eukaryotes that lack cell walls. All animals are heterotrophs. Animals have sensory organs, the ability to move, and internal digestion.
      </p>
      <AnimalsList selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal} />
      <p>Select any animal to display its characteristics below</p>
      <AnimalCards animals={apiResult} />
    </div>
  )
}

export default App
