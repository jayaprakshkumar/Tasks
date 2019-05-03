import { combineReducers } from 'redux';
import auth from './Auth';
import application from './Application';

 
const rootReducer = combineReducers({
    auth,
    application
});
 
export default rootReducer;