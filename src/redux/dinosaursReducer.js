import * as ActionTypes from './ActionTypes';
import { DINOSAURS } from '../shared/dinosaurs';

export const initialState = {
    isLoading: true,
    errMess: null,
    dinosaurs: DINOSAURS,
}

export const DinosaursReducer = (state = initialState, action) => {
    switch (action.type) {
/*        case ActionTypes.ADD_DINOSAURS:
            return {...state, isLoading: false, errMess: null, dinosaurs: action.payload}
        case ActionTypes.DINOSAURS_LOADING:
            return {...state, isLoading: true, errMess: null, dinosaurs: []}
        case ActionTypes.DINOSAURS_FAILED:
            return {...state, isLoading: false, errMess: action.payload}*/
        default:
            return state;
    }
}