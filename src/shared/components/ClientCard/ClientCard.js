import React from 'react';
import PropTypes from 'prop-types';

const ClientCard = ({ card, tag }) => (
  <div className="client-card-component">
    <img className="card" src={card} alt="client-1" />
    <img className="tag" src={tag} alt="client-1-tag" />
  </div>
);

ClientCard.propTypes = {
  card: PropTypes.string,
  tag: PropTypes.string,
};

ClientCard.defaultProps = {
  card: '',
  tag: '',
};

export default ClientCard;
