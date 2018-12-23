const db = require('../config/index')
const Category = require('../models').Category

module.exports = {
    create (req, res, next) {
        Category.create(req.body, (err, category) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.createCategory = category
                req.body.endPoint = category
                next()
            }
        })
    },

    findAll (req, res, next) {
        Category.find(req.query, (err, categories) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.findAllCategory = categories
                req.body.endPoint = categories
                next()
            }
        })
    },

    update (req, res, next) {
        Category.updateOne(req.query, req.body, (err, isUpdated) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.updateCategory = isUpdated
                req.body.endPoint = isUpdated
                next()
            }
        })
    },

    delete (req, res, next) {
        Category.deleteMany({
            $or: req.body
        }, (err, isDeleted) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                console.log(isDeleted)
                req.body.deleteCategory = isDeleted
                req.body.endPoint = isDeleted
                next()
            }
        })
    },
}