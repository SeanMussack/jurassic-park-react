import { createStore, combineReducers, applyMiddleware } from 'redux';
//import thunk from "redux-thunk";
//import logger from "redux-logger";
import { DinosaursReducer } from './dinosaursReducer';
import { CartReducer } from './cartReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dinosaursReducer: DinosaursReducer,
            cartReducer: CartReducer
        })
//        applyMiddleware(thunk, logger)
    );
    return store;
};