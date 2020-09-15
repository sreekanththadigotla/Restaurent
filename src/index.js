import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import Menureducer from './Components/reducers/MenuIngrediets';
import authReducer from  './Components/Login/AuthReducer';
import thunk from 'redux-thunk';
import ord from './Components/Orders/OrderReducer';
 

const rootReducer = combineReducers({
    Menureducer:Menureducer,
    authReducer:authReducer,
    order:ord
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)) );

ReactDOM.render( <Provider store={store} ><App /></Provider>,  document.getElementById('root'));
registerServiceWorker();
