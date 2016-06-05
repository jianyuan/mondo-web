import queryString from 'query-string';
import * as Mondo from '../constants/Mondo';

function rootHref() {
  const { protocol, host } = window.location;
  return `${protocol}//${host}`;
}

export function requestSignIn() {
  return () => {
    const qs = queryString.stringify({
      client_id: Mondo.CLIENT_ID,
      redirect_uri: rootHref(),
      response_type: 'code'
    });

    window.location.href = `https://auth.getmondo.co.uk/?${qs}`;
  };
}
