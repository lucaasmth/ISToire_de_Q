import React from 'react';

import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';

const data = {
    
        across: {
          1: {
            clue: 'one plus one',
            answer: 'Papillomavirus' ,
            row: 10,
            col: 0,
          },
          2: {
            clue: '',
            answer: 'Orgasme',
            row: 8,
            col: 2,

          },
          3: {
            clue:'',
            answer: 'VIH',
            row: 12,
            col:7,
          },
          4: {
            clue:'',
            answer:'prevention',
            row: 14,
            col: 6,
          },
          5: {
            clue:'',
            answer:'preservatif',
            row: 16,
            col: 13,
          },
          6: {
            clue:'',
            answer: 'herpes',
            row:18,
            col: 13,
          },
        },
        down: {
          2: {
            clue: 'three minus two',
            answer: 'ONE',
            row: 0,
            col: 2,
          },
        },
      
};

const container={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
}

const Crosswords ={
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'blue',

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
                    numberColor: '#9f9',
                    focusBackground: '#f00',
                    highlightBackground: '#f99',
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