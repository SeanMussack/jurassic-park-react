import { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';

export function toggleParkMapModal() {
    this.setState({isParkMapModalOpen: !this.state.isParkMapModalOpen});
}

class ParkMapModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                id='parkMapModal'
                isOpen={this.props.isParkMapModalOpen}
                toggle={this.props.toggleParkMapModal}
                className='modal-dialog my-5 mx-2 m-md-4 mx-lg-auto'
                role='document'
            >
                <ModalBody>
                    <Button color='dark' onClick={this.props.toggleParkMapModal}>&times;</Button>
                    <img src="assets/images/large/Isla Nublar.jpg" alt="A large map of Isla Nublar"/>
                </ModalBody>
            </Modal>
        );
    }
}

export default ParkMapModal;