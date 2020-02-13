import React from 'react';
import PropTypes from 'prop-types';
import Applause from '../../audio/applause.mp3';
import Button from '../common/Button';

export default class Result extends React.Component {
  componentDidMount() {
    this.checkAbsoluteWin();
  }

  checkAbsoluteWin = () => {
    const { score, maxScore } = this.props;
    if (score === maxScore) {
      this.audio = new Audio(Applause);
      this.audio.play();
    }
  }

  render() {
    const { score, maxScore, handleButtonClick } = this.props;
    return (
      <div className="results">
        <p className="results__title">Поздравляю!</p>
        <p className="results__text">
          Вы набрали
          {' '}
          <span>{score}</span>
          {' '}
          баллов из
          {' '}
          <span>{maxScore}</span>
        </p>
        { score === maxScore
              && <p className="results__win">Вы объявляетесь знатоком птичьего мира!</p>}
        {
          score !== maxScore
              && <Button buttonclass="results__button" value="Пройти ещё раз" disabled={false} handleClick={handleButtonClick} />
        }
      </div>
    );
  }
}

Result.propTypes = {
  handleButtonClick: PropTypes.func,
  maxScore: PropTypes.number,
  score: PropTypes.number,
};

Result.defaultProps = {
  handleButtonClick: PropTypes.func,
  maxScore: 0,
  score: 0,
};
