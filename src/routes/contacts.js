import express from 'express';
import {
  getContacts,
  getContactById,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts); // Змінив маршрут на '/'
router.get('/:contactId', getContactById);

export default router;
