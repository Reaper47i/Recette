import React from "react";
import DiscoverTiles from "../layouts/DiscoverTiles";

const Discover = () => {
  return (
    <div className="discover">
      <h1>Discover Recipes</h1>
      <div className="disc-content">
        <DiscoverTiles />
      </div>
    </div>
  );
};

export default Discover;
