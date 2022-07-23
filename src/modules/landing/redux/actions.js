import ACTION_TYPES from './actionTypes';

const getData = (data) => ({
  type: ACTION_TYPES.GET_DATA,
  payload: data,
});

export default getData;
