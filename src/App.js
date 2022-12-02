import {Outlet, Link } from "react-router-dom";
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
      <Home></Home>
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
