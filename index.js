import express from 'express';
import { logger, loggerErrorMiddleware, loggerRequestResponseMiddleware } from './logging.service.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// If use request middleware
// app.use(loggerRequestResponseMiddleware);

app.get('/info', (req, res) => {
  logger.info('info example')
  res.json({});
});

app.get('/info/:id', (req, res) => {
  logger.info(`value: ${req.params.id}`);
  res.json({});
});

app.get('/error', (req, res) => {
  logger.error(`error example`);
  res.json({});
});

app.use(loggerErrorMiddleware);

app.listen(3000, () => {
  logger.info('nodejs listens 3000 port');
});
