import _action from "../actions";

const labels = _action.contactAction.labels

const initialState = {
    isLoading: 0,
    contact: {}

};

export function Contact (state = initialState, {type, payload}) {
    switch (type) {
        case labels.LOAD_CONTACT:
            return { ...state, isLoading: state.isLoading + 1 };

        case labels.LOAD_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                contact: payload.data,
            };

        case labels.LOAD_CONTACT_ERROR:
            return {
                ...state,
                isLoading: state.isLoading - 1,
            };

        default:
            return state
    }
};
