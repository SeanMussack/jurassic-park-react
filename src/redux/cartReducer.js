import * as ActionTypes from './ActionTypes';

const initialState = {
    errMess: null,
    isCartModalOpen: false,
    cart: [],
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {...state, errMess: null, cart: state.cart.concat(action.payload)}
        case ActionTypes.CART_FAILED:
            return {...state, errMess: action.payload}
        case ActionTypes.TOGGLE_CART_MODAL:
            return {...state, errMess: null, isCartModalOpen: !(state.isCartModalOpen)}
        default:
            return state;
    }
}