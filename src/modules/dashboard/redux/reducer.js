import ACTION_TYPES from './actionTypes';

const INITIAL_STATE = {
  currentPage: '',
};

const DashboardReducer = (state = INITIAL_STATE, action) => { // eslint-disable-line
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.GET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
