import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const url = "http://localhost:8000/topPick";

const TodaysPick = () => {
  const [pick, setPick] = useState({});
  const getData = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setPick(data[0]));
  };
  useEffect(() => {
    getData();
  }, []);

  const doc = `${pick.summary}`;

  return (
    <div className="tp">
      <div className="tpContent">
        <img
          src={pick.image}
          alt="image"
          style={{ objectPosition: "center", objectFit: "contain" }}
        />
        <h1>{pick.title}</h1>
        <p>{parse(doc)}</p>
      </div>
    </div>
  );
};

export default TodaysPick;
