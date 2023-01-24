import { useBlink } from '../../Hooks/useBlink';
import './LightTitle.css';
import VisibilitySensor from 'react-visibility-sensor';

interface LightTitleProps {
    title: string;
    icon: string;
    text?: JSX.Element;
}

const LightTitle: React.FC<LightTitleProps> = ({ title, icon, text }) => {

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