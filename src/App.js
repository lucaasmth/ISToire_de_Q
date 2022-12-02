import { Routes, Route, Outlet, Link } from "react-router-dom";
import Memory from "./components/Memory";
import Crosswords from "./components/crosswords/Crosswords";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="scenario" element={<div>Scénario</div>} />
          <Route path="memory" element={<Memory />} />
          <Route path="crosswords" element={<Crosswords />} />
          <Route path="bubble" element={<div>Bubble</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
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
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default App;
