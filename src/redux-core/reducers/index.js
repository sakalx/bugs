import {combineReducers} from 'redux';

import page from './page';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  page,
  snackbar,
});

export default rootReducer;