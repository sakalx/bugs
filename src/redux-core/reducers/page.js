import {page} from '../types';

const {
  SHOW_PAGE,
} = page;

const initState = {
  active: null,
};

export default function(state = initState, {type, payload}) {
  if (type === SHOW_PAGE) {
    return ({
      active: payload,
    });
  }

  return state;
}