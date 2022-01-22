import React, { useState } from 'react';
import '../style/Tile.css';

const letterToUpperCase = (text) => {
  return text === undefined ? "" : String(text).toUpperCase();
}

function Tile(props) {
    return (
      <div className='game-tile'>{letterToUpperCase(props.value)}</div>
    );
}

export default Tile;