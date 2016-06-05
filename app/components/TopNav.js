import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { requestSignIn } from '../actions/auth';

class TopNav extends Component {
  signIn() {
    const { dispatch } = this.props;
    dispatch(requestSignIn());
  }

  render() {
    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mondo</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={e => {
            e.preventDefault();
            this.signIn();
          }}>Sign In</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

TopNav.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default TopNav;
