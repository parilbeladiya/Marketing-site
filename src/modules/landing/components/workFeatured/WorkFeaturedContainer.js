/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux/es/exports';

import { getFeaturedInfo } from '../../redux/actions';
import noop from '../../../../utils';

import WorkFeatured from './WorkFeatured';

const WorkFeaturedContainer = ({ getFeaturedInfoAction }) => {
  const featuredData = useSelector((state) => state.landing.featuredInfo);

  useEffect(() => {
    getFeaturedInfoAction();
  }, []);

  const {
    title,
    description,
    total_audience,
    complete_project,
  } = featuredData;

  return (
    <WorkFeatured
      title={title}
      description={description}
      total_audience={total_audience}
      complete_project={complete_project}
    />
  );
};

WorkFeaturedContainer.propTypes = {
  getFeaturedInfoAction: PropTypes.func,
};

WorkFeaturedContainer.defaultProps = {
  getFeaturedInfoAction: noop,
};

const mapStateToProps = (state) => ({
  featuredLoading: state.landing.featuredLoading,
  featuredInfo: state.landing.featuredInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFeaturedInfoAction: () => dispatch(getFeaturedInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkFeaturedContainer);
