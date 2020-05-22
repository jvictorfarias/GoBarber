import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

export const { AUTH_SECRET } = process.env;
export const { TOKEN_EXPIRATION_TIME } = process.env;
export const { APP_WEB_URL } = process.env;
export const { APP_API_URL } = process.env;
export const { MAIL_DRIVER } = process.env;
export const { MAIL_OWNER } = process.env;
export const { MAIL_DOMAIN } = process.env;
export const { STORAGE_DRIVER } = process.env;
export const { AWS_S3_BUCKET_URL } = process.env;
export const { AWS_S3_BUCKET } = process.env;
export const { REDIS_HOST } = process.env;
export const { REDIS_PORT } = process.env;
export const { REDIS_PASS } = process.env;
