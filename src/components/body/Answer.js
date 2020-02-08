import React from 'react';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswerClicked: false,
      isAnswerCorrect: '',
    };
  }

  handleClick = () => {
      if(this.props.handleClick(this.props.id)) {
          this.setState({
            isAnswerClicked: true,
            isAnswerCorrect: true,
          })
      } else {
        this.setState({
            isAnswerClicked: true,
            isAnswerCorrect: false,
        })
      }
  }

  render() {
    const { value, id } = this.props;
    const { isAnswerClicked, isAnswerCorrect } = this.state;
    return (
      <p
        className={`answer ${isAnswerClicked ? (isAnswerCorrect ? 'answer_correct' : 'answer_wrong') : ''}`}
        onClick={this.handleClick}
      >
        {value}
      </p>
    );
  }
}
