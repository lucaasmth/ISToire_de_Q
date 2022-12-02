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

    function onOver(index){
        alert(descriptions[index]);
    }
    return (
        <div className='BottomBar'>
            <div className='imContainer'>
            <div className='im'><img alt='test' onClick={() => {onOver(0)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={() => {onOver(1)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={() => {onOver(2)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={() => {onOver(3)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={() => {onOver(4)}} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onClick={() => {onOver(5)}} src='./assets/chlamydia.jpg'></img></div>
            </div>
      </div>
    );
}
export default BottomBar;