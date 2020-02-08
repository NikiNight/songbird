import React from 'react';
import Bird from './Bird';
import Answers from './Answers';
import Button from '../common/Button';

const Body = (props) =>
  // const { score } = props;
  (
    <>
      <div className="question">
        <Bird />
      </div>
      <div className="container-2-column">
        <Answers />
        <div className="info">
          <Bird />
        </div>
      </div>
      <div className="controls">
        <Button buttonclass="controls__next" value="Next Level" />
      </div>
    </>
  );
export default Body;
