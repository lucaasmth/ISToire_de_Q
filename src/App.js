import { Routes, Route, Outlet, Link } from "react-router-dom";
import BubbleShooter from "./components/BubbleShooter/BubbleShooter";
import Memory from "./components/Memory";
import Crosswords from "./components/crosswords/Crosswords";
import Scenario from "./components/Scenario";
import Navbar from "./components/NavBar/NavBar";
import Credit from "./components/Credit/Credit";
import AllBackground from "./components/AllBackground";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className="App">
      
      <AllBackground>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scenario/:id" element={<Scenario />} />
          <Route path="memory" element={<Memory />} />
          <Route path="crosswords" element={<Crosswords />} />
          <Route path="bubble" element={<BubbleShooter />} />         
          <Route path="credits" element={<Credit />} />

        </Route>
      </Routes>
      </AllBackground>

    </div>
  );
}

function Layout() {
  return (
    <div style={{background: 'white'}}>
      {/*<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scenario">Scenario</Link>
          </li>
          <li>
            <Link to="/memory">Memory</Link>
          </li>
          <li>
            <Link to="/crosswords">Crosswords</Link>
          </li>
          <li>
            <Link to="/bubble">Bubble</Link>
          </li>
        </ul>
  </nav>*/}

      <Navbar />
  
      <hr />

      <Outlet />
    </div>
  );
}



