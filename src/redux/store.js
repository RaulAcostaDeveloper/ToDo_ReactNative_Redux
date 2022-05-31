import * as reducers from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Aquí los reducers
export default createStore( combineReducers({
    ...reducers,
}), applyMiddleware(thunk))