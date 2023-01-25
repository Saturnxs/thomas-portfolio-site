import './GlowingButton.css';

const GlowingButton: React.FC<{ text: string, onClick: () => void }> = ({ text, onClick }) => {

    return <button className='glowing-button glowing-hover' onClick={onClick}>
        {text}
    </button>

}

export { GlowingButton }