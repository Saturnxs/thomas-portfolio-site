import './SnapContent.css';
import { useBlink } from '../../Hooks/useBlink';
import { AboutMe } from '../AboutMe';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

const SnapContent: React.FC = () => {
    const [isLit] = useBlink();
    const scrollRef = useRef<HTMLDivElement>(null);

    useScrollSnap({ ref: scrollRef, duration: 0.5, delay: 0.5 });
    
    return (
        <div className='snap-main-container' ref={scrollRef}>
            <AboutMe isLit={isLit}/>
        </div>
    )
}

export { SnapContent }