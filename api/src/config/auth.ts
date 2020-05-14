interface IAuthConfig {
  secret: string;
  expiresIn: string;
}

export default {
  secret: process.env.APP_SECRET,
  expiresIn: process.env.TOKEN_EXPIRATION_TIME,
} as IAuthConfig;
