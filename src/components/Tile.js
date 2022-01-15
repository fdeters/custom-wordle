import React, { useState } from 'react';
import './style/Tile.css';

function Tile() {
    const [letter, setLetter] = useState("d");
  
    return (
      <div className='game-tile'>{letter}</div>
    );
}

export default Tile;