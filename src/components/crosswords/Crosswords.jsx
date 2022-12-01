import React from 'react';

import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';

const data = {
    
        across: {
          1: {
            clue: 'Groupe de virus',
            answer: 'Papillomavirus' ,
            row: 10,
            col: 0,
          },
          2: {
            clue: 'Monter au 7ème ciel',
            answer: 'Orgasme',
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
            col: 6,
          },
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
          8: {
            clue: 'La rondelle',
            answer: 'ANAL',
            row: 10,
            col: 1,
          },
          9: {
            clue: 'Aussi appelé “chaude-pisse”',
            answer: 'GONORHEE',
            row: 11,
            col: 14,
          },
          10: {
            clue: 'Infection très contagieuse',
            answer: 'SYPHILIS',
            row: 16,
            col: 16,
          },
          11: {
            clue: "Recherche d'une maladie",
            answer: 'DEPISTAGE',
            row: 13,
            col: 22,
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

export default function MyPage() {
    //deux bouttons qui permettent de checker la grille et de la reset en utilisant une ref pour le crossword
    const crosswordRef = React.useRef(null);

    const check = () => {
        if (crosswordRef.current.isCrosswordCorrect()) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    };

    const reset = () => {
        crosswordRef.current.reset();
    };

  
    return (
        <div style={container}>
            <div style={Crosswords}>
                <ThemeProvider
                 theme={{
                    columnBreakpoint: '9999px',
                    gridBackground: 'none',
                    cellBackground: '#ffe',
                    cellBorder: '#fca',
                    textColor: '#fff',
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
            <button onClick={check}>Check</button>
            <button onClick={reset}>Reset</button>
        </div>

       
        
    );
}