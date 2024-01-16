import React from 'react'
import './project.css'
import Calculator from './calculator/calculator'

const Project = () => {
    return (
        <div className='project-main'>
            <div className='project-header'>
                <h1>
                    Redux Calculator
                </h1>
                <p>
                    This is a calculator that uses React-Redux for state management
                </p>
            </div>
            <Calculator />
        </div>
    )
}

export default Project