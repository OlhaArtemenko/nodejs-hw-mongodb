const express = require('express');
const cors = require('cors');
const pino = require('pino');
const pinoHttp = require('pino-http');

const app = express();
const logger = pino();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(pinoHttp({ logger }));

app.use(express.json());

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

function setupServer() {
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
}

module.exports = { setupServer };
