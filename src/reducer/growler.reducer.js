import {GROWLER__HIDE, GROWLER__HIDED, GROWLER__SHOW} from '../actions/types/growler.types';

const initialState = {
  text: '',
  icon: '',
  type: '',
  status: 'hidden',
};

export default function growlerReducer(state = initialState, action) {
  switch (action.type) {
  case GROWLER__SHOW:
    return {
      ...state,
      ...action.growler,
      status: 'show',
    };

  case GROWLER__HIDE:
    return {
      ...state,
      ...action.growler,
      status: 'hide',
    };

  case GROWLER__HIDED:
    return {
      ...state,
      ...action.growler,
      status: 'hidden',
    };

  default:
    return state;
  }
}
