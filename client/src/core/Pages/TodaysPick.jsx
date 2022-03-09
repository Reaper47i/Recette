import React, { useEffect, useState } from "react";

// const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`;
const url = "http://localhost:8000/topPick";

function stripHtml(dirtyString) {
  const doc = new DOMParser().parseFromString(dirtyString, "text/html");
  return doc.body.textContent || "";
}

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

  const summary = stripHtml(pick.summary);
  // console.log(pick);
  // console.log(typeof pick.summary);
  return (
    <div className="tp">
      <div className="tpContent">
        <img
          src={pick.image}
          alt="image"
          style={{ objectPosition: "center", objectFit: "contain" }}
        />
        <h1>{pick.title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default TodaysPick;
