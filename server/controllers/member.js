const db = require('../config/index')
const Member = require('../models').Member
const bcrypt = require('bcrypt');
const sel = 10;

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

    initAdmin (req, res, next) {
        req.body = {
            member_firstname: 'Amarilda',
            member_lastname: 'Pluche',
            member_date_of_birth: '06041967',
            member_status: 1,
            member_email: 'ericmara487@gmail.com',
            member_password: 'password'
        }
        next()
    },

    createAdminIfNotExist (req, res, next) {
        Member.findOne({member_email: req.body.member_email}, (err, member) => {
            if (err) {
                res.status(400).send(err.errors);
            }
            else {
                if (member) {
                    req.body.createAdminIfNotExist = member
                    req.body.endPoint = '0'
                    next()
                } else {
                    Member.create(req.body, (err, member) => {
                        if (err) {
                            res.status(400).send(err.errors);
                        }
                        else {
                            req.body.createAdminIfNotExist = member
                            req.body.endPoint = '1'
                            next()
                        }
                    })
                }

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

    login (req, res, next) {
        let member_email = req.query.member_email
        let member_password = req.query.member_password

        Member.findOne({member_email: member_email}, (err, member) => {
            if (err) {
                res.status(400).send(err.errors);
            } else {
                if (member) {
                    bcrypt.compare(member_password, member.member_password, (err, res) => {
                        if (err || !res) {
                            req.body.endPoint = {is_logged: false, error_msg: 'Identifiant ou mot de passe incorrect'}
                        } else {
                            member.member_password = null
                            req.body.login = member
                            req.body.endPoint = {is_logged: true, token: 'none'}
                        }
                        next()
                    })
                } else {
                    req.body.endPoint = {is_logged: false, error_msg: 'Identifiant ou mot de passe incorrect'}
                    next()
                }
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

    updateAdmin (req, res, next) {
        let member_email = req.body.member_email
        let member_password = req.body.member_old_password

        Member.findOne({member_email: member_email}, (err, member) => {
            if (err) {
                res.status(400).send(err.errors);
            } else {
                if (member) {
                    // FOUNDED
                    bcrypt.compare(member_password, member.member_password, (err, res) => {
                        if (err || !res) {
                            req.body.endPoint = {is_updated: false, error_msg: 'Le mot de passe est incorrect'}
                            next()
                        } else {
                            bcrypt.hash(req.body.member_password, sel, (err, hash) => {
                                if (err) res.status(400).send('Member:bcrypt:cryptPassword | ' + err)
                                else {
                                    Member.updateOne({member_email: member_email}, {member_password: hash}, (err, isUpdated) => {
                                        if (err) {
                                            req.body.endPoint = {is_updated: false, error_msg: 'Un problème est survenu, veuillez contacter le service technique'}
                                        }
                                        else {
                                            req.body.endPoint = {is_updated: true}
                                        }
                                        next()
                                    })
                                }
                            });
                        }
                    })
                } else {
                    req.body.endPoint = {is_logged: false, error_msg: 'Un problème est survenu, veuillez contacter le service technique'}
                    next()
                }
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