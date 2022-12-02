import React, { useState } from 'react';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';
import "./anim.css";

const data = {
    
        across: {
            1: {
                clue: 'Groupe de virus',
                answer: 'PAPILLOMAVIRUS' ,
                row: 10,
                col: 0,
            },
            2: {
                clue: 'Monter au 7ème ciel',
                answer: 'ORGASME',
                row: 8,
                col: 2,

            },
            3: {
                clue:'Virus responsable du sida',
                answer: 'VIH',
                row: 12,
                col:7,
            },
            4: {
                clue:'Mesures pour contrer des risques',
                answer:'PREVENTION',
                row: 14,
                col: 6,},
                5: {
                    clue:'Couvre chef',
                    answer:'PRESERVATIF',
                    row: 16,
                    col: 13,
                },
                6: {
                    clue:'Virus très contagieux formant des cloques/plaies',
                    answer: 'HERPES',
                    row:18,
                    col: 13,
                },
            
            },
            down: {
                7: {
                    clue: 'Inflammation du foie',
                    answer: 'HEPATITE',
                    row: 7,
                    col: 8,
                },
            
            11: {
                clue: "Recherche d'une maladie",
                answer: 'DEPISTAGE',
                row: 13,
                col: 22,
            },
            8: {
                clue: 'La rondelle',
                answer: 'ANAL',
                row: 10,
                col: 1,
            },
            9: {
                clue: 'Aussi appelé “chaude-pisse”',
                answer: 'GONORRHEE',
                row: 11,
                col: 14,
            },
            10: {
                clue: 'Infection très contagieuse',
                answer: 'SYPHILIS',
                row: 16,
                col: 16,
            },
        },
};

const container={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
}

const Crosswords ={
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#3ab9f0',
}

const Score = {
    fontSize: '23px',
    borderRadius: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#3ab9f0',
}

const Button = {
    borderRadius: '20px',
    width: '150px',
    height: '50px',
    cursor: 'pointer',
    backgroundColor: '#3ab9f0',
    color: 'white',
    fontWeight: 'bold',
    border: '0',
    fontSize: '20px'
}

const ButtonsDiv = {
    display: 'flex',
    width: '600px', 
    justifyContent: 'space-around',
    alignItems: 'center',
}

export default function MyPage() {
    //deux bouttons qui permettent de checker la grille et de la reset en utilisant une ref pour le crossword
    const crosswordRef = React.useRef(null);

    const check = () => {
        if (crosswordRef.current.isCrosswordCorrect()) {
            shakeOn();
            setTimeout(() => { shakeOff() ; }, 50)
            setScore(++score);
            //alert('Correct!');
        } else {
            shakeOn();
            setTimeout(() => { shakeOff() ; }, 500)
            setScore(--score);
            //alert('Incorrect!');
        }
    };

    const reset = () => {
        setScore(0);
        crosswordRef.current.reset();
    };

    const answers = () => {
        crosswordRef.current.fillAllAnswers();
    }

    let [score, setScore] = useState(0);
    
    const [shake, shakeActive] = React.useState(false);

    const shakeOff = () => {
        shakeActive(false);
    };  
    
    const shakeOn = () => {
        shakeActive(true);
    };

    return (
        <div style={container}>
            <div style={Crosswords}>
            <div className={shake ? "score shake" : "score"} style={Score}><p>Score : {score}</p></div>
                <ThemeProvider
                 theme={{
                    columnBreakpoint: '9999px',
                    gridBackground: 'none',
                    cellBackground: '#ffe',
                    cellBorder: '#fca',
                    textColor: '#000',
                    numberColor: '#000000',
                    focusBackground: '#f0d0aa',
                    highlightBackground: '#fa7d98',
                  }}>
                    <Crossword
                        data={data}
                        ref={crosswordRef}
                        showClues={true}
                        showNumbers={true}
                        showSolution={false}
                    />
                </ThemeProvider>
            </div>
            <div className='buttons' style={ButtonsDiv}>
                <button style={Button} onClick={check}>Check</button>
                <button style={Button} onClick={reset}>Reset</button>
                <button style={Button} onClick={answers}>Fill all answers</button>
            </div>
        </div>
    );
}