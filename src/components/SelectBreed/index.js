import React, { useState, useEffect } from 'react';

import fetchDoggie from '../../utils/fetch.js'

import styles from './styles.module.scss';

export default function SelectBreed({ handleChange }) {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    fetchDoggie('https://dog.ceo/api/breeds/list/all').then(response => {
      setBreedList(Object.keys(response.message));
    });
  }, []);

  return (
    <div className={styles.selectContainer}>
      <label>or, find by breed:</label>
      <select
        onChange={
          event => {
            const breedName = event.target.value
            const imageUrl = `https://dog.ceo/api/breed/${breedName}/images/random`
            handleChange(imageUrl)
          }
        }
      >
        {breedList.map(breed => {
          return (
            <option key={breed} value={breed}>
              {breed}
            </option>
          )
        })}
      </select>
    </div>
  )
}
