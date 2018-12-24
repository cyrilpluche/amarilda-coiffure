const express = require('express');
const router = express.Router();

const contact = require('../controllers').Contact;

router.get('/find_all', contact.findAll);

router.post('/create', contact.create);

router.put('/update', contact.update);

router.post('/delete', contact.delete, contact.findAll);

module.exports = router;