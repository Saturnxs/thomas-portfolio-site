import './SnapContent.css';
import { AboutMeSection } from '../AboutMeSection';
import { TechStackSection } from '../TechStackSection';


const SnapContent: React.FC = () => {
    
    return <main className='snap-main-container'>
        <AboutMeSection />
        <TechStackSection/>
    </main>
}

export { SnapContent }