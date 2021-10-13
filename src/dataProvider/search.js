const API_KEY = "f17611b7";

const responseToJson = response => response.json();

export default searchWord => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchWord}&type=movie`
  ).then(responseToJson);
};
