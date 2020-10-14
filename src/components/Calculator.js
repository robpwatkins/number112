import React, { useState, useEffect } from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {
  const [clicked, setClicked] = useState(null);
  const [nums, setNums] = useState([]);
  const [operator, setOperator] = useState(null);
  const [currentTotal, setCurrentTotal] = useState(null);

  const clear = () => {
    setNums([]);
  }

  const handleClick = event => {
    const char = event.currentTarget.innerHTML;
    console.log(parseInt(char));
  }

  const operatorClicked = () => {
    operator === "+" && nums.reduce((a, b) => a + b);
  }

  return (
    <div className="calculator">
      <Screen clicked={clicked} />
      <Button 
        name="AC"
        char="A/C"
        nums={nums}
        handleClick={handleClick}
      />
      <Button 
        name="pos-neg"
        char="±"
        handleClick={handleClick}
      />
      <Button 
        name="modulo"
        char="%"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="/"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="7"
        nums={nums}
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="8"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="9"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="x"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="4"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="5"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="6"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="-"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="1"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="2"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="3"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="+"
        handleClick={handleClick}
      />
      <Button
        name="zero"
        char="0"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="."
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="="
        handleClick={handleClick}
      />
    </div>
  )
}

export default Calculator;