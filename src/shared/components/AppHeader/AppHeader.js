import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import menuItems from './menu-items';
import noop from '../../../utils/index';

const AppHeader = ({ handleNavigate, isNavExpanded, setIsNavExpanded }) => (
  <div className="app-header-container" id="app-header">
    <div className="app-name-wrapper">
      <div className="app-name">DeMo.</div>
    </div>
    <Button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>☰</Button>
    <div
      className={
          isNavExpanded ? 'menu-items expanded' : 'menu-items'
      }
    >
      <div className="menu-items-list">
        <div className="list">
          { menuItems.map((menuItem) => (
            <Button className="nav-link" key={menuItem.key} name={menuItem.key} onClick={handleNavigate}>{menuItem.name}</Button>
          ))}
          <Button className="mui-button" color="primary">Contacts</Button>
        </div>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {
  handleNavigate: PropTypes.func,
  isNavExpanded: PropTypes.bool,
  setIsNavExpanded: PropTypes.func,
};

AppHeader.defaultProps = {
  handleNavigate: noop,
  isNavExpanded: false,
  setIsNavExpanded: noop,
};

export default AppHeader;
