import React, { MouseEventHandler, useState } from 'react'

import './square.css'

interface SquareType{
  text:string
  handleClick: CallableFunction
  id: number
  playing:boolean
}

const Square:React.FC<SquareType> = ({text, handleClick, id, playing}) => {

  function click(){
    if (hasPlayed || !playing){
      return
    }
    handleClick(id);
    sethasPlayed(true);
    setstate(text);
  }

  const [state, setstate] = useState<string>('')
  const [hasPlayed, sethasPlayed] = useState<boolean>(false)

  return (
    <div className='square-container prevent-select' onClick={click}>
      {state}
    </div>
  )
}

export default Square