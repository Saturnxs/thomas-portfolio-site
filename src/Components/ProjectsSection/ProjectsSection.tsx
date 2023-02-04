import './ProjectsSection.css';
import { LightTitle } from '../LightTitle';
import { ProjectCard } from '../ProjectCard';
import { ProjectList } from '../../Data/ProjectList';

const ProjectsSection: React.FC = () => {
    return <section className="projects-section" id="projects">
        <LightTitle
            title="projects."
            icon='static/svg/mars-icon.svg'
            text={<p className='body-text'>Some <strong>code</strong> and <strong>design/production</strong> projects in which I've had worked.</p>}
        />
        <div className="projects-container">
            {ProjectList.map((project) => {
                return <ProjectCard
                    key={project.title}
                    {...project}
                />
            })}
        </div>
    </section>
};

export { ProjectsSection };