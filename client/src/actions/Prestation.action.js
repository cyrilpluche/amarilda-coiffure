import _service from '../services'
import _helper from '../helpers'

const labels = {
    LOAD_PRESTATION: 'Prestation : load',
    LOAD_PRESTATION_SUCCESS: 'Prestation : load data success',
    LOAD_PRESTATION_ERROR: 'Prestation : load data error',
}

const loadObject = {
    type: labels.LOAD_PRESTATION
}

function errorObject (type) {
    return { type: type }
}

/** =========== Global methods =========== */
function loadPrestations () {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Prestation.findAll()
            .then(prestations => {
                dispatch({
                    type: labels.LOAD_PRESTATION_SUCCESS,
                    payload: {
                        data: prestations,
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.LOAD_PRESTATION_ERROR))
            })
    }
}


export const prestationAction = {
    labels,
    loadPrestations
}