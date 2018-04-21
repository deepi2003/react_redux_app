import FormContainer from './Form/FormContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducer from './Reducers';

if (process.env.NODE_ENV !== 'production') {
    const { reactopt } = require('reactopt');
    reactopt(React);
}

const store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 ReactDOM.render(
     <Provider store = {store}>
     <FormContainer/>
     </Provider>,
     document.getElementById('root'));