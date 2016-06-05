import React from 'react';
import queryString from 'query-string';
import mondoConfig from '../../mondo.config';

export default class SignIn extends React.Component {
  componentWillMount() {
    const data = {
      client_id: mondoConfig.clientId,
      redirect_uri: 'http://localhost:8080',
      // redirect_uri: window.location.href,
      response_type: 'code',
      state: ''
    };
    const url = 'https://auth.getmondo.co.uk/?' + queryString.stringify(data);
    window.location.href = url;
  }

  render() {
    return <div>Sign In</div>;
  }
}
