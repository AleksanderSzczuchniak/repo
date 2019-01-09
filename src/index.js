import React from 'react';
import ReactDOM from 'react-dom';
import SingleMain from './singleMaine';
import * as registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SingleMain />,
  document.getElementById('root'));
registerServiceWorker();