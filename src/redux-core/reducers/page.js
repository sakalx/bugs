import {page} from '../types';

const {
  HIDE_PAGE,
  SHOW_PAGE,
} = page;

const initState = {
  activePage: null,
};

export default function(state = initState, {type, payload}) {
  switch (type) {
    case HIDE_PAGE:
      return ({
        activePage: null,
      });
    case SHOW_PAGE:
      return ({
        activePage: payload,
      });
  }

  return state;
}