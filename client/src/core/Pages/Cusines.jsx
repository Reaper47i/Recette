import React, { useEffect, useState } from "react";
import CusineTiles from "../layouts/CusineTiles";
import { motion } from "framer-motion";

const indURL = "http://localhost:8000/api/indian";

const Cusines = () => {
  const [indian, setIndian] = useState([]);
  const getInd = async () => {
    await fetch(indURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setIndian(data));
  };

  useEffect(() => {
    getInd();
  }, []);
  // console.log(indian);
  return (
    <div className="cusine">
      <h1>Indian</h1>
      <motion.div className="cus-content">
        {indian.map((ind) => {
          return <CusineTiles key={ind.id} title={ind.title} img={ind.image} />;
        })}
      </motion.div>
    </div>
  );
};

export default Cusines;
