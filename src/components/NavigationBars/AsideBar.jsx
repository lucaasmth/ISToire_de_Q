import React from 'react';
import "./AsideBar.css";

function createImage(){
    
}


function loadImages(){
    const ab = document.querySelector(".AsideBar");
    for(var i=0;i<5;i++)
    {
        var div = new HTMLDivElement();
        var img = new HTMLImageElement();
        img.src = "./assets/bubble-sprites.png";
        div.appendChild(img);
        ab.append(img);
    }

}
function loadDescription(){

}

const AsideBar = () => {
    return (
      <div className="AsideBar">
        {loadImages()}
      </div>
    );
}
export default AsideBar;