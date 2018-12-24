const express = require('express');
const router = express.Router();

const prestation = require('../controllers').Prestation;
const _helper = require('../helpers')

router.get('/find_all', prestation.findAll);

router.post('/create', prestation.create);

router.put('/update', prestation.update);

router.post('/delete', prestation.delete, prestation.findAll);

//router.use(_helper.Methods.formalizeIdV)

module.exports = router;