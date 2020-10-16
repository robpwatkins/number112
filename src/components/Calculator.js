import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {
  // const [clicked, setClicked] = useState(null);
  const [nums, setNums] = useState([]);
  const [operator, setOperator] = useState(null);
  const [currentTotal, setCurrentTotal] = useState(null);

  const clear = () => {
    setNums([]);
    setCurrentTotal(null);
    setOperator(null);
    console.log('clear');
  }

  const plusOrMinus = () => {
    console.log('plusOrMinus');
  }

  const handleOperatorClick = () => {
    
  }

  const equals = () => {
    operator === '+' && nums.reduce((a, b) => a + b);
  }

  const handleClick = event => {
    const char = event.currentTarget.innerHTML;
    if (char === 'A/C') clear();
    else if (char === '±') plusOrMinus();
    else if (!isNaN(char)) {
      if (!operator) {
        let newNums = Number(nums + Number(char));
        setNums([newNums]);
        setCurrentTotal(newNums);
      } else setNums([...nums, Number(char)]);
    } else setOperator(char);
  }

  console.log(nums);
  return (
    <div className="calculator">
      <Screen total={currentTotal} />
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