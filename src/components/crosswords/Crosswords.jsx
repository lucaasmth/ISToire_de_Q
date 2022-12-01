import React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

const data = {
    
        across: {
          1: {
            clue: 'one plus one',
            answer: 'TWO',
            row: 0,
            col: 0,
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
                <Crossword
                    data={data}
                    ref={crosswordRef}
                />
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <button onClick={check}>Check</button>
                <button onClick={reset}>Reset</button>
            </div>

            
        </div>

        

        
    );   
}