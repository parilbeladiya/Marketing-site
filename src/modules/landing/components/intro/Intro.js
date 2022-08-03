import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

import { play } from '../../../../assets/icons';
import { marketingBoy } from '../../../../assets/images';

const Intro = ({ title, description, subDescription }) => {
  const name = title.split(' ');
  return (
    <div className="main-container">
      <div className="left-block-container">
        <h1 className="text-header">
          {name[0]}
          <span className="marketing">
            {` ${name[1]} `}
          </span>
          {name[2]}
        </h1>
        <div className="text-title">{description}</div>
        <div className="text-discription">{subDescription}</div>
        <div className="button-section">
          <Button variant="contained" className="start-button">Get Start</Button>
          <img src={play} className="play-button" alt="play-button" />
          <div className="watch-video">Watch Video</div>
        </div>
      </div>
      <div className="right-block-container">
        <img src={marketingBoy} className="mark-boy" alt="marketing-boy" />
      </div>
    </div>
  );
};

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subDescription: PropTypes.string,
};

Intro.defaultProps = {
  title: '',
  description: '',
  subDescription: '',
};

export default Intro;
