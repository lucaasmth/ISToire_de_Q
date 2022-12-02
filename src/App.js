import { Routes, Route, Outlet, Link } from "react-router-dom";
import BubbleShooter from "./components/BubbleShooter/BubbleShooter";
import Memory from "./components/Memory";
import Scenario from "./components/Scenario";
import Navbar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="scenario/:id" element={<Scenario />} />
          <Route path="memory" element={<Memory />} />
          <Route path="crosswords" element={<div>Crosswords</div>} />
          <Route path="bubble" element={<BubbleShooter />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* <nav>
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
  </nav> */}

      <Navbar />
  
      <hr />

      <Outlet />
    </div>
  );
}



