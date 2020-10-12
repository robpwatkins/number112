import React from 'react';

const Button = props => {
  // const handleClick = () => {
  //   props.handleClick(props.char);
  // }

  return (
    <div 
      className={`button ${props.name}`}
      onClick={() => props.handleClick([...props.nums, props.char])}
      >
        {props.char}
    </div>
  )
}

export default Button;