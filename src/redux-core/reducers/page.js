import {page} from '../types';

const {
  SHOW_PAGE,
} = page;

const initState = {
  active: null,
  cache: null,
};

export default function(state = initState, {type, payload}) {
  if (type === SHOW_PAGE) {
    const cache = payload ? payload : state.cache;

    return ({
      active: payload,
      cache,
    });
  }

  return state;
}