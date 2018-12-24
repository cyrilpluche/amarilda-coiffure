var jwt = require('jsonwebtoken');

module.exports = {
    generateToken(req, res, next) {
        if (req.body.endPoint.is_logged) {
            let payload = Object.assign({}, req.body.login)
            req.body.endPoint.token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24 * 365 // expires in 1 year
            })
            next()
        } else {
            next()
        }
    },

    verifyToken(req, res, next) {
        let token = req.query.token;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    res.status(400).send('Failed to authenticate token.');
                } else {
                    req.body.endPoint = {
                        is_logged: true,
                        member_email: decoded._doc.member_email
                    };
                    next();
                }
            })
        } else {
            res.status(400).send('No token provided.');
        }
    }
}