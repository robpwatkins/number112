import React from 'react';

const Button = props => {
    const handleClick = () => {
        props.setClicked(props.name);
    }

    return (
        <div 
            className={`button ${props.name}`}
            onClick={handleClick}
            >
                {props.char}
            </div>
    )
}

export default Button;