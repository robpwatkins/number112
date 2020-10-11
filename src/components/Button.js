import React from 'react';

const Button = props => {
    const handleClick = () => {
        console.log(props.name)
    }

    return (
        <div 
            className={props.name}
            onClick={handleClick}
            >
                {props.name}
            </div>
    )
}

export default Button;