import Crosswords from './components/crosswords/Crosswords';
import React from 'react'
import Lottie from 'react-lotties'
import PropTypes from 'prop-types';
import ParticleBackground from 'react-particle-backgrounds'
import animationData from './lotties/127848-happy-spaceman.json';

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
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}