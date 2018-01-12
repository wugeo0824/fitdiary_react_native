import { combineReducers } from 'redux';
import navReducer from './NavigationReducer';
import recordFormReducer from './RecordFormReducer';

export default combineReducers({
    nav: navReducer,
    recordForm: recordFormReducer,
});
