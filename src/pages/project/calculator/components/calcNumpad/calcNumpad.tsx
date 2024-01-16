import React from 'react'
import './calcNumpad.css'

import CalculatorTile from '../tiles/calculatorTile'

var Tiles: string[] = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "x",
    "0",
    "=",
    "C"
]

interface CalculatorNumpadType {
    onClickTile: Function
}


const CalculatorNumpad: React.FC<CalculatorNumpadType> = ({ onClickTile }) => {
    return (
        <div className='calc-numpad-main'>
            {
                Tiles.map((key, index) => {
                    return <CalculatorTile text={key} key={key} onClickTile={onClickTile} />
                })
            }
        </div>
    )
}

export default CalculatorNumpad