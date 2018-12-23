import { combineReducers } from 'redux';
import { Admin } from './Admin.reducer';
import { Prestation } from './Prestation.reducer';

const rootReducer = combineReducers({
    Admin,
    Prestation
});

export default rootReducer;