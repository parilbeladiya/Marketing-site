import axiosApi from '../../../utils/api';
import ACTION_TYPES from './actionTypes';

const getIntroInfo = () => ({
  type: ACTION_TYPES.GET_INTRO_INFO,
  payload: axiosApi.get('api/mark?name=best-marketing'),
});

export default getIntroInfo;

export const getClientInfo = () => ({
  type: ACTION_TYPES.GET_CLIENT_INFO,
  payload: axiosApi.get('api/mark?name=our-client'),
});

export const getFeaturedInfo = () => ({
  type: ACTION_TYPES.GET_FEATURED_INFO,
  payload: axiosApi.get('api/mark?name=page-traffic'),
});
