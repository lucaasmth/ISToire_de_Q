import React from 'react';
import "./AsideBar.css";




const AsideBar = () => {

    function onOver(e){
        alert();
    }
    return (
        <div className='AsideBar'>
            <div className='imContainer'>
            <div className='im'><img alt='test' onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            <div className='im'><img onMouseOver={onOver} src='./assets/chlamydia.jpg'></img></div>
            </div>
      </div>
    );
}
export default AsideBar;