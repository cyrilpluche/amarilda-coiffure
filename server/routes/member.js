const express = require('express');
const router = express.Router();

const member = require('../controllers').Member;
const _helper = require('../helpers')

router.get('/find_all', member.findAll);
router.get('/login', member.login, _helper.Token.generateToken);
router.get('/is_logged', _helper.Token.verifyToken);

router.post('/create', _helper.Bcrypt.cryptPassword, member.create);
router.post('/create_admin_if_not_exist', member.initAdmin, _helper.Bcrypt.cryptPassword, member.createAdminIfNotExist);

router.put('/update', member.update);
router.put('/update_admin', member.updateAdmin);

router.post('/delete', member.delete, member.findAll);

module.exports = router;