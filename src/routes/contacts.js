import express from 'express';
import {
  getContacts,
  getContactById,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/:contactId', getContactById);

export default router;
