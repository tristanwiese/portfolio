import React from 'react'
import './calculatorTile.css'

interface CalculatorTileType {
    text: String,
    onClickTile: Function
}

const CalculatorTile: React.FC<CalculatorTileType> = ({ text, onClickTile }) => {

    return (
        <div className='calc-tile-main' onClick={() => onClickTile(text)}>
            <div className='calc-tile-text'>
                {text}
            </div>
        </div>
    )
}

export default CalculatorTile