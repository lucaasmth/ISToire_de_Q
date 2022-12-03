import './Navbar.css';

const Navbar = () => {

    function toHome(){
        /* Aller au home */
    }

    return (
      <div className="NavBar">
            <img src="/assets/sn1.jpg" alt="" srcset="" width="100" onClick={toHome}/>
            
      </div>
    );
  }
  
  export default Navbar;