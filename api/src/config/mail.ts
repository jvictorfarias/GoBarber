import {
  MAIL_DRIVER,
  MAIL_OWNER,
  MAIL_DOMAIN,
} from '@shared/utils/environment';

interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      name: MAIL_OWNER,
      email: MAIL_DOMAIN,
    },
  },
} as IMailConfig;
