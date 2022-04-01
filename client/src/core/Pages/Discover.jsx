import React, { useEffect, useState } from "react";
import DiscoverTiles from "../layouts/DiscoverTiles";
import SearchBar from "../layouts/SearchBar";

const url = "http://localhost:8000/api/disc";

const Discover = () => {
  const [disc, setDisc] = useState([]);
  const getDisc = async () => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setDisc(data));
  };
  useEffect(() => {
    getDisc();
  }, []);
  // console.log(disc);
  return (
    <div className="discover">
      <SearchBar />
      <h1>Discover Recipes</h1>
      <div className="disc-content">
        {disc.map((items) => {
          return (
            <DiscoverTiles
              key={items.id}
              title={items.title}
              img={items.image}
              time={items.readyInMinutes}
              servings={items.servings}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
