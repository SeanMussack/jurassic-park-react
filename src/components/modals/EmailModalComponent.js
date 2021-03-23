import { Component } from "react";
import { Modal, ModalBody, ModalHeader,
    Container } from "reactstrap";

export function toggleEmailModal() {
    this.setState({isEmailModalOpen: !this.state.isEmailModalOpen});
}

class EmailModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isEmailModalOpen}
                toggle={this.props.toggleEmailModal}
            >
                <ModalHeader
                    toggle={this.props.toggleEmailModal}
                    className="bg-primary"
                >
                    Email Sign-Up
                </ModalHeader>
                <ModalBody>
                    <Container fluid>
                        
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}

export default EmailModal;