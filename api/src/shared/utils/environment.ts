import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

// For further implementation scalability
// switch (process.env.NODE_ENV) {
//   case 'test':
//     path = `${__dirname}/../../.env.test`;
//     break;
//   case 'production':
//     path = `${__dirname}/../../.env.production`;
//     break;
//   default:
//     path = `${__dirname}/../../.env.development`;
// }
dotenv.config({ path });

export const { AUTH_SECRET } = process.env;
export const { TOKEN_EXPIRATION_TIME } = process.env;
export const { APP_WEB_URL } = process.env;
export const { APP_API_URL } = process.env;
