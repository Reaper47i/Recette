import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { motion } from "framer-motion";

const advList = {
  show: { opacity: 1, height: "100%" },
  notShow: { opacitu: 0 },
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
        initial={{ opacity: 0, height: 0 }}
        variants={advList}
        animate={showList ? "show" : "notShow"}
      >
        <ul>
          <li>American</li>
          <li>English</li>
          <li>Indian</li>
          <li>Italian</li>
          <li>French</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SearchBar;
