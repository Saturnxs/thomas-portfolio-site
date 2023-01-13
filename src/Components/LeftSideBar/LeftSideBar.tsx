import './LeftSideBar.css';

interface LeftSideBarProps {
    isLit: boolean;
}

function LeftSideBar({ isLit }: LeftSideBarProps) {

    return (
        <div className="left-side-bar">
            <img alt='Thomas BM logo' src='static/svg/thomas-logo.svg' className={isLit ? 'logo light-on' : 'logo'}></img>
            <div className="social-media">
                <a href="https://github.com/Saturnxs" target="_blank" rel="noreferrer">
                    <img alt='Github logo' src='static/svg/github-logo.svg' className={isLit ? 'light-on' : ''}></img>
                </a>
                <a href="https://www.linkedin.com/in/thomas-bermudez-mora/" target="_blank" rel="noreferrer">
                    <img alt='Linkedin logo' src='static/svg/linkedin-logo.svg' className={isLit ? 'light-on' : ''}></img>
                </a>
            </div>
            <select className="language-selector">
                <option value="en">en</option>
                <option value="es">es</option>
            </select>
        </div>
    )
}

export { LeftSideBar }