import { LightTitle } from '../LightTitle';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
    return <section className="projects-section" id="projects">
        <LightTitle
            title="projects."
            icon='static/svg/mars-icon.svg'
            text={<p className='body-text'>Some <strong>code</strong> and <strong>design/production</strong> projects in which I've had worked.</p>}
        />
    </section>
};

export { ProjectsSection };