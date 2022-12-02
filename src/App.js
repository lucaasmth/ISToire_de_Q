import Crosswords from './components/crosswords/Crosswords';
import React from 'react'
import Lottie from 'react-lotties'
import PropTypes from 'prop-types';
import ParticleBackground from 'react-particle-backgrounds'
import animationData from './lotties/127848-happy-spaceman.json';
import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactDOM from 'react-dom/client';
import './CSS/App.css'


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
        <Lottie 
        options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
      </div>
  );
  
}
