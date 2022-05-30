import * as reducers from './reducers/index';
import { createStore, combineReducers } from 'redux';

//Aquí los reducers
export default createStore( combineReducers({
    ...reducers,
}))