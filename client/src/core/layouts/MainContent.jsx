import React from "react";
import Discover from "../Pages/Discover";
import TodaysPick from "../Pages/TodaysPick";
import SearchBar from "./SearchBar";

const MainContent = () => {
  return (
    <div className="main">
      <SearchBar />
      <TodaysPick />
      <Discover />
    </div>
  );
};

export default MainContent;
