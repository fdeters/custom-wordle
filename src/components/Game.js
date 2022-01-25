import React, { useState } from 'react';
import Board from './Board.js';
import GameKeyboard from './GameKeyboard.js';
import '../style/Game.css';
import * as helpers from '../helpers/helpers.js';
import wordList from '../assets/5-letter-words.json';

function Game() { 
  // game format/setup states
  const [boardLength, setBoardLength] = useState(6);
  const [rowLength, setRowLength] = useState(5);

  // in-game states
  const [inputs, setInputs] = useState("");
  const [rowStates, setRowStates] = useState(
    helpers.createEmptyBoardState(boardLength, rowLength)
  );
  const [currentRow, setCurrentRow] = useState(0);
  
  // functions
  const handleInput = (input) => {
    setInputs(input);
  }

  const handleRowSubmission = () => {
    /* Handles a user pressing "enter" */
    let isValidSubmission = inputs.length === rowLength;
    isValidSubmission = isValidSubmission && helpers.wordIsInWordList(inputs, wordList);

    if (isValidSubmission) {
      let tempRowStates = rowStates;
      tempRowStates[currentRow] = inputs.split();
      setRowStates(tempRowStates);
      setCurrentRow(currentRow + 1);
      setInputs("");     
    } else if (!helpers.wordIsInWordList(inputs, wordList)){ //Does this fix it?
      alert("Your guess is not in the word list :(")
    } else{
      // TODO: this alert will now also trigger if the word isn't in the wordList, gotta fix that
      alert("Your guess is too short :(")
    }

    return isValidSubmission;
  }
  
  return (
    <div className='game'>
      <header>
        <div className='title'> ISLANDER WORDLE </div>
      </header>
      <Board inputs={inputs}
             rowLength={rowLength} 
             boardLength={boardLength} 
             currentRow={currentRow}
             rowStates={rowStates}></Board>
      <GameKeyboard handleInput={handleInput}
                    handleSubmission={handleRowSubmission} 
                    maxInputLength={rowLength} ></GameKeyboard>
    </div>
  );
}

export default Game;
