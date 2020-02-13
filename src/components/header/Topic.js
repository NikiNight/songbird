import React from 'react';
import PropTypes from 'prop-types';

const Topic = (props) => {
  const { value, className } = props;
  return (
    <li className={className}>{value}</li>
  );
};

export default Topic;

Topic.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

Topic.defaultProps = {
  className: '',
  value: '',
};
