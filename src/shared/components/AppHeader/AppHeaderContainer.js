import React from 'react';

import { useNavigate } from 'react-router';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import updateCurrentPage from '../../../modules/dashboard/redux/actions';

import AppHeader from './AppHeader';

import noop from '../../../utils';

const AppHeaderContainer = ({ setCurrentPage }) => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    setCurrentPage(e.target.name);
    navigate(`/${e.target.name}`);
  };
  return (
    <AppHeader handleNavigate={handleNavigate} />
  );
};

AppHeaderContainer.propTypes = {
  setCurrentPage: PropTypes.func,
};

AppHeaderContainer.defaultProps = {
  setCurrentPage: noop,
};

const mapStateToProps = (state) => ({
  data: state.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (data) => dispatch(updateCurrentPage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
