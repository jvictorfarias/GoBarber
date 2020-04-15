import 'reflect-metadata';
import 'dotenv';

import express from 'express';
import ora from 'ora';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  ora('Server Running').succeed();
});
