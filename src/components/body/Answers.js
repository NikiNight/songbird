import React from 'react';
import Answer from './Answer';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAnswerClick = (selectedVariant) => {
    if(selectedVariant===this.props.appliedVariant) {
      this.props.handleAnswerClick(true, selectedVariant);
      return true
    } else {
      this.props.handleAnswerClick(false, selectedVariant);
      return false
    }
  }

  render() {
    const { data, appliedVariant } = this.props;
    return (
      <div className="answers">
        {data.map((bird, i) => <Answer value={bird.name} key={bird.id} id={bird.id} handleClick={this.handleAnswerClick} />)}
      </div>
    );
  }
}
