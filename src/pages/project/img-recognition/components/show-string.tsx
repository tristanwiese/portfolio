import React from "react";
import StringGen from '../funcs/generate-string';

import './show-string.css'

interface ShowStringType{
    stringLen: number,
    searchString: string
}

const ShowString:React.FC<ShowStringType> = ({stringLen, searchString}) => {

    let string = new StringGen();

    let randomString = string.generateRandomString(stringLen, searchString);

    let obj = string.findText(randomString, searchString);

    
  return obj.after !== '' ? (
    <div className="show-text-main">
        <p className="description">
            In this simple little example random text is generated on the left and when a word is given to look for it is injected into the random block of text in a random position. Then on the right it scrubs throught the text looking for the input text and then on finding it highlights it
        </p>
        <div className="show-text-row">
            <div className="string-main text-container">
                <h2>Random Text</h2>
                <p>{randomString}</p>
            </div>
            <div className="found-string text-container">
                <h2>Scrubbed Text</h2>
                {obj?.before}<b><i><span style={{color: 'red'}}>{obj?.middle}</span></i></b>{obj?.after}
            </div>
        </div>
    </div>
  ) :(
    <div className="show-text-main">
        <p className="description">
            In this simple little example random text is generated on the left and when a word is given to look for it is injected into the random block of text in a random position. Then on the right it scrubs throught the text looking for the input text and then on finding it highlights it
        </p>
        <div className="show-text-row">
            <div className="string-main text-container">
                <h2>Random Text</h2>
                <p>{randomString}</p>
            </div>
            <div className="found-string text-container">
                <h2>Scrubbed Text</h2>
                {randomString}
            </div>
        </div>
    </div>
  ) 
}

export default ShowString