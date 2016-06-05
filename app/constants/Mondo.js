import * as mondoConfig from '../../mondo.config';

function rootUri() {
  const { protocol, host } = window.location;
  return `${protocol}//${host}/sign_in`;
}

export const CLIENT_ID = mondoConfig.CLIENT_ID;
export const REDIRECT_URI = mondoConfig.REDIRECT_URI || rootUri();

// TODO hide this from client!
export const CLIENT_SECRET = mondoConfig.CLIENT_SECRET;
