const db = require('../config/index')
const Schedule = require('../models').Schedule

module.exports = {
    create (req, res, next) {
        Schedule.create(req.body, (err, schedule) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.createSchedule = schedule
                req.body.endPoint = schedule
                next()
            }
        })
    },

    findAll (req, res, next) {
        Schedule.find(req.query, (err, schedules) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.findAllSchedule = schedules
                req.body.endPoint = schedules
                next()
            }
        })
    },

    update (req, res, next) {
        Schedule.updateOne(req.query, req.body, (err, isUpdated) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                req.body.updateSchedule = isUpdated
                req.body.endPoint = isUpdated
                next()
            }
        })
    },

    delete (req, res, next) {
        Schedule.deleteMany({
            $or: req.body
        }, (err, isDeleted) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                console.log(isDeleted)
                req.body.deleteSchedule = isDeleted
                req.body.endPoint = isDeleted
                next()
            }
        })
    },
}