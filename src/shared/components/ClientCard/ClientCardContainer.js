import React from 'react';
import PropTypes from 'prop-types';

import ClientCard from './ClientCard';

const ClientCardContainer = ({ card, tag }) => (
  <ClientCard card={card} tag={tag} />
);

ClientCardContainer.propTypes = {
  card: PropTypes.string,
  tag: PropTypes.string,
};

ClientCardContainer.defaultProps = {
  card: '',
  tag: '',
};

export default ClientCardContainer;
