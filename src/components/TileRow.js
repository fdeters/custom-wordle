import React, { useState } from 'react';
import Tile from './Tile.js';
import './style/TileRow.css';

function TileRow(props) {
    const [rowLength, setRowLength] = useState(5);
    
    const createRow = (numTiles) => {
        let row = [];
        for (let i=0; i<numTiles; i++) {
            row.push(
                <Tile key={i.toString()}
                      value={props.inputs[i]} />
            );
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