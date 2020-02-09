import React from 'react';
import Answer from './Answer';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdateClass: true,
    }
  }

  handleAnswerClick = (selectedVariant) => {
    if(selectedVariant===this.props.appliedVariant) {
      this.props.handleAnswerClick(true, selectedVariant);
      this.disableClassChange();
      return true
    } else {
      this.props.handleAnswerClick(false, selectedVariant);
      return false
    }
  }

  disableClassChange = () => {
    this.setState({
      shouldUpdateClass: false,
    });
  }  


  render() {
    const { data } = this.props;
    return (
      <div className="answers">
        {data.map((bird, i) => <Answer shouldUpdateClass={this.state.shouldUpdateClass} value={bird.name} key={bird.id} id={bird.id} handleClick={this.handleAnswerClick} />)}
      </div>
    );
  }
}
