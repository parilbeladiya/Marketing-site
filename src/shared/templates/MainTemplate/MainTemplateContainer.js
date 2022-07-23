import React from 'react';

import PropTypes from 'prop-types';

import MainTemplate from './MainTemplate';

const MainTemplateContainer = ({
  children, className,
}) => (
  <MainTemplate
    className={className}
  >
    {children}
  </MainTemplate>
);

MainTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
};

MainTemplateContainer.defaultProps = {
  children: <div />,
  className: '',
};

export default MainTemplateContainer;
