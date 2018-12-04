const express = require('express');
const router = express.Router();

const schedule = require('../controllers').Schedule;

router.get('/find_all', schedule.findAll);

router.post('/create', schedule.create);

router.put('/update', schedule.update);

router.post('/delete', schedule.delete, schedule.findAll);

module.exports = router;