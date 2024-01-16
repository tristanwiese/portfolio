import './moveBoard.css'

import React from 'react'

import MoveTile from './moveTile'

interface Move{
    moves: Array<{[key: string]: any}>
}

const MoveBoard:React.FC<Move> = ({moves}) => {

  return (
    <div className='move-board-main'>
        {
            moves.map((move, idx) => 
            <MoveTile move={move.move} player={move.player} position={move.position} key={idx}/>
            
            )
        }
    </div>
  )
}

export default MoveBoard