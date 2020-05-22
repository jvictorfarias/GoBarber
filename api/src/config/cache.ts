import { RedisOptions } from 'ioredis';
import { REDIS_HOST, REDIS_PORT, REDIS_PASS } from '@shared/utils/environment';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: REDIS_HOST,
      port: REDIS_PORT,
      password: REDIS_PASS || undefined,
    },
  },
} as ICacheConfig;
