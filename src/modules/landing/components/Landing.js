import React from 'react';

import IntroContainer from './intro/IntroContainer';
import WorkFeaturedContainer from './workFeatured/WorkFeaturedContainer';
import CaseStudyContainer from './caseStudy/CaseStudyContainer';
import PortfolioContainer from './portfolio/PortfolioContainer';

const Landing = () => (
  <>
    <IntroContainer />
    <WorkFeaturedContainer />
    <CaseStudyContainer />
    <PortfolioContainer />
  </>
);

export default Landing;
