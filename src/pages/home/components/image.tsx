import { useState } from 'react';
import './image.css';

import React from 'react';

function Image(){

    const [animate, setanimate] = useState<boolean>(false)

    function quickRotate(){
        console.log('test');
        setanimate(true);
        setTimeout(()=>{
            setanimate(false);
        }, 4000)
    }

    let html = (
        <div className='image-container'> 
            <img onClick={quickRotate} src="logo192.png" alt="react-logo.png" className={animate?" image quickRotate" : "image"}></img>
        </div>
    )

    return html
}

export default Image;