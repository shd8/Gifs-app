import React from "react";

const SearchInputs = ({
  searchString,
  onChangeSearchString,
  limit,
  onChangeLimit
}) => {
  return (
    <>
      <input
        type="text"
        name="Search"
        id=""
        defaultValue={searchString}
        onChange={onChangeSearchString}
      />
      <input
        type="number"
        name="Limit"
        id=""
        defaultValue={limit}
        onChange={onChangeLimit}
      />
    </>
  );
};

export default SearchInputs;
