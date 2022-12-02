import React, { useRef } from 'react';
import "./BottomBar.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//on fait une popup avec reactjs-popup au milieu de l'écran lorsque l'on clique sur l'image

const BottomBar = () => {

    const ref = useRef();
    const openTooltip = () => ref.current.open();
    const closeIT = () => ref.current.close();
    const toggleTooltip = () => ref.current.toggle();
    return (
        <div className="bottomBar__left">
            <img src="./assets/chlamydia.jpg" alt="logo" className="bottomBar__logo" onClick={openTooltip} />
            <Popup ref={ref} modal nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={closeIT} style={{position:'absolute',top:'0',right:'0'}}>
                            &times;
                        </button>

                        <div className="header" style={{paddingTop:'20px'}}>  </div>
                        
                        <div className="actions">
                            
                            
                        </div>
                    </div>
                )}
            </Popup>
            <img src="./assets/chlamydia.jpg" alt="logo" className="bottomBar__logo" onClick={toggleTooltip} />
            <Popup ref={ref} modal nested>
                {ich => (
                    <div className="modal">
                        <button className="close" onClick={closeIT} style={{position:'absolute',top:'0',right:'0'}}>
                            &times;
                        </button>

                        <div className="header" style={{paddingTop:'20px'}}> Title </div>
                        <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quos, voluptas? Quisquam
                            quod, eos, ipsa, autem, nemo debitis ducimus repellendus voluptates asperiores nesciunt
                            doloremque, expedita corporis, voluptate, voluptas, alias, minima.{' '}
                        </div>
                        <div className="actions">
                            
                            
                        </div>
                    </div>
                )}
            </Popup>
            <img src="./assets/chlamydia.jpg" alt="logo" className="bottomBar__logo" onClick={openTooltip} />
            <Popup ref={ref} modal nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={closeIT} style={{position:'absolute',top:'0',right:'0'}}>
                            &times;
                        </button>

                        <div className="header" style={{paddingTop:'20px'}}> Modal Title </div>
                        <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quos, voluptas? Quisquam
                            quod, eos, ipsa, autem, nemo debitis ducimus repellendus voluptates asperiores nesciunt
                            doloremque, expedita corporis, voluptate, voluptas, alias, minima.{' '}
                        </div>
                        <div className="actions">
                            
                            
                        </div>
                    </div>
                )}
            </Popup>
            <img src="./assets/chlamydia.jpg" alt="logo" className="bottomBar__logo" onClick={openTooltip} />
            <Popup ref={ref} modal nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={closeIT} style={{position:'absolute',top:'0',right:'0'}}>
                            &times;
                        </button>

                        <div className="header" style={{paddingTop:'20px'}}> Modal Title </div>
                        <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quos, voluptas? Quisquam
                            quod, eos, ipsa, autem, nemo debitis ducimus repellendus voluptates asperiores nesciunt
                            doloremque, expedita corporis, voluptate, voluptas, alias, minima.{' '}
                        </div>
                        <div className="actions">
                            
                            
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
}
export default BottomBar;