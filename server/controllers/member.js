const db = require('../config/index')
const Member = require('../models').Member

module.exports = {
    create (req, res, next) {
        Member.create(req.body, (err, member) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.createMember = member
                req.body.endPoint = member
                next()
            }
        })
    },

    findAll (req, res, next) {
        Member.find(req.query, (err, members) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.findAllMember = members
                req.body.endPoint = members
                next()
            }
        })
    },

    update (req, res, next) {
        Member.updateOne(req.query, req.body, (err, isUpdated) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.updateMember = isUpdated
                req.body.endPoint = isUpdated
                next()
            }
        })
    },

    delete (req, res, next) {
        Member.deleteMany({
            $or: req.body
        }, (err, isDeleted) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                console.log(isDeleted)
                req.body.deleteMember = isDeleted
                req.body.endPoint = isDeleted
                next()
            }
        })
    },
}