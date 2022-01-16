import React, { useState } from 'react';
import Tile from './Tile.js';
import './style/TileRow.css';

function TileRow(props) {    
    const renderRow = (numTiles) => {
        let row = [];
        for (let i=0; i<numTiles; i++) {
            row.push(
                <Tile key={i.toString()}
                      value={props.content[i]} />
            );
        }
        return row;
    }

    return (
        <div className='game-tile-row'>
            {renderRow(props.rowLength)}
        </div>
    )
}

export default TileRow;