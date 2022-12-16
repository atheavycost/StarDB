import React from 'react';

import './error-indicator.css';
import icon from './doggy_3.jpg';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={icon} 
                alt='error icon' 
                width='150px' 
                height='150px'/>
            <span className='boom'>BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>
                (but we have sent droids to fix it, already)
            </span>
        </div>
    );
};

export default ErrorIndicator;
