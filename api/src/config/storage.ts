import { STORAGE_DRIVER } from '@shared/utils/environment';
import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';

interface IStorageConfig {
  driver: 's3' | 'disk';

  config: {
    disk: {
      storage: StorageEngine;
    };
  };
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  driver: STORAGE_DRIVER,
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  config: {
    disk: {
      storage: multer.diskStorage({
        destination: tmpFolder,
        filename(request, file, callback) {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    },
  },
} as IStorageConfig;
