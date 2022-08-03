/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

import { featuredItems, listItems } from './featured-items';
import { listIcon, vector, search } from '../../../../assets/icons';
import FeaturedCardContainer from '../../../../shared/components/FeaturedCard/FeaturedCardContainer';

const WorkFeatured = ({
  title,
  description,
  total_audience,
  complete_project,
}) => (
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
        <div className="title-content">{title}</div>
        <div className="description-content">
          {description}
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
            <div className="left-milestone">{total_audience}</div>
            <div className="data-type">Total Audience</div>
          </div>
          <div className="data-content">
            <div className="right-milestonr">{complete_project}</div>
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

WorkFeatured.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  total_audience: PropTypes.string,
  complete_project: PropTypes.string,
};

WorkFeatured.defaultProps = {
  title: '',
  description: '',
  total_audience: '',
  complete_project: '',
};

export default WorkFeatured;
