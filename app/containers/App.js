import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import TopNav from '../components/TopNav';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <Grid>
          <h1>Mondo</h1>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};
