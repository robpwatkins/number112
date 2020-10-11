import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {
    const [clicked, setClicked] = useState(null);

    console.log(clicked);
    return (
        <div className="calculator">
            <Screen />
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
        </div>
    )
}

export default Calculator;