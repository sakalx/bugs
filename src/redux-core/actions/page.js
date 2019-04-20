import {page} from '../types';

const {
  HIDE_PAGE,
  SHOW_PAGE,
} = page;

export const hidePage = () => ({
  type: HIDE_PAGE,
});

export const showPage = (page = null) => ({
  type: SHOW_PAGE,
  payload: page,
});