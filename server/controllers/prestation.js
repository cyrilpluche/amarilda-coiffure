const db = require('../config/index')
const Prestation = require('../models').Prestation

module.exports = {
    create (req, res, next) {
        console.log(req.body)
        Prestation.create(req.body, (err, prestation) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.createPrestation = prestation
                req.body.endPoint = prestation
                next()
            }
        })
    },

    findAll (req, res, next) {
        Prestation.find(req.query, (err, prestations) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.findAllPrestation = prestations
                req.body.endPoint = prestations
                next()
            }
        })
    },

    update (req, res, next) {
        Prestation.updateOne(req.query, req.body, (err, isUpdated) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.updatePrestation = isUpdated
                req.body.endPoint = isUpdated
                next()
            }
        })
    },

    delete (req, res, next) {
        Prestation.deleteMany({
            $or: req.body
        }, (err, isDeleted) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                console.log(isDeleted)
                req.body.deletePrestation = isDeleted
                req.body.endPoint = isDeleted
                next()
            }
        })
    },
}