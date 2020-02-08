import React from 'react';

const Result = (props) => {
  const { score, maxScore } = props;
  return (
    <div className="results">
      <p className="results__title">Поздравляю!</p>
      <p className="results__text">
        Вы набрали <span>{score}</span> баллов из <span>{maxScore}</span>
      </p>
      { score === maxScore
            && <p className="results__win">Вы объявляетесь знатоком птичьего мира!</p>}
      <button type="button" className="button results__button">Пройти ещё раз</button>
    </div>
  );
};

export default Result;
