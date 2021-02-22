import * as ActionTypes from './ActionTypes';

export const addToCart = cartItem => ({
    type: ActionTypes.ADD_TO_CART,
    payload: cartItem
});
export const toggleCartModal = () => ({
    type: ActionTypes.TOGGLE_CART_MODAL
});