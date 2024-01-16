import './moveTile.css'

import React from 'react'

interface MoveTileType{
    move:number
    player:string
    position:number
}

const MoveTile:React.FC<MoveTileType> = ({move, player, position}) => {
  return (
    <div className='move-tile-main'>
        <div className='move'>
            #{move}
        </div>
        <div className='player'>
            Player:{player}
        </div>
        <div className='position'>
            Position:{position}
        </div>
    </div>
  )
}

export default MoveTile