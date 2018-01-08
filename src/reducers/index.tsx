import { combineReducers } from 'redux';
import navReducer from './nav';

export default combineReducers({
    dummy: () => [],
    nav: navReducer
});
