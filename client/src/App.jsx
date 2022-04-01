import "./Global.css";
import Navbar from "./core/layouts/Navbar";
import TodaysPick from "./core/Pages/TodaysPick";
import Discover from "./core/Pages/Discover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cusines from "./core/Pages/Cusines";
import NewRecipes from "./core/Pages/NewRecipes";
import MealPlanner from "./core/Pages/MealPlanner";
import TopPicks from "./core/Pages/TopPicks";

function App() {
  return (
    <Router>
      <div className="App wh-100% main-bg">
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<TodaysPick />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/cusines" element={<Cusines />} />
            <Route path="/newRecipes" element={<NewRecipes />} />
            <Route path="/mealPlanner" element={<MealPlanner />} />
            <Route path="/topPick" element={<TopPicks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
