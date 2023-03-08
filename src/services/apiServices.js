const getGifs = async (errorCallback, responseGather, url) => {
  try {
    const apiResponse = await fetch(url);
    const jsonResponse = await apiResponse.json();
    return responseGather(jsonResponse.data);
  } catch (error) {
    errorCallback("An error occurred");
  }
};

const getRandomWord = async () => {
  const word = await fetch("https://random-word-api.herokuapp.com/word");
  const jsonWord = await word.json();
  return jsonWord[0];
};

const apiURLGenerator = (key, searchString, limit) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchString}&limit=${limit}&offset=0&rating=g&lang=en`;

export { getGifs, apiURLGenerator, getRandomWord };
