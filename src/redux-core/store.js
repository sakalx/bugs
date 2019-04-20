import {applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

const middleware = applyMiddleware(logger);

const store = createStore(rootReducer, middleware);

export default store;