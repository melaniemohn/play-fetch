async function fetchDoggie(url) {
  console.info('playing fetch!')
  const response = await fetch(url);
  return await response.json();
}

export default fetchDoggie;
