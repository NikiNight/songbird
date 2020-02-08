import React from 'react';
import Logo from '../../img/logo.png';
import HeaderBottom from './HeaderBottom';

const Header = (props) => {
  const { score, stage, data } = props;
  return (
    <header className="header">
      <div className="header__top-line">
        <span className="logo">
          <img src={Logo} alt="logo" />
        </span>
        <div className="score">
          Score:
          {' '}
          <span>{score}</span>
        </div>
      </div>
      <HeaderBottom data={data} stage={stage} />
    </header>
  );
};

export default Header;
