import "./Global.css";
import Navbar from "./core/layouts/Navbar";
import SearchBar from "./core/layouts/SearchBar";
import TodaysPick from "./core/Pages/TodaysPick";

function App() {
  return (
    <div className="App wh-100% main-bg">
      <Navbar />
      <div className="wrapper">
        <SearchBar />
        <TodaysPick />
      </div>
    </div>
  );
}

export default App;
