const express = require('express');
const router = express.Router();

const category = require('../controllers').Category;

router.get('/find_all', category.findAll);

router.post('/create', category.create);

router.put('/update', category.update);

router.post('/delete', category.delete, category.findAll);

module.exports = router;