import './SideNavbar.css';
import { LeftSideBar } from '../LeftSideBar';
import { RightSideBar } from '../RightSideBar';
import { useBlink } from '../../Hooks/useBlink';

const SideNavbar: React.FC = () => {
    const [isLit] = useBlink();

    return <div className='nav'>
        <LeftSideBar isLit={isLit}/>
        <RightSideBar isLit={isLit}/>
    </div>
}

export { SideNavbar };