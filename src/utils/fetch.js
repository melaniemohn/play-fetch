async function fetchDoggie(url) {
  const response = await fetch(url);
  return await response.json();
}

export default fetchDoggie;
