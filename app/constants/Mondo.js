import * as mondoConfig from '../../mondo.config';

export const CLIENT_ID = mondoConfig.CLIENT_ID;
export const CLIENT_SECRET = mondoConfig.CLIENT_SECRET;
export const REDIRECT_URI = mondoConfig.REDIRECT_URI || window.location.origin;
