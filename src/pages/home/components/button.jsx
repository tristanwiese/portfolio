import {useState} from 'react';

import './button.css';


function Button({
    handleClick = function(state, setState){
        setState(state + 1);
    },
    customCount
}){

    const [count, setcount] = useState(0);

    let html = (
        <button className="button prevent-select" onClick={()=>handleClick(count, setcount)}>
            <div className='text'>
                {customCount?? count}
            </div>
        </button>
    );
    return html;
}


export default Button;
