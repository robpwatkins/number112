import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {
  const [nums, setNums] = useState([]);
  const [operator, setOperator] = useState(null);
  const [currentNum, setCurrentNum] = useState(null);
  const [screeNums, setScreenNums] = useState(null);

  const clear = () => {
    setNums([]);
    setOperator(null);
    setCurrentNum(null);
    console.log('clear');
  }

  const plusOrMinus = () => {
    console.log('plusOrMinus');
  }

  const equals = () => {
    let tempNums = [...nums, Number(currentNum)]
    if (operator === '+') tempNums = tempNums.reduce((a, b) => a + b);
    else if (operator === '-') tempNums = tempNums.reduce((a, b) => a - b);
    else if (operator === 'x') tempNums = tempNums.reduce((a, b) => a * b);
    // else tempNums = tempNums.reduce((a, b) => a / b);
    setNums([tempNums]);
    // setScreenNums(tempNums);
    setCurrentNum(null);
  }

  const handleClick = event => {
    const char = event.currentTarget.innerHTML;
    if (char === 'A/C') clear();
    else if (char === '±') plusOrMinus();
    else if (!isNaN(char)) {
      if (!currentNum) {
        setCurrentNum(char);
        setScreenNums(char);
      }
      else {
        setCurrentNum(currentNum + char);
        setScreenNums(currentNum + char);
      }
    }
    else {
      setOperator(char);
      equals();
    }
  }

  // const handleClick = event => {
  //   const char = event.currentTarget.innerHTML;
  //   if (char === 'A/C') clear();
  //   else if (char === '±') plusOrMinus();
  //   else if (!isNaN(char)) {
  //     if (!operator) {
  //       if (!currentNum) setCurrentNum(char);
  //       else setCurrentNum(currentNum + char);
  //     } else {
  //       setNums([Number(currentNum)]);
  //     }
  //   } else {
  //     setOperator(char);
  //     equals();
  //   }
  // }

  console.log(currentNum, nums);
  return (
    <div className="calculator">
      <Screen num={screeNums} />
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