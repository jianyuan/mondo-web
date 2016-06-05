import React, { Component, PropTypes } from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { requestSignIn, signOut } from '../actions/auth';

class TopNav extends Component {
  signIn() {
    const { dispatch } = this.props;
    dispatch(requestSignIn());
  }

  signOut() {
    const { dispatch } = this.props;
    dispatch(signOut());
  }

  renderRightNav() {
    const { accounts: { items: [account] } } = this.props;
    if (account) {
      return (
        <Nav pullRight>
          <NavDropdown title={account.description} id="topnav-dropdown">
            <MenuItem onClick={e => {
              e.preventDefault();
              this.signOut();
            }}>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav pullRight>
          <NavItem onClick={e => {
            e.preventDefault();
            this.signIn();
          }}>Sign In</NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mondo</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderRightNav()}
      </Navbar>
    );
  }
}

TopNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default TopNav;
