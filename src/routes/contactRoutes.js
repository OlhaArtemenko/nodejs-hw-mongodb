const express = require('express');
const {
  getContacts,
  getContactById,
} = require('../controllers/contactController');

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/contacts/:contactId', getContactById);

module.exports = router;
