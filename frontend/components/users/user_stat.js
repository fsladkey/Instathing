import React from 'react';

export default function (props) {
  return (
    <span className="user-stat">
      <strong>{props.num}</strong>
      { props.type }
    </span>
  );
}
