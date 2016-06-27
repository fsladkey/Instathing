import React from 'react';
import router from './components/router';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/app';


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('content');
  render(router, root);
});
