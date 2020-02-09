import React from 'react';
import Applause from '../../audio/applause.mp3';
import Button from '../common/Button';

export default class Result extends React.Component {
  componentDidMount() {
    this.checkAbsoluteWin();
  }

  checkAbsoluteWin = () => {
    if (this.props.score === this.props.maxScore) {
      this.audio = new Audio(Applause);
      this.audio.play();
    }
  }

  render() {
    const { score, maxScore } = this.props;
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
              && <Button buttonclass="results__button" value="Пройти ещё раз" disabled={false} handleClick={this.props.handleButtonClick} />
        }
      </div>
    );
  }
}
