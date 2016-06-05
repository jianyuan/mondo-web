import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import TopNavContainer from './TopNavContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopNavContainer />
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

export default App;
