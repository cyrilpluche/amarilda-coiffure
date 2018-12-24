import { combineReducers } from 'redux';
import { Admin } from './Admin.reducer';
import { Prestation } from './Prestation.reducer';
import { Contact } from "./Contact.reducer";

const rootReducer = combineReducers({
    Admin,
    Prestation,
    Contact
});

export default rootReducer;