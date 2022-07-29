import React from 'react';

import {
  facebook,
  linkedin,
  twitter,
  youtube,
} from '../../../assets/icons';

import {
  footer1,
  footer2,
} from '../../../assets/images';

const AppFooter = () => (

  <div className="main-footer-container">
    <div className="top-footer-container">
      <div className="left-side-wrapper">
        <div className="footer-logo">DeMo.</div>
        <div className="description">
          FindBestSEO has ranked PageTraffic among the top 10 SEO companies for 2020.
        </div>
        <div className="social-media-icons">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twiteer" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="right-side-wrapper">
        <div className="left-block-footer">
          <div className="title">Company</div>
          <div className="main-list">
            <div className="list">About</div>
            <div className="list">Services</div>
            <div className="list">Press</div>
            <div className="list">Resources</div>
            <div className="list">Blog</div>
          </div>
        </div>
        <div className="right-block-footer">
          <div className="title">Latest news</div>
          <div className="right-sub-block-footer">
            <div className="sub-block">
              <img className="footer-news" src={footer1} alt="footer1" />
              <div className="sub-block-right-side">
                <div className="tag">Per Click Management</div>
                <div className="description">
                  PageTraffic is a premier Search Engine Marketing (SEM).
                </div>
                <li className="date">15 April 2021</li>
              </div>
            </div>
            <div className="sub-block">
              <img className="footer-news" src={footer2} alt="footer2" />
              <div className="sub-block-right-side">
                <div className="tag">Per Click Management</div>
                <div className="description">
                  PageTraffic is a premier Search Engine Marketing (SEM).
                </div>
                <li className="date">15 April 2021</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer-container">
      <div>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</div>
      <div>
        <span>Privacy </span>
        | Terms of Service
      </div>
    </div>
  </div>
);

export default AppFooter;
