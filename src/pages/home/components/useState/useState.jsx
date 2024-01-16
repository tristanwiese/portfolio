import React from 'react'

import Button from '../button';

export default function UseStateBox() {
  return (
    <div className='box-a box'>
          <div>
          <div className='title'>
            React UseState
          </div>
          <div className='home-box-description'>
            This shows off React's state management hook called useState.
            It remembers the state of a variable and uses a function to change and call a rerender
          </div>
          </div>
          <div className='button-row row'>
            <Button/>
            <Button/>
          </div>
      </div>
  )
}
