import {page} from '../types';

const {
  HIDE_PAGE,
  SHOW_PAGE,
} = page;

const initState = {
  active: null,
};

export default function(state = initState, {type, payload}) {
  switch (type) {
    case HIDE_PAGE:
      return ({
        active: null,
      });
    case SHOW_PAGE:
      return ({
        active: payload,
      });
  }

  return state;
}