import './LightTitle.css';
import { useBlink } from '../../Hooks/useBlink';
import { ILightTitle } from '../../Interfaces/ILightTitle';
import VisibilitySensor from 'react-visibility-sensor';


const LightTitle: React.FC<ILightTitle> = ({ title, icon, text }) => {

    const [isLit, toggleIsLit] = useBlink();

    return (
        <header className="light-title-container">
            <VisibilitySensor
                onChange={(isVisible: boolean) => { toggleIsLit() }}
                scrollDelay={10}
            >
                <div className='light-title'>
                    <img src={icon} alt={title + " icon"} className={isLit ? 'light-on title-icon' : ' title-icon'}></img>
                    <h1 className={isLit ? 'title light-on' : 'title'}>{title}</h1>
                </div>
            </VisibilitySensor>
            {text}
        </header>
    );
};

export { LightTitle };