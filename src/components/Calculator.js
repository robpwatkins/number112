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

  const operatorClicked = () => {
    operator === "+" && nums.reduce((a, b) => a + b);
  }

  console.log(nums);
  return (
    <div className="calculator">
      <Screen clicked={clicked} />
      <Button 
        name="AC"
        char="A/C"
        nums={nums}
        handleClick={clear}
      />
      <Button 
        name="pos-neg"
        char="±"
        handleClick={setClicked}
      />
      <Button 
        name="modulo"
        char="%"
        handleClick={setClicked}
      />
      <Button
        name="operator"
        char="/"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="7"
        nums={nums}
        handleClick={setNums}
      />
      <Button
        name="num"
        char="8"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="9"
        handleClick={setClicked}
      />
      <Button
        name="operator"
        char="x"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="4"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="5"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="6"
        handleClick={setClicked}
      />
      <Button
        name="operator"
        char="-"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="1"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="2"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="3"
        handleClick={setClicked}
      />
      <Button
        name="operator"
        char="+"
        handleClick={setClicked}
      />
      <Button
        name="zero"
        char="0"
        handleClick={setClicked}
      />
      <Button
        name="num"
        char="."
        handleClick={setClicked}
      />
      <Button
        name="operator"
        char="="
        handleClick={setClicked}
      />
    </div>
  )
}

export default Calculator;