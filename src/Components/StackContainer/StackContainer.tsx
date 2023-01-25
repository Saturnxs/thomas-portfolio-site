import './StackContainer.css';
import { ITechnology } from '../../Interfaces/ITechnology';

const StackContainer: React.FC<ITechnology> = ({ field, technologies }) => {
    return <div className='stack-container'>
        <h2 className='subtitle'>{field}</h2>
        <div className='stack-items-container'>
            {technologies.map((technology, index) => {
                return <div className='stack-item' key={index}>
                    <img src={technology.icon} alt={technology.name} />
                    <span className='body-text'>{technology.name}</span>
                </div>
            })}
        </div>
    </div>
};

export { StackContainer };