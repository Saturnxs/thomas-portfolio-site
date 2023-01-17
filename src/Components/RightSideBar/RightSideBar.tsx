import './RightSideBar.css';

interface RightSideBarProps {
    isLit: boolean;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ isLit }) => {

    return (
        <div className="side-bar right-side-bar">
            <div className='cord-light-mode'></div>
            <div className="planets-navigation side-bar-repetitive-container">
                <a href="#me">
                    <img alt='About me navigation button' src='static/svg/saturn-icon.svg' className={isLit ? 'planets-icons light-on' : 'planets-icons'}></img>
                </a>
                <a href="#stack">
                    <img alt='Stack navigation button' src='static/svg/jupiter-icon.svg' className={isLit ? 'planets-icons light-on' : 'planets-icons'}></img>
                </a>
                <a href="#projects">
                    <img alt='Projects navigation button' src='static/svg/mars-icon.svg' className={isLit ? 'planets-icons light-on' : 'planets-icons'}></img>
                </a>
                <a href="#contact">
                    <img alt='Contact navigation button' src='static/svg/earth-icon.svg' className={isLit ? 'planets-icons light-on' : 'planets-icons'}></img>
                </a>
                <div className={isLit ? 'vertical-line light-on' : 'vertical-line'}></div>
            </div>
        </div>
    )
}

export { RightSideBar }