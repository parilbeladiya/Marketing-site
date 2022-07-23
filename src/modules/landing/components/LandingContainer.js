import React from 'react';

import { connect } from 'react-redux';

import ACTION_TYPES from '../redux/actionTypes';

import Landing from './Landing';

const LandingContainer = () => {
  const handleLogin = () => {
  };

  return (
    <Landing
      handleLogin={handleLogin}
    />
  );
};

const mapStateToProps = (state) => ({
  data: state.landing.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(ACTION_TYPES.getData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
