import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container, Row, Col, Button } from 'reactstrap';
//import * as ActionTypes from '../../redux/ActionTypes';

class CartItemInModal extends Component {
    constructor(props) {
        super(props);
        this.RemoveThisItemFromCart = this.RemoveThisItemFromCart.bind(this);
        this.IncrementThisQuantity = this.IncrementThisQuantity.bind(this);
    }
    RemoveThisItemFromCart() {
        return (this.props.removeFromCart(this.props.cartObject.cartItem));
    }
    IncrementThisQuantity() {
        return (this.props.addToCart(this.props.cartObject.cartItem));
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
                    {this.props.cartObject.cartItem.price * this.props.cartObject.quantity}
                </Col>
                <Col xs={2} className="text-nowrap">
                    <i className="fa fa-minus fa-xs"></i>
                    {" " + this.props.cartObject.quantity + " "}
                    <Button color="link" className="p-0" onClick={this.IncrementThisQuantity}>
                        <i className="fa fa-plus fa-xs"></i>
                    </Button>
                </Col>
                <Col xs={1}>
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