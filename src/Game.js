import React, { useState } from 'react';
import './Game.css';

function Tile () {
  const [letter, setLetter] = useState(null);

  return (
    <div className='game-tile'></div>
  );
}

function Game() {
  return (
    <Tile></Tile>
  );
}

export default Game;
