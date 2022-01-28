import React, { useState } from 'react';
import Board from './Board.js';
import GameKeyboard from './GameKeyboard.js';
import '../style/Game.css';
import * as helpers from '../helpers/helpers.js';
import wordList from '../assets/5-letter-words.json';

function Game() { 
  /* STATE - GAME FORMAT & SETUP */
  const [boardLength, setBoardLength] = useState(6);
  const [rowLength, setRowLength] = useState(5);
  const [wordToGuess, setWordToGuess] = useState(wordList[0])

  /* STATE - IN-GAME */
  const [inputs, setInputs] = useState("");
  const [rowStates, setRowStates] = useState(
    helpers.createEmptyBoardState(boardLength, rowLength)
  );
  const [currentRow, setCurrentRow] = useState(0);
  
  /* FUNCTIONS */
  const handleInput = (input) => {
    setInputs(input);
  }

  const handleRowSubmission = () => {
    /* Handles a user pressing "enter" */

    let isValidSubmission = inputs.length === rowLength;
    isValidSubmission = isValidSubmission && helpers.wordIsInWordList(inputs, wordList);

    // check if the user got the word right
    let isCorrectGuess = wordToGuess === inputs;
    if (isCorrectGuess) {
      alert("You've guessed the word! Congratulations.")
    }

    // TODO: overhaul submission checking -> efficiently handle error alerts, update a guessedWords list, color keyboard, etc.

    if (isValidSubmission) {
      let tempRowStates = rowStates;
      tempRowStates[currentRow] = inputs.split();
      setRowStates(tempRowStates);
      setCurrentRow(currentRow + 1);
      setInputs("");     
    } else if (!helpers.wordIsInWordList(inputs, wordList)){
      alert("Your guess is not in the word list :(")
    } else {
      alert("Your guess is too short :(")
    }

    return isValidSubmission;
  }
  
  return (
    <div className='game'>
      <header>
        <div className='title'> ISLANDER WORDLE </div>
      </header>
      <div id='board-container'>
        <Board inputs={inputs}
              rowLength={rowLength} 
              boardLength={boardLength} 
              currentRow={currentRow}
              rowStates={rowStates}></Board>
      </div>
      <GameKeyboard handleInput={handleInput}
                    handleSubmission={handleRowSubmission} 
                    maxInputLength={rowLength} ></GameKeyboard>
    </div>
  );
}

export default Game;
