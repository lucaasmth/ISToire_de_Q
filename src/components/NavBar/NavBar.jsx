import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="NavBar">
      <img src="/assets/sn1.jpg" alt="" srcset="" width="100" onClick={() => { navigate("/") }}/>
    </div>
  );
}
  
export default Navbar;