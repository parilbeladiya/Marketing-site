import React from 'react';

import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import menuItems from './menu-items';

import noop from '../../../utils/index';

const AppHeader = ({ handleNavigate }) => (
  <div className="app-header-container" id="app-header">
    <div className="app-name-wrapper">
      <div className="app-name">DeMo.</div>
    </div>
    <div className="menu-items">
      <div className="menu-items-list">
        { menuItems.map((menuItem) => (
          <button type="button" className="nav-link" key={menuItem.key} name={menuItem.key} onClick={handleNavigate}>{menuItem.name}</button>
        ))}
        <Button className="mui-button" color="primary">Contacts</Button>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {
  handleNavigate: PropTypes.func,
};

AppHeader.defaultProps = {
  handleNavigate: noop,
};

export default AppHeader;
