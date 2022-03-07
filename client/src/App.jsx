import "./Global.css";
import MainContent from "./core/layouts/MainContent";
import Navbar from "./core/layouts/Navbar";

function App() {
  return (
    <div className="App wh-100% main-bg">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
