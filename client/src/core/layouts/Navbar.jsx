import React, { useState } from "react";
import logo from "/logo1.png";
import mobLogo from "/mob-logo.png";
import { Facebook, GitHub, Menu, Twitch, Twitter, X } from "react-feather";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
  transition: { type: "tween" },
};

const menuSize = {
  size: "35",
  color: "#330d5f",
  strokeWidth: "2",
};

// const socialSize = {
//   size: "20",
// };

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex flex-space-btwn mx-auto navbar">
      <div className="logo flex">
        <Link to="/">
          <img src={mobLogo} alt="brand logo" />
        </Link>
      </div>
      <div className="dialog flex flex-right wh-100">
        <div className="menu">
          {menu ? (
            <X {...menuSize} onClick={() => setMenu(!menu)} />
          ) : (
            <Menu {...menuSize} onClick={() => setMenu(!menu)} />
          )}
        </div>
      </div>

      <motion.div
        className="sidebar main-bg"
        initial={{ x: "100%" }}
        animate={menu ? "open" : "closed"}
        variants={variants}
        transition={"transition"}
      >
        <div className="sidebar-content">
          <ul>
            <Link onClick={() => setMenu(!menu)} to="/discover">
              Discover
            </Link>
            <Link onClick={() => setMenu(!menu)} to="/cusines">
              Cusines
            </Link>
            <Link onClick={() => setMenu(!menu)} to="/newRecipes">
              New Recipes
            </Link>
            <Link onClick={() => setMenu(!menu)} to="/">
              Top Picks
            </Link>
            <Link onClick={() => setMenu(!menu)} to="/mealPlanner">
              Meal Planner
            </Link>
          </ul>
          <div className="sb-about">
            <div>
              <Twitch size={35} />
              <GitHub size={35} />
              <Facebook size={35} />
              <Twitter size={35} />
            </div>
            <div>Recette v.0.0.1</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
