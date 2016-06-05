import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class TopNav extends React.Component {
  render() {
    let rightNavBar;
    if (true) {
      rightNavBar = (
        <Nav pullRight>
          <NavItem onClick={e => {
            e.preventDefault();
            this.props.onClickSignIn();
          }}>Sign In</NavItem>
        </Nav>
      );
    }

    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mondo</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {rightNavBar}
      </Navbar>
    );
  }
}

TopNav.propTypes = {
  onClickSignIn: PropTypes.func.isRequired
};

export default TopNav;
