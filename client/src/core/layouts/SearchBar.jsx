import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { motion } from "framer-motion";

const advList = {
  show: { opacity: 1, height: "100%" },
  notShow: { opacity: 0, height: 0 },
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
        transition={{ type: "tween" }}
      >
        <div className="adv-items">
          <label htmlFor="cusines">Cusines : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">Diet : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">intolernce : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">Type : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">Include Ingredients : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">Exclude Ingredients : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
        <div className="adv-items">
          <label htmlFor="cusines">Sort : </label>
          <select className="adv-selector" name="cusines" id="cusine">
            <option value="indian">indian</option>
          </select>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;

/**
 * diet
intolerance
type
include igredients
exclude ingredients
sort
 */
