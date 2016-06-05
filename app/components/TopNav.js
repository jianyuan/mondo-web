import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { requestSignIn } from '../actions/auth';

class TopNav extends Component {
  signIn() {
    const { dispatch } = this.props;
    dispatch(requestSignIn());
  }

  renderRightNav() {
    const { auth: { userId } } = this.props;
    if (!userId) {
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
  auth: PropTypes.object.isRequired
};

export default TopNav;
