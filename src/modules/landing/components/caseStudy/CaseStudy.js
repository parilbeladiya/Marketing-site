import React from 'react';
import PropTypes from 'prop-types';

import { previousButton, nextButton } from '../../../../assets/icons';
import ClientCardContainer from '../../../../shared/components/ClientCard/ClientCardContainer';
import clientCards from './client-cards';

const CaseStudy = ({ title, description }) => (
  <div className="case-study-container">
    <div className="top-case-study-wrapper">
      <div className="title-content">CASE STUDY</div>
      <div className="swipe-button-container">
        <img className="previous-button" src={previousButton} alt="previou-button" />
        <img className="next-button" src={nextButton} alt="next-button" />
      </div>
    </div>
    <div className="bottom-case-study-wrapper">
      <div className="left-side-container">
        <div className="sub-title-content">{title}</div>
        <div className="description-content">{description}</div>
      </div>
      <div className="right-side-container">
        { clientCards.map((clientCard) => (
          <ClientCardContainer key={clientCard.key} card={clientCard.card} tag={clientCard.tag} />
        ))}
      </div>
    </div>
  </div>
);

CaseStudy.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

CaseStudy.defaultProps = {
  title: '',
  description: '',
};

export default CaseStudy;
