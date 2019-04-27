import {page} from '../types';

const {
  SHOW_PAGE,
} = page;

export const showPage = (page = null) => ({
  type: SHOW_PAGE,
  payload: page,
});