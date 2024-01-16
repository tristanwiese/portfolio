import React, { useState } from "react";

import './projectCard.css'

interface ProjectCardType{
    title:string,
    url:string,
    descriptionUrl:string | undefined,
    deploy?:string
}

const ProjectCard:React.FC<ProjectCardType> = ({title, descriptionUrl, url, deploy}) => {

    const [text, settext] = useState("Fetching Description...");

     function getDescription(){
        console.log(descriptionUrl);
        fetch(descriptionUrl!).then(function(body){
            return body.text();
        }).then(function(text){
            settext(text);
        })
    }

    getDescription();

    return(
  
        <a href={url} className="ref">
            <div className="relative">
                <div className='project-card'>
                    <div className="title">
                        {title}
                    </div>
                    <div className="project-description">
                        {text}
                    </div>
                    {
                        deploy !== null && <a href={deploy} className="deploy-url">{deploy}</a>
                    }
                </div>
                <div className="project-card-shadow"></div>
            </div>
        </a>
        
    );
}

export default ProjectCard;