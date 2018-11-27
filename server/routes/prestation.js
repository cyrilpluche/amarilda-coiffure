const express = require('express');
const router = express.Router();

const prestation = require('../controllers').Prestation;

router.get('/find_all', prestation.findAll);

router.post('/create', prestation.create);

router.put('/update', prestation.update);

router.post('/delete', prestation.delete, prestation.findAll);

module.exports = router;