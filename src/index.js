import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import muiTheme from './theme';

import App from './App/';

ReactDOM.render(
    <React.Fragment>
      <CssBaseline/>

      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <App/>
        </Provider>
      </MuiThemeProvider>
    </React.Fragment>
    , document.getElementById('bugs-start-here'));

if (false) {
  console.log('load from cache');
} else {
  (async () => {
    const module = await import('root/static/svg/symbol/svg/sprite.symbol.svg');


    var p = document.createElement("div");
    p.innerHTML = module.default;
    p.style.display = "none";
    document.body.appendChild(p);
  })();
}
