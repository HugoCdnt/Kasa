import { useState } from 'react';

// STYLES //
import '../styles/Collapse.css';

// IMAGES //
import arrow from '../images/arrow.svg'


const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)

    const arrowUp = <img src={arrow} alt='arrow' className='arrow'/>
    const arrowDown = <img src={arrow} alt='arrow' className='arrow  arrow-down'/>

    return !isOpen ? (
        <div className='collapse'>
            <button 
                className='collapse-button'
                onClick={() => setIsOpen(true)}
            >{title}{arrowDown}</button>
        </div>
    ) : (
        <div className='collapse'>
            <button 
                className='collapse-button'
                onClick={() => setIsOpen(false)}
            >
                {title}{arrowUp}
            </button>
            <p className='collapse-description'>{description}</p>
        </div>
    ) 
}

export default Collapse