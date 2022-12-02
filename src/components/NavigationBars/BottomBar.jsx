import React, { useRef } from 'react';
import "./BottomBar.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const BottomBar = () => {
    // function setAlert(i) {
    //     let descriptions = [""];
    //     alert(description[i]);
    // }
    const ref = useRef();
    const openTooltip = () => ref.current.open();
    return (
        <div className="container">
            <div className="BottomBar">
            {/* <div  className="im">
                <img onClick={setAlert(0)} src="./assets/chlamydia.jpg" alt="" srcset="" />
            </div>
            <div className="im">
                <img onClick={setAlert(1)} src="./assets/gonorhée.jpg" alt="" srcset="" />
            </div>
            <div className="im">
                <img onClick={setAlert(2)} src="./assets/hepatites.jpg" alt="" srcset="" />
            </div>
            <div className="im">
                <img onClick={setAlert(3)} src="./assets/sn1.jpg" alt="" srcset="" />
            </div>
            <div className="im">
                <img onClick={setAlert(4)} src="./assets/sn2.jpg" alt="" srcset="" />
            </div>
            <div className="im">
                <img onClick={setAlert(5)} src="./assets/syphilis.jpg" alt="" srcset="" />
            </div> */}
            <Popup trigger={<img onClick={openTooltip} src="./assets/chlamydia.jpg" alt="" srcset="" />} position="right center">
                <div>Popup content here !!</div>
            </Popup>
            </div>
        </div>
    );
}
export default BottomBar;