import React from 'react';
import { Button } from '@mui/material';

import { featuredItems, listItems } from './featured-items';
import { listIcon, vector, search } from '../../../../assets/icons';
import FeaturedCardContainer from '../../../../shared/components/FeaturedCard/FeaturedCardContainer';

const WorkFeatured = () => (
  <div className="main-work-featured-container">
    <div className="main-top-container">
      <div className="top-header">Our work featured on</div>
      <div className="top-icons">
        { featuredItems.map((featuredItem) => (
          <img className="icon" key={featuredItem.key} src={featuredItem.name} alt={featuredItem.name} />
        ))}
      </div>
    </div>
    <div className="main-bottom-container">
      <div className="left-side-wrapper">
        <div className="title-content">HOW PAGETRAFFIC CREATES HYPER BUSINESS GROWTH</div>
        <div className="description-content">
          PageTraffic offers top-notch SEO and digital
          marketing solutions to help you rank high on search
          results, connect with.
        </div>
        <div className="list-content">
          { listItems.map((listItem) => (
            <div className="list">
              <img src={listIcon} alt="list-icon" />
              <div className="list-text" key={listItem.key}>{listItem.name}</div>
            </div>
          ))}
        </div>
        <div className="data-container">
          <div className="data-content">
            <div className="left-milestone">1.9k</div>
            <div className="data-type">Total Audience</div>
          </div>
          <div className="data-content">
            <div className="right-milestonr">5.7k</div>
            <div className="data-type">Complete Project</div>
          </div>
        </div>
        <Button className="explore-now" variant="contained" color="secondary">Explore Now</Button>
      </div>
      <div className="right-side-wrapper">
        <div className="left-block-container">
          <FeaturedCardContainer src={vector} className="red" />
          <FeaturedCardContainer src={search} className="blue" />
        </div>
        <div className="right-block-container">
          <FeaturedCardContainer src={search} className="blue" />
          <FeaturedCardContainer src={vector} className="red" />
        </div>
      </div>
    </div>
  </div>
);

export default WorkFeatured;
