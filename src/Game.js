import React, { Component, useState } from 'react';
import GameKeyboard from './components/GameKeyboard';
import TileRow from './components/TileRow.js';
import './Game.css';

function Game() { 
  const [inputs, setInputs] = useState("");
  
  const handleInput = (input) => {
    setInputs(input);
  }
  
  return (
    <div className='game'>
      <TileRow inputs={inputs}></TileRow>
      <GameKeyboard handleInput={handleInput}></GameKeyboard>
    </div>
  );
}

export default Game;
