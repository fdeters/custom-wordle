import React, { useState } from 'react';

function Tile() {
    const [letter, setLetter] = useState("");
  
    return (
      <div className='game-tile'>{letter}</div>
    );
}

export default Tile;