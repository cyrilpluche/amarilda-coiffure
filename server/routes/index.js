const express = require('express');
const router = express.Router();

router.use('/category', require("./category"));
router.use('/member', require("./member"));
router.use('/prestation', require("./prestation"));
router.use('/schedule', require("./schedule"));
router.use('/contact', require("./contact"));

module.exports = router;
