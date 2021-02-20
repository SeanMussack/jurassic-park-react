import { createStore, combineReducers, applyMiddleware } from 'redux';
//import thunk from "redux-thunk";
//import logger from "redux-logger";
import { DinosaursReducer } from './dinosaursReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dinosaurs: DinosaursReducer,
        }),
//        applyMiddleware(thunk, logger)
    );
    return store;
};