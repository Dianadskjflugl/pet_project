import React, { useRef } from 'react';
import useHover from '../../hooks/useHover';
import './button.css';

const MyButton = ({ children, ...props }) => {
    const ref = useRef()
    const isButton = useHover(ref)

    return (
        <button {...props} className={isButton ? 'MyBtn MyBtn_Active' : 'MyBtn' } ref={ref} >
            {children}
        </button>
    );
}

export default MyButton;