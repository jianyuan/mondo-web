import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class NoMatch extends Component {
  render() {
    return (
      <Alert bsStyle="danger">
        Page not found!
      </Alert>
    );
  }
}
