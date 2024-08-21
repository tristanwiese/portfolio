import React from 'react'
import './calcScreen.css'
import { useSelector } from 'react-redux'
import { CounterState, state } from '../../../../../slices/counterSlice'



const CalculatorScreen = () => {

    const counter: CounterState = useSelector(state);

    return (
        <div className='calc-screen-main'>
            <div className='calc-screen-col'>
                <div className='calc-screen-value'>
                    {counter.value === "" ? "0" : counter.value}
                </div>
                <div className='calc-screen-total'>
                    {counter.total ?? ''}{counter.lastAction}
                </div>
            </div>
        </div>
    )
}

export default CalculatorScreen