import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class TopNav extends React.Component {
  render() {
    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mondo</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/sign_in">
            <NavItem>Sign In</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
