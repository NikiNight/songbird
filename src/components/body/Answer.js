import React from 'react';
import PropTypes from 'prop-types';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswerClicked: false,
      isAnswerCorrect: '',
    };
  }

  handleClick = () => {
    const { handleClick, shouldUpdateClass, id } = this.props;
    if (handleClick(id)) {
      this.setState({
        isAnswerClicked: true,
        isAnswerCorrect: true,
      });
    } else if (shouldUpdateClass) {
      this.setState({
        isAnswerClicked: true,
        isAnswerCorrect: false,
      });
    }
  }

  checkButtonClass = () => {
    const { isAnswerClicked, isAnswerCorrect } = this.state;
    if (isAnswerClicked) {
      if (isAnswerCorrect) {
        return 'answer_correct';
      }
      return 'answer_wrong';
    }
    return '';
  }

  render() {
    const { value } = this.props;
    return (
      <button
        type="button"
        className={`answer ${this.checkButtonClass()}`}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}

Answer.propTypes = {
  shouldUpdateClass: PropTypes.bool,
  handleClick: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.string,
};

Answer.defaultProps = {
  shouldUpdateClass: true,
  handleClick: PropTypes.func,
  id: '',
  value: '',
};
