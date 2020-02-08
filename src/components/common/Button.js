import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonclass, value, disabled, handleClick } = this.props;
    return (<button type="button" className={`button ${buttonclass}`} disabled={disabled} onClick={handleClick} >{value}</button>);
  }
}
export default Button;
