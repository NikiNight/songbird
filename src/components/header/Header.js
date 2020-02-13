import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      species: PropTypes.string,
    }),
  ),
  score: PropTypes.number,
  stage: PropTypes.number,
};

Header.defaultProps = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: '',
      description: '',
      image: '',
      name: '*****',
      species: '',
    }),
  ),
  score: 0,
  stage: 0,
};
