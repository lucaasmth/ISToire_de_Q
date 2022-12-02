import React from 'react';
import "./AsideBar.css";




const AsideBar = () => {
const descriptions = ["Cette maladie 1.. Ses traitements ... Ses protections... ",
                    "Cette maladie 2.. Ses traitements ... Ses protections...",
                    "Cette maladie 3.. Ses traitements ... Ses protections...",
                    "Cette maladie 4.. Ses traitements ... Ses protections...",
                    "Cette maladie 5.. Ses traitements ... Ses protections... "];
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