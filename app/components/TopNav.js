import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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

  renderMainNav() {
    const { auth: userId } = this.props;

    if (!userId) {
      return;
    }

    return (
      <Nav>
        <LinkContainer to="/transactions">
          <NavItem>Transactions</NavItem>
        </LinkContainer>
      </Nav>
    );
  }

  renderSubNav() {
    const { accounts: { items: [account] }, auth: userId } = this.props;
    if (account && userId) {
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
        {this.renderMainNav()}
        {this.renderSubNav()}
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
