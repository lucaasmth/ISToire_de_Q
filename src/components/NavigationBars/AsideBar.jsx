import React from 'react';
import "./AsideBar.css";




const AsideBar = () => {
const descriptions = ["1",
                    "22",
                    "33",
                    "44",
                    "55 "];
        function onOver(index){
            alert(descriptions[index]);
                    }
    return (
        <div className='AsideBar'>
            <div className='imContainer'>
            <div className='im'><img alt='test' onMouseOver={()=>{onOver(0)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={()=>{onOver(1)}} src='./assets/hepatites.jpg'></img></div>
            <div className='im'><img onMouseOver={()=>{onOver(2)}} src='./assets/syphilis.jpg'></img></div>
            <div className='im'><img onMouseOver={()=>{onOver(3)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={()=>{onOver(4)}} src='./assets/chlamydia.jpg'></img></div>
            </div>
      </div>
    );
}
export default AsideBar;