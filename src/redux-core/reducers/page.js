import {page} from '../types';

const {
  SHOW_PAGE,
} = page;

const initState = {
  active: null,
  prev: null,
};

export default function(state = initState, {type, payload}) {
  if (type === SHOW_PAGE) {
    const prev = payload ? payload : state.prev;

    return ({
      active: payload,
      prev,
    });
  }

  return state;
}