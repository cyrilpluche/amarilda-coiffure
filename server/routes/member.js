const express = require('express');
const router = express.Router();

const member = require('../controllers').Member;

router.get('/find_all', member.findAll);

router.post('/create', member.create);

router.put('/update', member.update);

router.post('/delete', member.delete, member.findAll);

module.exports = router;