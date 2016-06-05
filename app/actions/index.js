import axios from 'axios';
import queryString from 'query-string';
import mondoConfig from '../../mondo.config';

export const SIGN_IN = 'SIGN_IN';
export const REQUEST_EXCHANGE_CODE_FOR_ACCESS_TOKEN = 'REQUEST_EXCHANGE_CODE_FOR_ACCESS_TOKEN';
export const RECEIVE_EXCHANGE_CODE_FOR_ACCESS_TOKEN = 'RECEIVE_EXCHANGE_CODE_FOR_ACCESS_TOKEN';

export const signIn = () => {
  return () => {
    const data = {
      client_id: mondoConfig.clientId,
      redirect_uri: window.location.href,
      response_type: 'code',
      state: ''
    };
    const url = 'https://auth.getmondo.co.uk/?' + queryString.stringify(data);
    window.location.href = url;
  };
};

const requestExchangeCodeForAccessToken = (code) => {
  return {
    type: REQUEST_EXCHANGE_CODE_FOR_ACCESS_TOKEN,
    code
  };
};

const receiveExchangeCodeForAccessToken = (code, json) => {
  return {
    type: RECEIVE_EXCHANGE_CODE_FOR_ACCESS_TOKEN,
    code,
    accessToken: json.access_token,
    expiresIn: json.expires_in,
    refreshToken: json.refresh_token,
    tokenType: json.token_type,
    userId: json.user_id
  };
};

export const exchangeCodeForAccessToken = (code) => {
  return (dispatch) => {
    dispatch(requestExchangeCodeForAccessToken(code));
    const url = 'https://api.getmondo.co.uk/oauth2/token';

    // const data = new FormData();
    // data.append('grant_type', 'authorization_code');
    // data.append('client_id', mondoConfig.clientId);
    // data.append('client_secret', mondoConfig.clientSecret);
    // data.append('redirect_uri', window.location.href);
    // data.append('code', code);
    const data = {
      grant_type: 'authorization_code',
      client_id: mondoConfig.clientId,
      client_secret: mondoConfig.clientSecret,
      redirect_uri: 'http://localhost:8080/',
      code
    };

    return axios.post(url, queryString.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then(response => dispatch(receiveExchangeCodeForAccessToken(code, response.data)));
    // return fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => response.json())
    //   .then(json => dispatch(receiveExchangeCodeForAccessToken(code, json)));
  };
};
