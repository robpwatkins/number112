import React from 'react';

const Screen = props => {
  return (
    <div className="screen">
      {props.clicked !== "A/C" && props.clicked}
        </div>
    )
}

export default Screen;