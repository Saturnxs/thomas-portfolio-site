import './ResourceItem.css';
import { IResourceItemLink, IResourceItemResource } from '../../Interfaces/IResourceItem';
// import { useBlink } from '../../Hooks/useBlink';
// import VisibilitySensor from 'react-visibility-sensor';

const ResourceItem: React.FC<IResourceItemLink | IResourceItemResource> = ({ media, icon, title, text, ...props }) => {

    const handleOnClick = () => {
        if('link' in props) {
            window.open(props.link, '_blank');
        }else if('resource' in props) {
            window.open(props.resource, 'download');
        }
    }

    return <div className='resource-item' onClick={handleOnClick}>
        <img src={icon} alt={media + ' icon'}
            className='resource-icon light-on'
        />
        <div className='resource-text'>
            <p className='body-text'>{title}</p>
            <strong>{text}</strong>
        </div>
    </div>

}

export { ResourceItem }