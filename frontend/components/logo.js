import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return <Link  to="/" className={`flex-item logo ${props.size}`}/>;
}
