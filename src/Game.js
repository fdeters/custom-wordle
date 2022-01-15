import React, { Component, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Game.css';

function Tile() {
  const [letter, setLetter] = useState("");

  return (
    <div className='game-tile'>{letter}</div>
  );
}

function GameKeyboard(props) {
  const handleChange = (input) => {
    console.log("Input changed: ", input);
  }

  const handleKeyPress = (button) => {
    console.log("Button pressed: ", button);
  }

  return (
    <Keyboard
      layoutName={"default"}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      layout={{
        default: ["q w e r t y u i o p", "a s d f g h j k l", "{enter} z x c v b n m {bksp}"],
      }}
    />
  );
}

function Game() {
  return (
    <GameKeyboard></GameKeyboard>
  );
}

export default Game;
