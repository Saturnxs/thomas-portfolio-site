import './FooterSection.css';

const FooterSection: React.FC = () => {
    return <footer>
        <img className='light-on footer-logo' src='static/svg/vertical-logo.svg' alt='Thomas Logo' />
        <div className='footer-signature'>
            <p className='body-text'>Crafted with </p>
            <img className='body-icon light-on heart-icon' src='static/svg/heart-icon.svg' alt='Love' />
            <p className='body-text'> by <a href='https://github.com/Saturnxs' target='_blank' rel='noreferrer'>@Saturnxs</a></p>    
        </div>
        <p className='body-text'>©2023 Thomas BM. All rights reserved.</p>
    </footer>
}

export { FooterSection };