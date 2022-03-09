import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { motion } from "framer-motion";
import { cusines } from "../data/Data";
import SearchTiles from "./SearchTiles";

const advList = {
  show: { opacity: 1, height: "100%" },
  notShow: { opacity: 0, height: "0" },
};

const SearchBar = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="searchBar">
      <input className="search" type="text" placeholder="Search" />
      <button className="search-btn">Search</button>
      <span>Advanced Search</span>
      <ChevronDown onClick={() => setShowList(!showList)} />
      <motion.div
        className="adv-list"
        initial={{ opacity: 0, height: "0" }}
        variants={advList}
        animate={showList ? "show" : "notShow"}
        transition={{ type: "tween" }}
      >
        {cusines.map((item) => {
          return <SearchTiles name={item} id={item} key={item} />;
        })}
      </motion.div>
    </div>
  );
};

export default SearchBar;
