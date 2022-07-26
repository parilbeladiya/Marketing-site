import React from 'react';
import PropTypes from 'prop-types';

const FeaturedCard = ({ src, className }) => (
  <div className={`featured-card-component ${className}`}>
    <img className="logo" src={`${src}`} alt="card-logo" />
    <div className="title">I Want Leads</div>
    <div className="description">Looking to get higher ROI by improving website.</div>
    <div className="more">View more</div>
  </div>
);

FeaturedCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

FeaturedCard.defaultProps = {
  className: '',
  src: '',
};

export default FeaturedCard;
