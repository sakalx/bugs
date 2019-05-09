import React from 'react';
import ReactDOM from 'react-dom';

import insertSVG from './utils/insert-svg';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import BaselineStyle from './theme/baselineStyle';

import App from './App/';

ReactDOM.render(
    <React.Fragment>
      <BaselineStyle/>

      <Provider store={store}>
        <App/>
      </Provider>

    </React.Fragment>
    , document.getElementById('root'));

insertSVG();