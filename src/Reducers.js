import {combineReducers} from 'redux';

import formReducer from './Form/formReducer';


const allReducers = combineReducers({
    users: formReducer
});

export default allReducers;