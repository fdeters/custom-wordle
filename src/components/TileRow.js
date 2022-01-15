import React, { useState } from 'react';
import Tile from './Tile.js';
import './style/TileRow.css';

function TileRow() {
    const [rowLength, setRowLength] = useState(5);

    const createRow = (numTiles) => {
        let row = [];
        for (let i=0; i<numTiles; i++) {
            row.push(<Tile></Tile>)
        }
        return row;
    }

    return (
        <div className='game-tile-row'>
            {createRow(rowLength)}
        </div>
    )
}

export default TileRow;