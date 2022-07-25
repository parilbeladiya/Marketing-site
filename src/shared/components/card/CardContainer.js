import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ src, type }) => (
  <Card src={src} type={type} />
);

CardContainer.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
};

CardContainer.defaultProps = {
  type: '',
  src: '',
};

export default CardContainer;
