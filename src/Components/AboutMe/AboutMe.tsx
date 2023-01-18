import { useBlink } from '../../Hooks/useBlink';
import './AboutMe.css';
import Typed from "react-typed"
import VisibilitySensor from 'react-visibility-sensor';



const AboutMe: React.FC = () => {

    const [isLit, toggleIsLit] = useBlink();

    return <section className='about-me-section' id='me'>
        <div className='text-container'>
            <div className="welcome-message">
                <h2 className='subtitle'>Hi!</h2>
                <VisibilitySensor
                    onChange={(isVisible: boolean) => { toggleIsLit() }}
                    scrollDelay={10}
                >
                    <img alt='About me navigation button' src='static/svg/saturn-icon.svg' className={isLit ? 'planets-icons light-on' : 'planets-icons'}></img>
                </VisibilitySensor>
                <h2 className='subtitle'>My name is Thomas!</h2>
            </div>

            <p className={isLit ? 'title light-on' : 'title'}>
                <Typed
                    strings={[
                        "Full Stack Developer",
                        "Excellence Student at UCenfotec",
                        "Ambassador at UCenfotec",
                        "Let's craft something great together!"
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
            </p>

            <p className='body-text'>I'm a full stack software developer, mainly oriented to web applications, with knowledge in technologies such as React and Angular. Also, I'm an excellence student and ambassador at Universidad Cenfotec.</p>
            <p className='body-text'>I believe in the excellence through the good practices and continuous improvement, which means I consider myself a person with high attention to detail, taking care of the craftsmanship in anything created, coded and produced by me.  As a developer, I think that change can be achieved by spreading science and education, overall the key to succeed on this path is <strong>technology</strong>.</p>
        </div>
        <div className='image-container'>
            <div className='image'></div>

            <div className={isLit ? 'frame light-on' : 'frame'}></div>

        </div>
    </section>
}

export { AboutMe }