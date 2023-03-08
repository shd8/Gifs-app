import React, { useState, useEffect } from "react";
import { getRandomWord } from "../../../services/apiServices";
import "./styles.scss";

const RandomWordsGenerator = ({ wordSetter }) => {
  const [word, setWord] = useState("");

  const generateRandomWord = async () => {
    getRandomWord().then((res) => {
      setWord(res);
    });
  };

  useEffect(() => {
    wordSetter(word);
  }, [word]);

  return (
    <section className="random-words">
      <button type="button" onClick={generateRandomWord}>
        Generate a random word !
      </button>
      <span>Your last random word was: {word}</span>
    </section>
  );
};

export default RandomWordsGenerator;
