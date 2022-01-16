import React, { useState } from 'react';
import Board from './components/Board.js';
import GameKeyboard from './components/GameKeyboard';
import './Game.css';
import createEmptyBoardState from './helpers/helpers.js';

function Game() { 
  // game format/setup states
  const [boardLength, setBoardLength] = useState(6);
  const [rowLength, setRowLength] = useState(5);

  // in-game states
  const [inputs, setInputs] = useState("");
  const [rowStates, setRowStates] = useState(createEmptyBoardState(boardLength, rowLength));
  const [currentRow, setCurrentRow] = useState(0);
  
  const handleInput = (input) => {
    setInputs(input);
  }

  const handleRowSubmission = () => {
    // Handles a user pressing "enter"
    let isValidSubmission;

    if (inputs.length < rowLength) {
      isValidSubmission = false;
      console.log("Your guess is too short :(")
    } else {
      isValidSubmission = true;
      let tempRowStates = rowStates;
      tempRowStates[currentRow] = inputs.split();
      setRowStates(tempRowStates);
      setCurrentRow(currentRow + 1);
      setInputs("");
    }

    return isValidSubmission;
  }
  
  return (
    <div className='game'>
      <Board inputs={inputs}
             rowLength={rowLength} 
             boardLength={boardLength} 
             currentRow={currentRow}
             rowStates={rowStates}></Board>
      <GameKeyboard handleInput={handleInput}
                    handleSubmission={handleRowSubmission}></GameKeyboard>
    </div>
  );
}

export default Game;
