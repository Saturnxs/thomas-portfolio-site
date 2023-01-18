import './SnapContent.css';
import { AboutMe } from '../AboutMe';
import { TechStack } from '../TechStack';

const SnapContent: React.FC = () => {
    
    return <main className='snap-main-container'>
        <AboutMe />
        <TechStack />
    </main>
}

export { SnapContent }