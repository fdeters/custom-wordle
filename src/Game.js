import React, { Component, useState } from 'react';
import GameKeyboard from './components/GameKeyboard';
import TileRow from './components/TileRow.js';
import './Game.css';

function Game() {
  return (
    <div className='game'>
      <TileRow></TileRow>
      <GameKeyboard></GameKeyboard>
    </div>
  );
}

export default Game;
