const db = require('../config/index')
const Contact = require('../models').Contact

module.exports = {
    create (req, res, next) {
        Contact.create(req.body, (err, contact) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.createContact = contact
                req.body.endPoint = contact
                next()
            }
        })
    },

    findAll (req, res, next) {
        Contact.find(req.query, (err, contacts) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.findAllContact = contacts
                req.body.endPoint = contacts
                next()
            }
        })
    },

    update (req, res, next) {
        Contact.updateOne(req.query, req.body, (err, isUpdated) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.updateContact = isUpdated
                req.body.endPoint = isUpdated
                next()
            }
        })
    },

    delete (req, res, next) {
        Contact.deleteMany({
            $or: req.body
        }, (err, isDeleted) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                console.log(isDeleted)
                req.body.deleteContact = isDeleted
                req.body.endPoint = isDeleted
                next()
            }
        })
    },
}