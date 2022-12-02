import React from 'react'
import Lottie from 'react-lotties'
import animationData from './lotties/easter-egg.json';
import '../../CSS/App.css'


export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="test" >
        <div>
        <div className="App">
          <Lottie 
          options={defaultOptions}
            height={1000}
            width={2000}
          />
          </div>
        </div>
        </div>
    );
    
  }
  