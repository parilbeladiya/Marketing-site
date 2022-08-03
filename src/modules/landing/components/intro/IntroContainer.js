/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux/es/exports';

import getIntroInfo from '../../redux/actions';
import Intro from './Intro';
import noop from '../../../../utils';

const IntroContainer = ({ getIntroInfoAction }) => {
  const introData = useSelector((state) => state.landing.introInfo);

  useEffect(() => {
    getIntroInfoAction();
  }, []);

  const { title, description, sub_description } = introData;

  return (
    <Intro
      title={title}
      description={description}
      subDescription={sub_description}
    />
  );
};

IntroContainer.propTypes = {
  getIntroInfoAction: PropTypes.func,
};

IntroContainer.defaultProps = {
  getIntroInfoAction: noop,
};

const mapStateToProps = (state) => ({
  introLoading: state.landing.introLoading,
  introInfo: state.landing.introInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getIntroInfoAction: () => dispatch(getIntroInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);
