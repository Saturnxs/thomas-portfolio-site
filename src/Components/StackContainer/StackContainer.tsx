import './StackContainer.css';
import { ITechnologyStack } from '../../Interfaces/ITechnologyStack';

const StackContainer: React.FC<ITechnologyStack> = ({ field, technologies }) => {
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