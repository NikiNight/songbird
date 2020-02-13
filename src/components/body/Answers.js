import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdateClass: true,
    };
  }

  handleAnswerClick = (selectedVariant) => {
    const { appliedVariant, handleAnswerClick } = this.props;
    if (selectedVariant === appliedVariant) {
      handleAnswerClick(true, selectedVariant);
      this.disableClassChange();
      return true;
    }
    handleAnswerClick(false, selectedVariant);
    return false;
  }

  disableClassChange = () => {
    this.setState({
      shouldUpdateClass: false,
    });
  }


  render() {
    const { data } = this.props;
    const { shouldUpdateClass } = this.state;
    return (
      <div className="answers">
        {data.map((bird) => (
          <Answer
            shouldUpdateClass={shouldUpdateClass}
            value={bird.name}
            key={bird.id}
            id={bird.id}
            handleClick={this.handleAnswerClick}
          />
        ))}
      </div>
    );
  }
}

Answers.propTypes = {
  appliedVariant: PropTypes.number,
  handleAnswerClick: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      species: PropTypes.string,
    }).isRequired,
  ),
};

Answers.defaultProps = {
  appliedVariant: '',
  handleAnswerClick: PropTypes.func,
  data: [{
    audio: '',
    description: '',
    id: '',
    image: '',
    name: '',
    species: '',
  }],
};
