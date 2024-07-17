import { ContactsCollection } from '../models/contacts.js';

export const getAllContactsService = () => ContactsCollection.find();

export const getContactByIdService = (contactId) =>
  ContactsCollection.findById(contactId);
