import React from 'react';

const Topic = (props) => {
  const { value, className } = props;
  return (
    <li className={className}>{value}</li>
  );
};

export default Topic;
