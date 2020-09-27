import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import UserMenu from '../userMenu/UserMenu';
import './Header.css';

const Header = ({ isAuthenticated }) => {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar className="app_header">
          <NavLink
            exact
            to="/"
            className="navigation-link"
            activeClassName="navigation-link-active"
          >
            Home
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink
                to="/contacts"
                className="navigation-link"
                activeClassName="navigation-link-active"
              >
                Contacts
              </NavLink>{' '}
              <UserMenu />{' '}
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="navigation-link"
                activeClassName="navigation-link-active"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="navigation-link"
                activeClassName="navigation-link-active"
              >
                Registration
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
