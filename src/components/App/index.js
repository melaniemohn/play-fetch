import React, { useState, useEffect } from 'react';

import Button from '../Button';
import SelectBreed from '../SelectBreed';
import fetchDoggie from '../../utils/fetch.js';

import styles from './styles.module.scss';
import '../../styles/styles.scss';

function App() {
  const randomImageUrl = 'https://dog.ceo/api/breeds/image/random';

  const [doggie, setDoggie] = useState('');
  const [requestUrl, setRequestUrl] = useState(randomImageUrl);
  const [refreshRandom, toggleRefreshRandom] = useState(false);

  useEffect(() => {
    fetchDoggie(requestUrl).then(response => {
      setDoggie(response.message);
    });
  }, [requestUrl, refreshRandom]);

  return (
    <>
      <div className={styles.dogPhotoContainer}>
        <img src={doggie} className={styles.dogPhoto} alt="a very good dog" />

        <div className={styles.fancyTextOverlay}>
          {'We ♥ our pups!'.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>

      <Button
        type="button"
        onClick={() => {
          toggleRefreshRandom(!refreshRandom);
          setRequestUrl(randomImageUrl);
        }}
      >
        Show me a random dog!
      </Button>
      <SelectBreed handleChange={setRequestUrl} />
    </>
  );
}

export default App;
