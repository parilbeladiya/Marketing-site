import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux/es/exports';

import { getClientInfo } from '../../redux/actions';
import noop from '../../../../utils';
import CaseStudy from './CaseStudy';

const CaseStudyContainer = ({ getClientInfoAction }) => {
  const clientData = useSelector((state) => state.landing.clientInfo);

  useEffect(() => {
    getClientInfoAction();
  }, []);

  const { title, description } = clientData;

  return (
    <CaseStudy
      title={title}
      description={description}
    />
  );
};

CaseStudyContainer.propTypes = {
  getClientInfoAction: PropTypes.func,
};

CaseStudyContainer.defaultProps = {
  getClientInfoAction: noop,
};

const mapStateToProps = (state) => ({
  clientLoading: state.landing.clientLoading,
  clientInfo: state.landing.clientInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getClientInfoAction: () => dispatch(getClientInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudyContainer);
