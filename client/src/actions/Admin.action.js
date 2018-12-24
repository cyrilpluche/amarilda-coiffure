import _service from '../services'
import _helper from '../helpers'

const labels = {
    SWITCH_TABLE: 'Admin : switch table',
    LOAD: 'Admin : load',
    LOAD_DATA_SUCCESS: 'Admin : load data success',
    LOAD_DATA_ERROR: 'Admin : load data error',
    CREATE_DATA_SUCCESS: 'Admin : create data success',
    CREATE_DATA_ERROR: 'Admin : create data error',
    UPDATE_DATA_SUCCESS: 'Admin : update data success',
    UPDATE_DATA_ERROR: 'Admin : update data error',
    DELETE_DATA_SUCCESS: 'Admin : delete data success',
    DELETE_DATA_ERROR: 'Admin : delete data error',

    LOAD_CONTACT_SUCCESS: 'Admin : load contact success',
    CREATE_CONTACT_SUCCESS: 'Admin : create contact success',
    UPDATE_CONTACT_SUCCESS: 'Admin : update contact success',
    DELETE_CONTACT_SUCCESS: 'Admin : delete contact success',

    CREATE_ADMIN_SUCCESS: 'Admin : create admin success',
    ADMIN_ALREADY_EXIST: 'Admin : already exist',

    LOG_ADMIN_SUCCESS: 'Admin : log admin success',
    LOG_ADMIN_ERROR: 'Admin : log admin error',
    IS_LOGGED_TRUE: 'Admin : admin is logged',
    IS_LOGGED_FALSE: 'Admin : admin is not logged',
    LOG_OFF: 'Admin : admin logged off',
    UPDATE_ADMIN_SUCCESS: 'Admin : update admin success',
    UPDATE_ADMIN_ERROR: 'Admin : update admin error'
}

const loadObject = {
    type: labels.LOAD
}

function errorObject (type) {
    return { type: type }
}

/** =========== Global methods =========== */

function loadData (table) {
    return (dispatch) => {
        dispatch({ type: labels.SWITCH_TABLE, payload: table })
        if (table === 'Member') {
            loadMember(dispatch)
        } else if (table ==='Prestation') {
            loadPrestation(dispatch)
        } else {
            console.log('No Table')
        }
    }
}

function createElement (table, element, index) {
    return (dispatch) => {
        if (table === 'Member') {
            createMember(dispatch, element)
        } else if (table ==='Prestation') {
            createPrestation(dispatch, element)
        } else {
            console.log('No Table')
        }
    }
}

function updateElement (table, element, index) {
    return (dispatch) => {
        if (table === 'Member') {
            updateMember(dispatch, element, index)
        } else if (table ==='Prestation') {
            updatePrestation(dispatch, element, index)
        } else {
            console.log('No Table')
        }
    }
}

function deleteData (table, data) {
    return (dispatch) => {
        if (table === 'Member') {
            deleteMember(dispatch, data)
        } else if (table === 'Prestation') {
            deletePrestation(dispatch, data)
        } else {
            console.log('No Table')
        }
    }
}

function generateAdmin () {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Member.createAdminIfNotExist()
            .then(status => {
                if (status === 1) {
                    dispatch({
                        type: labels.CREATE_ADMIN_SUCCESS,
                    })
                } else {
                    dispatch({
                        type: labels.ADMIN_ALREADY_EXIST,
                    })
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.CREATE_DATA_ERROR))
            })
    }
}

/** =========== Member methods =========== */

function loadMember (dispatch) {
    dispatch(loadObject)
    _service.Member.findAll()
        .then(members => {
            dispatch({
                type: labels.LOAD_DATA_SUCCESS,
                payload: {
                    data: members,
                    labels: _service.Member.labels,
                    element: _service.Member.model,
                    elementRules: _service.Member.rules
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.LOAD_DATA_ERROR))
        })
}

function createMember (dispatch, member) {
    dispatch(loadObject)
    _service.Member.create(member)
        .then(createdMember => {
            dispatch({
                type: labels.CREATE_DATA_SUCCESS,
                payload: {
                    element: createdMember,
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.CREATE_DATA_ERROR))
        })
}

function updateMember (dispatch, member, index) {
    dispatch(loadObject)
    _service.Member.update(member)
        .then(isUpdated => {
            dispatch({
                type: labels.UPDATE_DATA_SUCCESS,
                payload: {
                    element: member,
                    index: index,
                    isUpdated: isUpdated
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.UPDATE_DATA_ERROR))
        })
}

function deleteMember (dispatch, members) {
    dispatch(loadObject)
    let body = _helper.Request.convertToArrayObject(members, '_id')
    _service.Member.delete(body)
        .then(newMembers => {
            dispatch({
                type: labels.DELETE_DATA_SUCCESS,
                payload: {
                    data: newMembers
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.DELETE_DATA_ERROR))
        })
}

/** =========== Prestation methods =========== */

function loadPrestation (dispatch) {
    dispatch(loadObject)
    _service.Prestation.findAll()
        .then(prestations => {
            dispatch({
                type: labels.LOAD_DATA_SUCCESS,
                payload: {
                    data: prestations,
                    labels: _service.Prestation.labels,
                    element: _service.Prestation.model,
                    elementRules: _service.Prestation.rules
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.LOAD_DATA_ERROR))
        })
}

function createPrestation (dispatch, prestation) {
    dispatch(loadObject)
    _service.Prestation.create(prestation)
        .then(createdPrestation => {
            dispatch({
                type: labels.CREATE_DATA_SUCCESS,
                payload: {
                    element: createdPrestation,
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.CREATE_DATA_ERROR))
        })
}

function updatePrestation (dispatch, prestation, index) {
    dispatch(loadObject)
    _service.Prestation.update(prestation)
        .then(isUpdated => {
            dispatch({
                type: labels.UPDATE_DATA_SUCCESS,
                payload: {
                    element: prestation,
                    index: index,
                    isUpdated: isUpdated
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.UPDATE_DATA_ERROR))
        })
}

function deletePrestation (dispatch, prestations) {
    dispatch(loadObject)
    let body = _helper.Request.convertToArrayObject(prestations, '_id')
    _service.Prestation.delete(body)
        .then(newPrestations => {
            dispatch({
                type: labels.DELETE_DATA_SUCCESS,
                payload: {
                    data: newPrestations
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.DELETE_DATA_ERROR))
        })
}

/** =========== Contact methods =========== */

function loadContact () {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Contact.findAll()
            .then(contacts => {
                dispatch({
                    type: labels.LOAD_CONTACT_SUCCESS,
                    payload: {
                        data: contacts[0],
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.LOAD_DATA_ERROR))
            })
    }
}

function createContact (contact) {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Contact.create(contact)
            .then(createdContact => {
                dispatch({
                    type: labels.CREATE_CONTACT_SUCCESS,
                    payload: {
                        element: createdContact,
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.CREATE_DATA_ERROR))
            })
    }
}

function updateContact (contact, index) {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Contact.update(contact)
            .then(isUpdated => {
                dispatch({
                    type: labels.UPDATE_CONTACT_SUCCESS,
                    payload: {
                        element: contact,
                        index: index,
                        isUpdated: isUpdated
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.UPDATE_DATA_ERROR))
            })
    }
}

function deleteContact (contacts) {
    return (dispatch) => {
        dispatch(loadObject)
        let body = _helper.Request.convertToArrayObject(contacts, '_id')
        _service.Contact.delete(body)
            .then(newContacts => {
                dispatch({
                    type: labels.DELETE_CONTACT_SUCCESS,
                    payload: {
                        data: newContacts
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.DELETE_DATA_ERROR))
            })
    }
}

/** =========== Login methods =========== */
function logAdmin (credentials) {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Member.login(credentials)
            .then(answer => {
                if (answer.is_logged) {
                    localStorage.setItem('token', answer.token)
                    dispatch({
                        type: labels.LOG_ADMIN_SUCCESS,
                        payload: {
                            member_email: credentials.member_email
                        }
                    })
                } else {
                    localStorage.removeItem('token')
                    dispatch({
                        type: labels.LOG_ADMIN_ERROR,
                        payload: {
                            error_msg: answer.error_msg,
                            member_email: credentials.member_email
                        }
                    })
                }

            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: labels.LOG_ADMIN_ERROR,
                    payload: {
                        error_msg: 'Il y a eu un problème avec le serveur. Merci de contacter le support technique.',
                        member_email: credentials.member_email
                    }
                })
            })
    }
}

function isAdminLogged () {
    return (dispatch) => {
        let token = { token: localStorage.getItem('token') }
        _service.Member.isLogged(token)
            .then(answer => {
                if (answer.is_logged) {
                    dispatch({
                        type: labels.IS_LOGGED_TRUE,
                        payload: {
                            member_email: answer.member_email
                        }
                    })
                } else {
                    localStorage.removeItem('token')
                    dispatch({
                        type: labels.IS_LOGGED_FALSE,
                    })
                }

            })
            .catch(error => {
                console.log(error)
                localStorage.removeItem('token')
                dispatch({
                    type: labels.IS_LOGGED_FALSE,
                })
            })
    }
}

function logoff () {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch({
            type: labels.LOG_OFF,
        })
    }
}

function updateAdmin (body) {

    return (dispatch) => {
        dispatch(loadObject)
        if (body.member_password.trim() === body.member_password_confirmation.trim() && body.member_password.trim() !== '') {
            let filteredBody = {
                member_email: body.member_email,
                member_old_password: body.member_old_password.trim(),
                member_password: body.member_password.trim()
            }
            _service.Member.updateAdmin(filteredBody)
                .then(answer => {
                    if (answer.isUpdated) {
                        dispatch({
                            type: labels.UPDATE_ADMIN_SUCCESS,
                        })
                    } else {
                        dispatch({
                            type: labels.UPDATE_ADMIN_ERROR,
                            payload: {
                                error_msg: answer.error_msg
                            }
                        })
                    }

                })
                .catch(error => {
                    console.log(error)
                    dispatch({
                        type: labels.UPDATE_ADMIN_ERROR,
                        payload: {
                            error_msg: 'Un problème avec le serveur est survenu, veuillez contacter le service technique'
                        }
                    })
                })
        } else {
            dispatch({
                type: labels.UPDATE_ADMIN_ERROR,
                payload: {
                    error_msg: 'Confirmation du nouveau mot passe érronée'
                }
            })
        }
    }
}

export const adminAction = {
    labels,
    loadData,
    createElement,
    deleteData,
    updateElement,

    loadContact,
    createContact,
    deleteContact,
    updateContact,

    generateAdmin,
    logAdmin,
    isAdminLogged,
    logoff,
    updateAdmin
}