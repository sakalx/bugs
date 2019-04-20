import {snackbar} from '../types';

const {
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} = snackbar;

export const hideSnackbar = () => ({
  type: HIDE_SNACKBAR,
});

export const showSnackbar = (message = '') => ({
  type: SHOW_SNACKBAR,
  payload: message,
});

