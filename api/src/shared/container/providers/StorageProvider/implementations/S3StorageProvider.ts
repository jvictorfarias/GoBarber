import fs from 'fs';
import path from 'path';
import aws, { S3 } from 'aws-sdk';
import mime from 'mime';
import uploadConfig from '@config/storage';
import { AWS_S3_BUCKET } from '@shared/utils/environment';
import AppError from '@shared/errors/AppError';
import IStorageProvider from '../models/IStorageProvider';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);

    const fileContent = await fs.promises.readFile(originalPath, {
      encoding: null,
    });

    const fileType = mime.getType(originalPath);

    if (!fileType) {
      throw new AppError('File does not exists');
    }

    await this.client
      .putObject({
        Bucket: AWS_S3_BUCKET || 'gobarber-jvictorfarias',
        Key: file,
        ACL: 'public-read',
        ContentType: fileType,
        Body: fileContent,
      })
      .promise();

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: AWS_S3_BUCKET || 'gobarber-jvictorfarias',
        Key: file,
      })
      .promise();
  }
}

export default S3StorageProvider;
