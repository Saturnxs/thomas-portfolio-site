import './StackContainer.css';

interface StackContainerProps {
    title: string;
    technologiesList: {
        name: string;
        icon: string;
    }[];
}

const StackContainer: React.FC<StackContainerProps> = ({ title, technologiesList }) => {
    return <div className='stack-container'>
        <h2 className='subtitle'>{title}</h2>
        <div className='stack-items'>
            {technologiesList.map((technology, index) => {
                return <img src={technology.icon} alt={technology.name} key={index} />
            })}
        </div>
    </div>
};

export { StackContainer };