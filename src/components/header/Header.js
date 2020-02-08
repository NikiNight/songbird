import React from 'react';

const Header = (props) => {
  const { score } = props;
  return (
    <header className="header">
      <div className="header__top-line">
        <span className="logo">Songbird</span>
        <div className="score">
          Score:
          {' '}
          <span>{score}</span>
        </div>
      </div>
      <div className="header__bottom-line">
        <ul className="topics">
          <li className="active">Разминка</li>
          <li>Воробьиные</li>
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищные птицы</li>
          <li>Морские птицы</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
