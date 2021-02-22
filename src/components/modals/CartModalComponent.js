import { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container, Row, Col } from 'reactstrap';
//import * as ActionTypes from '../../redux/ActionTypes';

class CartModal extends Component {
    constructor(props) {
        super(props);
        this.RenderCartItem = this.RenderCartItem.bind(this);
        this.RenderCartItemsList = this.RenderCartItemsList.bind(this);
    }
    RenderCartItem (item) {
        return (
            <Row>
                <Col xs={8}>
                    {   (item.nameShort)
                        ? item.nameShort
                        : item.name
                    }
                </Col>
                <Col xs={4}>
                    {item.price}
                </Col>
            </Row>
        );
    }
    RenderCartItemsList ({cart}) {
        return (
            <Container>
                {   (this.props.cart)
                    ? this.props.cart.map((cartItem) => {
                        return (
                            this.RenderCartItem(cartItem)
                        );
                    })
                    : "Your cart is empty!"
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
                <ModalHeader toggle={this.props.toggleCartModal}>My Cart</ModalHeader>
                <ModalBody>
                    {this.RenderCartItemsList(this.props.cart)}
                </ModalBody>
            </Modal>
        );
    }
}

export default CartModal;