import { RECORD_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  nickname: 'random value',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECORD_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
