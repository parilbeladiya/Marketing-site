import ACTION_TYPES from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  data: {},
};

const LandingReducer = (state = INITIAL_STATE, action) => { // eslint-disable-line
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.GET_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default LandingReducer;
