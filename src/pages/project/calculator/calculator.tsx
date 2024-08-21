import React from 'react'
import './calculator.css'
import CalculatorScreen from './components/screen/calcScreen'
import CalculatorNumpad from './components/calcNumpad/calcNumpad'

import { useDispatch } from 'react-redux'
import { count, reset, display, action, backspace } from '../../../slices/counterSlice'

const Calculator = () => {

    const dispatch = useDispatch();

    function onClickTile(text: string) {
        if (!isNaN(parseFloat(text))) {
            dispatch(count(text))
        } else {
            switch (text) {
                case 'C':
                    dispatch(reset());
                    break
                case '=':
                    dispatch(display());
                    break
                case '<-':
                    dispatch(backspace())
                    break
                default:
                    dispatch(action(text));
                    break;
            }
        }
    }

    return (
        <div className='calc-main prevent-select'>
            <CalculatorScreen />
            <CalculatorNumpad onClickTile={onClickTile} />
        </div>
    )
}

export default Calculator