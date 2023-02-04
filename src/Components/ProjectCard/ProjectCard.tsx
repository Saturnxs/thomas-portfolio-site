import { useState } from 'react';
import { IProject } from '../../Interfaces/IProject';
import './ProjectCard.css';

const ProjectCard: React.FC<IProject> = ({ title, subtitle, year, icon, banner, color, fontColor, stack, shortDescription, description, images, links }) => {
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    return <>
        {!isHovering && <div
            className="project-card project-card-cover"
            style={{ backgroundImage: `url(${banner})` }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        ></div>}
        {isHovering && <div 
            className="project-card project-card-hover"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        >
            <h1 className="title">{title}</h1>
        </div>}
            
    </>
}

export { ProjectCard };