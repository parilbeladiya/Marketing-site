import React from 'react';

import PropTypes from 'prop-types';

import AppFooter from '../../components/AppFooter/AppFooterContainer';
import AppHeader from '../../components/AppHeader/AppHeaderContainer';

const MainTemplate = ({
  children,
}) => (
  <div className="main-template">
    <AppHeader />
    <div className="main-content">
      <div>
        {children}
      </div>
    </div>
    <AppFooter />
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplate.defaultProps = {
  children: <div />,
};

export default MainTemplate;
