import React from 'react';
import PropTypes from 'prop-types';

import FeaturedCard from './FeaturedCard';

const FeaturedCardContainer = ({ src, className }) => (
  <FeaturedCard src={src} className={className} />
);

FeaturedCardContainer.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

FeaturedCardContainer.defaultProps = {
  className: '',
  src: '',
};

export default FeaturedCardContainer;
