import React from "react";

const CusineTiles = ({ title, img }) => {
  return (
    <div className="cus-tiles">
      <img src={img} alt={title} height="240px" />
      <h4>{title}</h4>
    </div>
  );
};

export default CusineTiles;
