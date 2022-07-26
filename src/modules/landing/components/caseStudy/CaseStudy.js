import React from 'react';

import { previousButton, nextButton } from '../../../../assets/icons';
import ClientCardContainer from '../../../../shared/components/ClientCard/ClientCardContainer';
import clientCards from './client-cards';

const CaseStudy = () => (
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
        <div className="sub-title-content">OUR CLIENT GETS RESULTS</div>
        <div className="description-content">PageTraffic offers top-notch SEO and digital marketing solutions.</div>
      </div>
      <div className="right-side-container">
        { clientCards.map((clientCard) => (
          <ClientCardContainer key={clientCard.key} card={clientCard.card} tag={clientCard.tag} />
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudy;
