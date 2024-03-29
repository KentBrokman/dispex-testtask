import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunkMiddleware from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store

export default store