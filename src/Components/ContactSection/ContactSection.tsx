import './ContactSection.css';
import { LightTitle } from '../LightTitle';
import { ResourceItem } from '../ResourceItem';
import { GlowingButton } from '../GlowingButton';
import { ResourceList } from '../../Data/ContactList';

const ContactSection: React.FC = () => {

    return <section className='contact-section' id='contact'>
        <LightTitle
            title='contact.'
            icon='static/svg/earth-icon.svg'
            text={<p className='body-text'>Let’s talk and craft something <strong>amazing</strong> together!</p>}
        />
        <div className='contact-container'>
            <div className='contact-methods-container'>
                {ResourceList.map((contact, index) => <ResourceItem key={index} {...contact} />)}
            </div>
            <GlowingButton
                text='download my cv.'
                onClick={() => window.open('static/download/CV - Thomas.pdf', 'download')}
            />
        </div>
    </section>

}

export { ContactSection }