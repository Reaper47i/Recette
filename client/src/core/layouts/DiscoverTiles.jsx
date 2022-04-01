import React from "react";

const DiscoverTiles = ({ title, img, time, servings }) => {
  return (
    <div className="disc-tiles">
      <img src={img} alt={title} height="240px" />
      <h4>{title}</h4>
      <p>Preparation Time - {time}</p>
      <p>Servings - {servings}</p>
    </div>
  );
};

export default DiscoverTiles;
