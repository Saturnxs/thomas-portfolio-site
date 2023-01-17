import './SnapContent.css';
import { useBlink } from '../../Hooks/useBlink';
import { AboutMe } from '../AboutMe/AboutMe';

const SnapContent: React.FC = () => {
    const [isLit] = useBlink();
        
    return (
        <div className='snap-main-container'>
            <AboutMe isLit={isLit}/>
        </div>
    )
}

export { SnapContent }