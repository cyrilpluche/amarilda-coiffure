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
    DELETE_DATA_ERROR: 'Admin : delete data error'
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

/** =========== Member methods =========== */

function loadMember (dispatch) {
    dispatch(loadObject)
    _service.Member.findAll()
        .then(members => {
            dispatch({
                type: labels.LOAD_DATA_SUCCESS,
                payload: {
                    data: members,
                    labels: Object.keys(_service.Member.model),
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
                    labels: Object.keys(_service.Prestation.model),
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

export const adminAction = {
    labels,
    loadData,
    createElement,
    deleteData,
    updateElement
}