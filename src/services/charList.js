export const getCharactersList = () => {
  const result =  fetch("https://swapi.info/api/people")
    .then((res) => res.json())
    .catch((error) => error)

  return result;
}