import './SnapContent.css';
import { AboutMeSection } from '../AboutMeSection';
import { TechStackSection } from '../TechStackSection';
import { ContactSection } from '../ContactSection';
import { ProjectsSection } from '../ProjectsSection';


const SnapContent: React.FC = () => {
    
    return <main className='snap-main-container'>
        <AboutMeSection />
        <TechStackSection/>
        <ProjectsSection />
        <ContactSection />
    </main>
}

export { SnapContent }