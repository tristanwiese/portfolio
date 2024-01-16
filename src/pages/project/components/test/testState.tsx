import React, { useState } from 'react'

import './testState.css'

function TestState() {

    console.log('fired')

    function handleClick(){
        setcount(count);
    }

    const [count, setcount] = useState<number>(0);

  return (
    <div className='test-state-main col'>
        <div className='counter'>
            {count}
        </div>
        <button onClick={handleClick}>Increment</button>
    </div>

  )
}

export default TestState