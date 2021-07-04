import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import UsersReducer from './reducers/UsersReducer';

let reducersBox = combineReducers({
    usersReducer: UsersReducer
});


type rootReducerType = typeof reducersBox;
export type AppStateType = ReturnType<rootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

let Store = createStore(reducersBox, applyMiddleware(thunkMiddleware));

export default Store