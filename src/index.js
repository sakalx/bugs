import React from 'react';
import ReactDOM from 'react-dom';

import './utils/detect-mobile';
import injectSVG from './utils/inject-svg';
import injectFont from './utils/inject-font';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import CssBaseline from './theme';
import App from './App/';

console.time('ReactDOM.render');
ReactDOM.render(
    <React.Fragment>
      <CssBaseline/>

      <Provider store={store}>
        <App/>
      </Provider>

    </React.Fragment>
    , document.getElementById('root'));
console.timeEnd('ReactDOM.render');

console.time('Injecting SVG');
injectSVG();
console.timeEnd('Injecting SVG');

console.time('Injecting FONTS');
injectFont('PT+Sans');
injectFont('Akronim');
console.timeEnd('Injecting FONTS');


(() => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
})();