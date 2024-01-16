import React from 'react'
import './bio-logo-image.css'

interface LogoImageComponent{
    path: string
    alt: string
    title: string
}

const LogoImage:React.FC<LogoImageComponent> = ({path, alt, title}) => {
    let html = (
        <div className="logo-image-container">
            <img 

                src={path} 
                className="bio-code-logo" 
                alt={alt}
                title={title??'logo'}

            ></img>
            <div className='logo-text'>
                {title??'Test'}
            </div>
        </div>
    );
    return html
}

export default LogoImage