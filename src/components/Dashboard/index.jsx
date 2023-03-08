import React, { useEffect, useState } from "react";
import { getGifs, apiURLGenerator } from "../../services/apiServices";
import KEY from "../../env";
import ListOfGifs from "./ListOfGifs";
import SearchInputs from "./SearchInputs";
import RandomWordsGenerator from "./RandomWordsGenerator";

const Dashboard = () => {
  const [gifs, setGifs] = useState([]);
  const [callingError, setCallingError] = useState("");
  const [searchString, setSearchString] = useState("cats");
  const [limit, setLimit] = useState(5);
  const [word, setWord] = useState("");

  const onChangeSearchString = (e) => setSearchString(e.target.value);
  const onChangeLimit = (e) => setLimit(e.target.value);

  useEffect(() => {
    getGifs(
      setCallingError,
      setGifs,
      apiURLGenerator(KEY, searchString, limit)
    );
  }, [searchString, limit]);

  useEffect(() => {
    getGifs(
      setCallingError,
      setGifs,
      apiURLGenerator(KEY, searchString, limit)
    );
  }, []);

  useEffect(() => {
    getGifs(setCallingError, setGifs, apiURLGenerator(KEY, word, limit));
  }, [word]);

  return (
    <section>
      <p>My Dashboard has many Gifs</p>
      <SearchInputs
        searchString={searchString}
        onChangeSearchString={onChangeSearchString}
        limit={limit}
        onChangeLimit={onChangeLimit}
      />
      <RandomWordsGenerator wordSetter={setWord} />
      <ListOfGifs callingError={callingError} gifs={gifs} />
    </section>
  );
};

export default Dashboard;
