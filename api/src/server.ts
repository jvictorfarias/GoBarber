import 'reflect-metadata';
import 'dotenv';

import express from 'express';
import ora from 'ora';
import routes from './routes';

import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  ora('Server Running').succeed();
});
