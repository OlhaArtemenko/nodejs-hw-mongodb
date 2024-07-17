// server.js

import express from 'express';
import cors from 'cors';
import pino from 'pino';
import expressPino from 'pino-http';
import dotenv from 'dotenv';
import contactsRouter from './routes/contacts.js';

dotenv.config();

const app = express();
const logger = pino();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(expressPino({ logger }));
app.use(express.json());

app.use('/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

function setupServer() {
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
}

export { setupServer };
