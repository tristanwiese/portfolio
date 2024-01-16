import React, { useState } from 'react'
import './searchStringInput.css'

interface SearchStringInputType{
    handleWord: (word: string) => any
}

function SearchStringInput({handleWord}: SearchStringInputType){

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) =>{
        handleWord(event.currentTarget.value);
    }

  return (
    <div>
        <label htmlFor="input">Search Word</label>
        <input type="text" name="input" id="" onChange={handleInputChange}/>
    </div>
  )
}

export default SearchStringInput