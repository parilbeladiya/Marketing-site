import ACTION_TYPES from './actionTypes';

const INITIAL_STATE = {
  introLoading: false,
  introInfo: {},
  clientLoading: false,
  clientInfo: {},
  featuredLoading: false,
  featuredInfo: {},
  error: null,
};

const LandingReducer = (state = INITIAL_STATE, action = {}) => { // eslint-disable-line
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.GET_INTRO_INFO_LOADING:
      return {
        ...state,
        introLoading: true,
      };
    case ACTION_TYPES.GET_INTRO_INFO_SUCCESS:
      return {
        ...state,
        introLoading: false,
        introInfo: payload.data,
      };
    case ACTION_TYPES.GET_INTRO_INFO_ERROR:
      return {
        ...state,
        introLoading: false,
        error: payload,
      };
    case ACTION_TYPES.GET_CLIENT_INFO_LOADING:
      return {
        ...state,
        clientLoading: true,
      };
    case ACTION_TYPES.GET_CLIENT_INFO_SUCCESS:
      return {
        ...state,
        clientLoading: false,
        clientInfo: payload.data,
      };
    case ACTION_TYPES.GET_CLIENT_INFO_ERROR:
      return {
        ...state,
        clientLoading: false,
        error: payload,
      };
    case ACTION_TYPES.GET_FEATURED_INFO_LOADING:
      return {
        ...state,
        featuredLoading: true,
      };
    case ACTION_TYPES.GET_FEATURED_INFO_SUCCESS:
      return {
        ...state,
        featuredLoading: false,
        featuredInfo: payload.data,
      };
    case ACTION_TYPES.GET_FEATURED_INFO_ERROR:
      return {
        ...state,
        featuredLoading: false,
        error: payload,
      };
    default: {
      return state;
    }
  }
};

export default LandingReducer;
