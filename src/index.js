const { setupServer } = require('./server');
const { initMongoConnection } = require('./db/initMongoConnection');

initMongoConnection()
  .then(() => {
    setupServer();
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
