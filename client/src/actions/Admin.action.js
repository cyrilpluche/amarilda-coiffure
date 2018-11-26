import _service from '../services'
import _helper from '../helpers'

const labels = {
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
        if (table === 'Member') {
            loadMember(dispatch)
        } else {
            console.log('No Table')
        }
    }
}

function createElement (table, element, index) {
    return (dispatch) => {
        if (table === 'Member') {
            createMember(dispatch, element)
        } else {
            console.log('No Table')
        }
    }
}

function updateElement (table, element, index) {
    return (dispatch) => {
        if (table === 'Member') {
            updateMember(dispatch, element, index)
        } else {
            console.log('No Table')
        }
    }
}

function deleteData (table, data) {
    return (dispatch) => {
        if (table === 'Member') {
            deleteMember(dispatch, data)
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
                    element: _service.Member.model
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
        .then(members => {
            dispatch({
                type: labels.DELETE_DATA_SUCCESS,
                payload: {
                    data: members
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