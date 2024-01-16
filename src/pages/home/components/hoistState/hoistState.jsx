import React, { useState } from 'react'
import Button from '../button';

export default function HoistState() {

    const [state, setstate] = useState(0);

    function handleClick(){
      setstate(state + 1);
    }

  return (
    <div className='box box-b'>
      <div className='title'>
        React HoistState
      </div>
      <div className='home-box-description'>
        Here we have three components sharing the same state by hoisting the the state out of the components and passing callback functions to the
        components
      </div>
      <div className='main-state prevent-select'>
          {state}
      </div>
      <div className='button-row row'>
        <Button customCount={state} handleClick={handleClick}/>
        <Button customCount={state} handleClick={handleClick}/>
      </div>
    </div>
  )
}
