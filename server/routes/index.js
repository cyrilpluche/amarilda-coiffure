const express = require('express');
const router = express.Router();

router.use('/member', require("./member"));
router.use('/prestation', require("./prestation"));

module.exports = router;
