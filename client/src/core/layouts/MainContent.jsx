import React from "react";
import TodaysPick from "../Pages/TodaysPick";
import SearchBar from "./SearchBar";

const MainContent = () => {
  return (
    <div className="main">
      <SearchBar />
      <TodaysPick />
    </div>
  );
};

export default MainContent;
