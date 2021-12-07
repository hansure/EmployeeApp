import {combineReducers} from 'redux';
import employeeReducer from './employeeReducers';

export const rootReducer =  combineReducers({
    employeeReducer
})

export type AppState = ReturnType<typeof rootReducer> 