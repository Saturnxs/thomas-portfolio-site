import { useState } from 'react';
import { IProject } from '../../Interfaces/IProject';
import './ProjectCard.css';

const ProjectCard: React.FC<IProject> = ({
  title,
  subtitle,
  year,
  icon,
  banner,
  color,
  fontColor,
  stack,
  shortDescription,
  description,
  images,
  links,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`project-card ${isHovering ? 'hovering' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className='project-card-banner'
        style={{ backgroundImage: `url(${banner})` }}
      />
      {isHovering && (
        <div
          className='project-card-overlay'
          style={{ backgroundColor: color }}
        >
          <div className='project-card-content'>
            <h1 className='title'>{title}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProjectCard };
