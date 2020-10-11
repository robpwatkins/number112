import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {
    const [clicked, setClicked] = useState(null);

    console.log(clicked);
    return (
        <div className="calculator">
            <Screen clicked={clicked} />
            <Button 
                name="AC"
                char="A/C"
                setClicked={setClicked}
            />
            <Button 
                name="pos-neg"
                char="±"
                setClicked={setClicked}
            />
            <Button 
                name="modulo"
                char="%"
                setClicked={setClicked}
            />
            <Button
                name="operator"
                char="/"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="7"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="8"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="9"
                setClicked={setClicked}
            />
            <Button
                name="operator"
                char="x"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="4"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="5"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="6"
                setClicked={setClicked}
            />
            <Button
                name="operator"
                char="-"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="1"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="2"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="3"
                setClicked={setClicked}
            />
            <Button
                name="operator"
                char="+"
                setClicked={setClicked}
            />
            <Button
                name="zero"
                char="0"
                setClicked={setClicked}
            />
            <Button
                name="num"
                char="."
                setClicked={setClicked}
            />
            <Button
                name="operator"
                char="="
                setClicked={setClicked}
            />
        </div>
    )
}

export default Calculator;