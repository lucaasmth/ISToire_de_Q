import React from 'react';
import "./BottomBar.css";


const BottomBar = () => {
    const descriptions = [
        "Cette maladie est...",
        "2",
        "3",
        "4",
        "6",
        "7"
    ];

    function onclick(index){
        alert(descriptions[index]);
    }
    return (
        <div className='BottomBar'>
            <div className='imContainerBottom'>
            <div className='im'><img alt='test' onClick={()=>{onclick(0)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={()=>{onclick(1)}} src='./assets/hepatites.jpg'></img></div>
            <div className='im'><img onClick={()=>{onclick(2)}} src='./assets/syphilis.jpg'></img></div>
            <div className='im'><img onClick={()=>{onclick(3)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={()=>{onclick(4)}} src='./assets/chlamydia.jpg'></img></div>
            </div>
      </div>
    );
}
export default BottomBar;