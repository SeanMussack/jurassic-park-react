import { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
//import * as ActionTypes from '../../redux/ActionTypes';

class CartModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal 
                isOpen={this.props.isCartModalOpen} 
                toggle={this.props.toggleCartModal}
                className="w-100"
            >
                <ModalHeader toggle={this.props.toggleCartModal}>My Cart</ModalHeader>
                <ModalBody>
                    Test 12345
                </ModalBody>
            </Modal>
        );
    }
}

export default CartModal;