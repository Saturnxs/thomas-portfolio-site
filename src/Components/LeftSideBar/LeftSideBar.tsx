import './LeftSideBar.css';

interface LeftSideBarProps {
    isLit: boolean;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ isLit }) => {

    return <div className="side-bar left-side-bar">
        <a href="https://github.com/Saturnxs">
            <img alt='Thomas BM logo' src='static/svg/thomas-logo.svg' className={isLit ? 'logo light-on' : 'logo'}></img>
        </a>
        <div className="social-media side-bar-repetitive-container">
            <a href="https://github.com/Saturnxs" target="_blank" rel="noreferrer">
                <img alt='Github logo' src='static/svg/github-icon.svg' className={isLit ? 'social-media-icons light-on' : 'social-media-icons'}></img>
            </a>
            <a href="https://www.linkedin.com/in/thomas-bermudez-mora/" target="_blank" rel="noreferrer">
                <img alt='Linkedin logo' src='static/svg/linkedin-icon.svg' className={isLit ? 'social-media-icons light-on' : 'social-media-icons'}></img>
            </a>
        </div>
        <select className="language-selector glowing-hover">
            <option value="en">en</option>
            <option value="es">es</option>
        </select>
    </div>
}

export { LeftSideBar }