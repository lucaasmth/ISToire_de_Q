import { Routes, Route, Outlet, Link } from "react-router-dom";
import BubbleShooter from "./components/BubbleShooter/BubbleShooter";
import Memory from "./components/Memory";
import AsideBar from "./components/NavigationBars/AsideBar";  
import BottomBar from "./components/NavigationBars/BottomBar";

function App() {
  return (
    <div className="App">
      <AsideBar></AsideBar>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
