import './SnapContent.css';
import { AboutMeSection } from '../AboutMeSection';
import { TechStackSection } from '../TechStackSection';
import { ContactSection } from '../ContactSection';


const SnapContent: React.FC = () => {
    
    return <main className='snap-main-container'>
        <AboutMeSection />
        <TechStackSection/>
        <ContactSection />
    </main>
}

export { SnapContent }