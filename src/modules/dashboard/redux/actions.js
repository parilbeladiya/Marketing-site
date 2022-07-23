import ACTION_TYPES from './actionTypes';

const updateCurrentPage = (currentPage) => ({
  type: ACTION_TYPES.GET_CURRENT_PAGE,
  payload: currentPage,
});

export default updateCurrentPage;
