import _service from '../services'
import _helper from '../helpers'

const labels = {
    LOAD_CONTACT: 'Contact : load',
    LOAD_CONTACT_SUCCESS: 'Contact : load data success',
    LOAD_CONTACT_ERROR: 'Contact : load data error',
}

const loadObject = {
    type: labels.LOAD_CONTACT
}

function errorObject (type) {
    return { type: type }
}

/** =========== Global methods =========== */
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
                dispatch(errorObject(labels.LOAD_CONTACT_ERROR))
            })
    }
}


export const contactAction = {
    labels,
    loadContact
}