import React from 'react';

import IntroContainer from './intro/IntroContainer';
import WorkFeaturedContainer from './workFeatured/WorkFeaturedContainer';
import CaseStudyContainer from './caseStudy/CaseStudyContainer';
import PortfolioContainer from './portfolio/PortfolioContainer';
import BlogPostContainer from './blogPost/BlogPostContainer';

const Landing = () => (
  <>
    <IntroContainer />
    <WorkFeaturedContainer />
    <CaseStudyContainer />
    <PortfolioContainer />
    <BlogPostContainer />
  </>
);

export default Landing;
