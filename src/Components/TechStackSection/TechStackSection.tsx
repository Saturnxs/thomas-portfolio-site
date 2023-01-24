import './TechStackSection.css';
import { TechnologiesList } from './TechnologiesList';
import { LightTitle } from '../LightTitle';
import { StackContainer } from '../StackContainer';

const TechStackSection: React.FC = () => {
    return <section className='tech-stack-section' id='stack'>
        <LightTitle
            title='stack.'
            icon='static/svg/jupiter-icon.svg'
            text={<p className='body-text'>Some technologies and tools I use in my day by day to <strong>code</strong>, <strong>design</strong> and <strong>create</strong>.</p>}
        />
        <div className='tech-stack-container'>
            {TechnologiesList.map((technology, index) => {
                return <StackContainer
                    key={index}
                    field={technology.field}
                    technologies={technology.technologies}
                />
            })}
        </div>
    </section>
}

export { TechStackSection }