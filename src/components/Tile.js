import React, { useState } from 'react';
import './style/Tile.css';

function Tile(props) {
    return (
      <div className='game-tile'>{props.value}</div>
    );
}

export default Tile;