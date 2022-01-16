import React, { useState } from 'react';
import TileRow from './TileRow';
import './style/Board.css';

function Board (props) {   
    const renderTileRow = (i) => {
        return (
            <TileRow key={i.toString()}
                     content={i === props.currentRow ? props.inputs : props.rowStates[i].join("")}
                    //  content={i === props.currentRow ? props.inputs : "apple"}
                     rowLength={props.rowLength} />
        );
    }
    
    const renderBoard = (numRows) => {
        let board = [];
        for (let i=0; i<numRows-1; i++) {
            board.push(
                renderTileRow(i)
            );
        }
        return board;
    }

    return (
        <div className='game-board'>
            {renderBoard(props.boardLength)}
        </div>
    );
}

export default Board;