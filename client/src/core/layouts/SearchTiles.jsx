import React from "react";

const SearchTiles = ({ name }) => {
  return (
    <>
      <div className="tiles">
        <input type="checkbox" name={name} id={name} />
        {name}
      </div>
    </>
  );
};

export default SearchTiles;
