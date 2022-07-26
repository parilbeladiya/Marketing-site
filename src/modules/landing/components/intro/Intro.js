import React from 'react';
import { Button } from '@mui/material';

import { play, marketingBoy, marketingRing } from '../../../../assets/icons';

const Intro = () => (
  <div className="main-container">
    <div className="left-block-container">
      <div className="text-header">
        BEST
        <span className="marketing"> MARKETING </span>
        COMPANY.
      </div>
      <div className="text-title">#1 MARKETING Services Agency in USA & UK</div>
      <div className="text-discription">If you&apos;re looking for the best SEO company for your business, PageTraffic is the perfect choice.</div>
      <div className="button-section">
        <Button variant="contained" className="start-button">Get Start</Button>
        <img src={play} className="play-button" alt="play-button" />
        <div className="watch-video">Watch Video</div>
      </div>
    </div>
    <div className="right-block-container">
      <img src={marketingBoy} className="mark-boy" alt="marketing-boy" />
      <img src={marketingRing} className="mark-ring" alt="marketing-ring" />
    </div>
  </div>
);

export default Intro;