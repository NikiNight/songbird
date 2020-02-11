import React from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

const HeaderBottom = (props) => {
  const { stage, data } = props;
  return (
    <div className="header__bottom-line">
      <ul className="topics">
        {
            data.map((topic, i) => <Topic key={topic.family} value={topic.family} className={`${i === stage ? 'active' : ''}`} />)
          }
      </ul>
    </div>
  );
};

export default HeaderBottom;

HeaderBottom.propTypes = {
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
  stage: PropTypes.number,
};

HeaderBottom.defaultProps = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: '',
      description: '',
      image: '',
      name: '*****',
      species: '',
    }),
  ),
  stage: 0,
};
