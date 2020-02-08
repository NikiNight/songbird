import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonclass, value } = this.props;
    return (<button className={`button ${buttonclass}`}>{value}</button>);
  }
}
export default Button;
