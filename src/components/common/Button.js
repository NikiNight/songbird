import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    buttonclass, value, disabled, handleClick,
  } = props;
  return (<button type="button" className={`button ${buttonclass}`} disabled={disabled} onClick={handleClick}>{value}</button>);
};
export default Button;

Button.propTypes = {
  buttonclass: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonclass: '',
};
