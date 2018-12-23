import _action from "../actions";

const labels = _action.adminAction.labels

const initialState = {
    isLoading: 0,
    data: [],
    labels: [],
    table: 'Member',
    element: {
        member_firstname: '',
        member_lastname: '',
        member_age: ''
    },
    elementRules: [
        'text',
        'text',
        'number'
    ]

};

export function Admin (state = initialState, {type, payload}) {
    switch (type) {
        case labels.LOAD:
            return { ...state, isLoading: state.isLoading + 1 };

        case labels.SWITCH_TABLE:
            return { ...state, table: payload };

        case labels.LOAD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: payload.data,
                labels: payload.labels,
                element: payload.element,
                elementRules: payload.elementRules
            };

        case labels.LOAD_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        case labels.CREATE_DATA_SUCCESS:
            let newData = Array.from(state.data)
            newData.push(payload.element)
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: newData
            };

        case labels.CREATE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        case labels.UPDATE_DATA_SUCCESS:
            let updatedData = Array.from(state.data)
            updatedData[payload.index] = payload.element
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: updatedData
            };

        case labels.UPDATE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        case labels.DELETE_DATA_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, data: payload.data };

        case labels.DELETE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        default:
            return state
    }
};
