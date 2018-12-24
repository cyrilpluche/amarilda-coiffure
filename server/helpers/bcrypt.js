const bcrypt = require('bcrypt');
const sel = 10;

module.exports = {
    cryptPassword(req, res, next) {
        bcrypt.hash(req.body.member_password, sel, (err, hash) => {
            if (err) res.status(400).send('Member:bcrypt:cryptPassword | ' + err)
            else {
                req.body.member_password = hash
                next()
            }
        });
    }
}