import React, { useState, useEffect } from 'react';

import Button from '../Button'
import fetchDoggie from '../../utils/fetch.js'

import '../../styles/styles.scss';

function App() {
  const randomImageUrl = 'https://dog.ceo/api/breeds/image/random';

  // const [breed, setSelectedBreed] = useState('');
  const [doggie, setDoggie] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [shouldRefreshRandom, toggleRefreshRandom] = useState(false)
  const [requestUrl, setRequestUrl] = useState(
    randomImageUrl
  );

  useEffect(() => {
    // setIsLoading(true);
    fetchDoggie(requestUrl).then(response => {
      setDoggie(response.message);
      // setIsLoading(false);
    });
   }, [requestUrl, shouldRefreshRandom]);

  return (
    <div className="App">
      <h1>hey little doggie</h1>
      <img src={doggie} className="" alt="" />
      <Button
        type="button"
        onClick={() => {
            // Wow this is a hacky way to override and rerun useEffect?
            toggleRefreshRandom(!shouldRefreshRandom)
            setRequestUrl(randomImageUrl)
          }
        }
      >
        Show me another!
      </Button>
    </div>
  );
 }

export default App;
