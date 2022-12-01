import React from 'react';
import "./BottomBar.css";

// function loadImages(imagefiles) {
//     // Initialize variables
//     loadcount = 0;
//     loadtotal = imagefiles.length;
//     preloaded = false;
    
//     // Load the images
//     var loadedimages = [];
//     for (var i=0; i<imagefiles.length; i++) {
//         // Create the image object
//         var image = new Image();
        
//         // Add onload event handler
//         image.onload = function () {
//             loadcount++;
//             if (loadcount === loadtotal) {
//                 // Done loading
//                 preloaded = true;
//             }
//         };
        
//         // Set the source url of the image
//         image.src = imagefiles[i];
        
//         // Save to the image array
//         loadedimages[i] = image;
//     }
    
//     // Return an array of images
//     return loadedimages;
// }

function loadListe() {
    return (<li><img src="./assets/bubble-sprites.png" width="100"></img></li>)
}

const BottomBar = () => {
    return (
      <div className="BottomBar">
            <div className="Traitement">
                <ul className="left-side">
                    {loadListe()}
                </ul>
                <ul className="rigth-side">
                    {loadListe()}
                </ul>
            </div>
      </div>
    );
}
export default BottomBar;