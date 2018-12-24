import _action from "../actions";

const labels = _action.adminAction.labels

const initialState = {
    isLoading: 1,
    data: [],
    labels: ['Prénom', 'Nom de Famille', 'Age'],
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
    ],
    contact: {
        contact_phone: null,
        contact_email: '',
        contact_description: '',
        contact_schedule: '',
        contact_siret: '',
        contact_home_description: '',
        contact_home_name: ''
    },
    is_contact_init: false,
    is_logged: false,
    login_member_email: ''
};

export function Admin (state = initialState, {type, payload}) {
    switch (type) {
        case labels.LOAD:
            return { ...state, isLoading: state.isLoading + 1 };

        case labels.SWITCH_TABLE:
            return { ...state, table: payload };

        /** ===== LOAD ===== */

        case labels.LOAD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: payload.data,
                labels: payload.labels,
                element: payload.element,
                elementRules: payload.elementRules
            };

        case labels.LOAD_CONTACT_SUCCESS:
            if (payload.data) {
                return {
                    ...state,
                    isLoading: state.isLoading - 1,
                    contact: payload.data,
                    is_contact_init: true
                }
            } else {
                return { ...state, isLoading: state.isLoading - 1 }
            }

        case labels.LOAD_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        /** ===== CREATE ===== */

        case labels.CREATE_DATA_SUCCESS:
            let newData = Array.from(state.data)
            newData.push(payload.element)
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: newData
            };

        case labels.CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                contact: payload.element
            };

        case labels.CREATE_ADMIN_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                is_logged: false
            };

        case labels.ADMIN_ALREADY_EXIST:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                is_logged: true
            };

        case labels.CREATE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        /** ===== UPDATE ===== */

        case labels.UPDATE_DATA_SUCCESS:
            let updatedData = Array.from(state.data)
            updatedData[payload.index] = payload.element
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: updatedData
            };

        case labels.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                contact: payload.element
            };

        case labels.UPDATE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        /** ===== DELETE ===== */

        case labels.DELETE_DATA_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, data: payload.data };

        case labels.DELETE_CONTACT_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, contact: payload.data };

        case labels.DELETE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        /** ===== LOGIN ===== */

        case labels.LOG_ADMIN_SUCCESS:
            console.log(payload)
            return {
                ...state,
                isLoading: state.isLoading - 1,
                login_member_email: payload.member_email,
                is_logged: true,
                error_msg: null
            };

        case labels.LOG_ADMIN_ERROR:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                is_logged: false,
                error_msg: payload.error_msg,
                login_member_email: payload.member_email
            };

        case labels.IS_LOGGED_TRUE:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                login_member_email: payload.member_email,
                is_logged: true,
            };

        case labels.IS_LOGGED_FALSE:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                is_logged: false
            };

        case labels.LOG_OFF:
            return {
                ...state,
                is_logged: false,
                login_member_email: ''
            };

        case labels.UPDATE_ADMIN_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                error_msg: null,
            };

        case labels.UPDATE_ADMIN_ERROR:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                error_msg: payload.error_msg,
            };

        default:
            return state
    }
};
