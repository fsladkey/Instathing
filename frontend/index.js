import React from 'react';
import router from './components/router';
import { render } from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('content');
  render(router, root);
});
