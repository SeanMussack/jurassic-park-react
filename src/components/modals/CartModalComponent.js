import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container, Row, Col, Button } from 'reactstrap';
import { CARTITEMS } from '../../shared/cartItems';

export function toggleCartModal () {
    this.setState({isCartModalOpen: !this.state.isCartModalOpen});
}
export function findIndex(cartItem) {
    return this.state.cart.findIndex((cartObject) => compareCartItems(cartItem, cartObject.cartItem));
}
function compareCartItems(cartItem1, cartItem2) {
    if (cartItem2 === null) {
        console.log("cartItem2 === null");
    }
    if (cartItem1.key === cartItem2.key) {
        return true;
    } else {
        return false;
    }
}
export function increaseQuantity(index, increaseAmount) {
    const newCartObject = {
        cartItem: this.state.cart[index].cartItem,
        quantity: this.state.cart[index].quantity + increaseAmount
    }
    const newCart = this.state.cart.slice(0, index).concat(newCartObject).concat(this.state.cart.slice(index + 1, this.state.cart.length));
    this.setState({cart: newCart, numItemsInCart: this.state.numItemsInCart + increaseAmount});
//    this.checkToCombine(newCartObject.cartItem);
}
export function decrementQuantity(cartItem) {
    const foundIndex = this.findIndex(cartItem);
    if (this.state.cart[foundIndex].quantity < 2) {
        this.removeFromCart(cartItem);
    } else {
        const newCartObject = {
            cartItem: cartItem,
            quantity: this.state.cart[foundIndex].quantity - 1
        }
        const newCart = this.state.cart.slice(0, foundIndex).concat(newCartObject).concat(this.state.cart.slice(foundIndex + 1, this.state.cart.length));
        this.setState({cart: newCart, numItemsInCart: this.state.numItemsInCart - 1});
//        this.checkToCombine(cartItem);
    }
}
export function addToCart(cartItem, quantityToAdd) {
    if (!(quantityToAdd)) {
        if (cartItem.minimumQuantity) {
            quantityToAdd = cartItem.minimumQuantity;
        } else {
            quantityToAdd = 1;
        }
    }
    const foundIndex = this.findIndex(cartItem);
    if (foundIndex > -1) {
        this.increaseQuantity(foundIndex, quantityToAdd);
    } else {
        const newCartObject = {
            cartItem: cartItem,
            quantity: quantityToAdd
        }
        this.setState({cart: this.state.cart.concat(newCartObject), numItemsInCart: this.state.numItemsInCart + quantityToAdd});
//        this.checkToCombine(cartItem);
    }
    if (!(this.state.isCartModalOpen)) {
        this.toggleCartModal();
    }
}
export function removeFromCart(cartItem) {
    const index = this.findIndex(cartItem);
    console.log("index = " + index);
    var newCart = [];
    if (this.state.cart.length > 1 && index > -1) {
        (   (index === 0)
            ? newCart = this.state.cart.slice(1, this.state.cart.length)
            : newCart = this.state.cart.slice(0, index).concat(this.state.cart.slice(index + 1, this.state.cart.length))
        )
    } else if (index === -1) {
        newCart = this.state.cart;
    }
    this.setState({cart: newCart, numItemsInCart: this.state.numItemsInCart - this.state.cart[index].quantity});
//    this.checkToCombine(cartItem);
}
export function getCartObjectByKey(key) {
    const thisCartObject = this.state.cart.filter((cartObject) => {
        return (cartObject.cartItem.key === key);
    })[0];
    if (thisCartObject) {
        console.log("thisCartObject.cartItem.name: " + thisCartObject.cartItem.name + "; thisCartObject.quantity: " + thisCartObject.quantity)
    } else {
        console.log("thisCartObject is null.");
    }
    return thisCartObject;
}
function getCartItemByKey(key) {
    return CARTITEMS.filter((cartItem) => {
        return (cartItem.key === key);
    });
}
export function checkToCombine(cartItem) {
    const regTicketKey = 0;
    const groupTicketKey = 7;
    if (cartItem.key === regTicketKey || cartItem.key === groupTicketKey){
        const regTicketObject = this.props.getCartObjectByKey(regTicketKey);
        const groupTicketObject = this.props.getCartObjectByKey(groupTicketKey);
        if ((regTicketObject) && (groupTicketObject)) {
            if (regTicketObject.quantity + groupTicketObject.quantity >= groupTicketObject.cartItem.minimumQuantity) {
                console.log("Case 1: the total is above the minimum");
//                this.combineCartObjects(groupTicketObject, regTicketObject);
                return true;
            } else {
                console.log("Case 2: the total is below the minimum");
//                this.combineCartObjects(regTicketObject, groupTicketObject);
                return true;
            }
        } else if (groupTicketObject) {
            if (groupTicketObject.quantity < groupTicketObject.cartItem.minimumQuantity) {
                console.log("Case 3: only groupTicketObject, which is less than minimum (" + groupTicketObject.quantity + "<" + groupTicketObject.cartItem.minimumQuantity + ")");
//                this.props.addToCart(getCartItemByKey(regTicketKey), groupTicketObject.quantity);
                return true;
            }
            else {
                console.log("groupTicketObject.quantity = " + groupTicketObject.quantity);
            }
        } else if (regTicketObject) {
            const groupCartItem = getCartItemByKey(groupTicketKey).minimumQuantity;
            if (regTicketObject.quantity >= groupCartItem) {
                console.log("Case 4: only regTicketObject, which meets the minimum (" + regTicketObject.quantity + ">=" + groupCartItem + ")");
//                this.props.addToCart(getCartItemByKey(groupTicketKey), regTicketObject.quantity);
                return true;
            }
        }
    } 
    return false;
}
export function combineCartObjects(cartObjectToKeep, cartObjectToDelete) {
    this.props.addToCart(cartObjectToKeep.cartItem, cartObjectToDelete.quantity);
    this.removeFromCart(cartObjectToDelete.cartItem);
}

class CartItemInModal extends Component {
    constructor(props) {
        super(props);
        this.RemoveThisItemFromCart = this.RemoveThisItemFromCart.bind(this);
        this.IncrementThisQuantity = this.IncrementThisQuantity.bind(this);
        this.DecrementThisQuantity = this.DecrementThisQuantity.bind(this);
    }
    RemoveThisItemFromCart() {
        return (this.props.removeFromCart(this.props.cartObject.cartItem));
    }
    IncrementThisQuantity() {
        return (this.props.addToCart(this.props.cartObject.cartItem, 1));
    }
    DecrementThisQuantity() {
        return (this.props.decrementQuantity(this.props.cartObject.cartItem));
    }
    render() {
        return(
            <Row key={this.props.cartObject.cartItem.key}>
                <Col xs={6}>
                    {   (this.props.cartObject.cartItem.nameShort)
                        ? this.props.cartObject.cartItem.nameShort
                        : this.props.cartObject.cartItem.name
                    }
                </Col>
                <Col xs={3} className="text-right">
                    {(this.props.cartObject.cartItem.price * this.props.cartObject.quantity).toFixed(2)}
                </Col>
                <Col xs={2} className="text-nowrap quantity-column text-center p-0">
                    <Container>
                        <Row>
                            <Col xs={4} className="p-0">
                                {(  (this.props.cartObject.quantity > 1)
                                    ?   <Button color="link" className="p-0" onClick={this.DecrementThisQuantity}>
                                            <i className="fa fa-minus fa-xs"></i>
                                        </Button>
                                    : <React.Fragment/>
                                )}
                            </Col>
                            <Col xs={2} className="p-0">
                                {" " + this.props.cartObject.quantity + " "}
                            </Col>
                            <Col xs={4} className="p-0">
                                <Button color="link" className="p-0" onClick={this.IncrementThisQuantity}>
                                    <i className="fa fa-plus fa-xs"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={1} className="p-0 text-center">
                    <Button color="link" className="p-0 mb-1" onClick={this.RemoveThisItemFromCart}>
                        <i className="fa fa-times"></i>
                    </Button>
                </Col>
            </Row>
        );
    }
}

class CartModal extends Component {
    constructor(props) {
        super(props);
    }
    GetTotal () {
        var total = 0;
        for (var i = 0; i < this.props.cart.length; i++) {
            total = total + (+this.props.cart[i].cartItem.price * this.props.cart[i].quantity);
        }
        return total.toFixed(2);
    }
    RenderTotal () {
        return (
            <Row>
                <Col xs={6} className="text-right">
                    <i>Total...</i>
                </Col>
                <Col xs={3} className="text-right">
                    {this.GetTotal()}
                </Col>
            </Row>
        );
    }
    RenderCartItemsList () {
        return (
            <Container>
                {   (this.props.cart && this.props.cart.length > 0)
                    ? <React.Fragment>
                        {this.props.cart.map((cartObject) => {
                            return (
                                <CartItemInModal 
                                    cartObject={cartObject} 
                                    removeFromCart={this.props.removeFromCart} 
                                    addToCart={this.props.addToCart}
                                    decrementQuantity={this.props.decrementQuantity}
                                />
                            );
                        })}
                        <hr/>
                        {this.RenderTotal()}
                      </React.Fragment>
                    : <Row><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><i>Your cart is empty.</i></Row>
                }
            </Container>
        );
    }
    render() {
        return (
            <Modal 
                isOpen={this.props.isCartModalOpen} 
                toggle={this.props.toggleCartModal}
            >
                <ModalHeader 
                    toggle={this.props.toggleCartModal}
                    className="bg-warning"
                >
                    My Cart
                </ModalHeader>
                <ModalBody>
                    {this.RenderCartItemsList(this.props.cart)}
                </ModalBody>
            </Modal>
        );
    }
}

export default CartModal;