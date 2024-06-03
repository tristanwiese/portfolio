import React from 'react'
import './calculatorTile.css'

interface CalculatorTileType {
    text: String,
    onClickTile: Function,
    index: number
}

const CalculatorTile: React.FC<CalculatorTileType> = ({ text, onClickTile, index }) => {

    return (
        <div className={`calc-tile-main index-${index}`} onClick={() => onClickTile(text)}>
            <div className='calc-tile-text'>
                {text}
            </div>
        </div>
    )
}

export default CalculatorTile