import React from 'react';
import { Button } from '@mui/material';

import { portfolioCards, navigationItems } from './portfolio-cards';

const Portfolio = () => (
  <div className="portfolio-main-container">
    <div className="portfolio-header">Our Portfolio</div>
    <div className="navigation-bar">
      { navigationItems.map((navigationItem) => (
        <div className="nav-text" key={navigationItem.key}>{navigationItem.name}</div>
      ))}
    </div>
    <div className="portfolio-cards-items">
      { portfolioCards.map((portfolioCard) => (
        <img className="portfolio-card" key={portfolioCard.key} src={portfolioCard.card} alt={portfolioCard.name} />
      ))}
    </div>
    <Button className="view-more" variant="contained" color="secondary">View more</Button>
  </div>
);

export default Portfolio;
