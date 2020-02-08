import React from 'react';
import Topic from './Topic';

const HeaderBottom = (props) => {
  const { stage, data } = props;
  return (
    <div className="header__bottom-line">
      <ul className="topics">
        {
            data.map((topic, i) => <Topic key={i} value={topic.family} className={`${i === stage ? 'active' : ''}`} />)
          }
      </ul>
    </div>
  );
};

export default HeaderBottom;
