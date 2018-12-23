import _action from "../actions";

const labels = _action.prestationAction.labels

const initialState = {
    isLoading: 0,
    prestations: []

};

export function Prestation (state = initialState, {type, payload}) {
    switch (type) {
        case labels.LOAD_PRESTATION:
            return { ...state, isLoading: state.isLoading + 1 };

        case labels.LOAD_PRESTATION_SUCCESS:
            return {
                ...state,
                isLoading: state.isLoading - 1,
                prestations: payload.data,
            };

        default:
            return state
    }
};
