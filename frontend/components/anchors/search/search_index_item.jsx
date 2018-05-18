import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <Link to={`/${props.type}/${props.id}`} onClick={() => props.updateSearchStatus(false)}>{props.content}</Link>
  );
};
