import React from 'react';

const Button = (props) => {
  const {
    buttonclass, value, disabled, handleClick,
  } = props;
  return (<button type="button" className={`button ${buttonclass}`} disabled={disabled} onClick={handleClick}>{value}</button>);
};
export default Button;
