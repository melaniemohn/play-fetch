import React, { useState, useEffect } from 'react';

import '../../styles/styles.scss';

function App() {
  const [doggie, setDoggie] = useState('');

  useEffect(() => {
    async function fetchDoggie() {
      const response = await fetch(
        'https://dog.ceo/api/breeds/image/random',
      );
      return await response.json();
    }

    fetchDoggie().then(response => setDoggie(response.message));
  }, []);

  return (
    <div className="App">
      <h1>hey little doggie</h1>
      <img src={doggie} className="" alt="" />
    </div>
  );
 }

export default App;
