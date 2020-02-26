import React, { useState, useEffect } from 'react';

import Button from '../Button'
import fetchDoggie from '../../utils/fetch.js'

import styles from './styles.module.scss'
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
    <>
      <div className={styles.dogPhotoContainer}>
        <img src={doggie} className={styles.dogPhoto} alt="a very good dog" />

        <div className={styles.fancyTextOverlay}>
          {'We ♥ our pups!'.split('').map((char, i) => <span key={i}>{char}</span>)}
        </div>
      </div>

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
    </>
  );
 }

export default App;
