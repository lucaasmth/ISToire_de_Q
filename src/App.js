import { Routes, Route, Outlet, Link } from "react-router-dom";
import BubbleShooter from "./components/BubbleShooter/BubbleShooter";
import Memory from "./components/Memory";

function App() {
  return (
    <div className="App">
      <AsideBar></AsideBar>
    </div>
  );
}

export default App;
