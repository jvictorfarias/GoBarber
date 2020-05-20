import { AUTH_SECRET, TOKEN_EXPIRATION_TIME } from '@shared/utils/environment';

interface IAuthConfig {
  secret: string;
  expiresIn: string;
}

export default {
  secret: AUTH_SECRET,
  expiresIn: TOKEN_EXPIRATION_TIME,
} as IAuthConfig;
