import queryString from 'query-string';
import mondoConfig from '../../mondo.config';

export function requestSignIn() {
  const qs = queryString.stringify({
    client_id: mondoConfig.clientId,
    redirect_uri: mondoConfig.redirectUri,
    response_type: 'code',
    state: ''
  });

  window.location.href = `https://auth.getmondo.co.uk/?${qs}`;
}

export default {
  requestSignIn
};
