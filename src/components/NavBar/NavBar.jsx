import './Navbar.css';

const Navbar = () => {

    function toMenu(){
        window.location.href = "#"
    }

    return (
      <div className="NavBar">
            <img src="./assets/sn1.jpg" alt="" srcset="" width="100" onClick={toMenu}/>
            
      </div>
    );
  }
  
  export default Navbar;