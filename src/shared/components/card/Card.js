import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ src, type }) => (
  <div className={`card-component-${type}`}>
    <img className="logo" src={`${src}`} alt="card-logo" />
    <div className="title">I Want Leads</div>
    <div className="description">Looking to get higher ROI by improving website.</div>
    <div className="more">View more</div>
  </div>
);

Card.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
};

Card.defaultProps = {
  type: '',
  src: '',
};

export default Card;
