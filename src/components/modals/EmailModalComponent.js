import { Component } from "react";
import { Modal, ModalBody, ModalHeader, Container,
    Form, FormGroup, Label, Input, Row, Button } from "reactstrap";

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
                    className="bg-warning"
                >
                    Email Sign-Up
                </ModalHeader>
                <ModalBody>
                    <Container fluid>
                        <Form >
                            <FormGroup row>
                                <Label
                                    className="sr-only"
                                    htmlFor="email"
                                >
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="Enter email"
                                />
                            </FormGroup>
                            <FormGroup check row>
                                <Input
                                    id="emailCheckbox"
                                    type="checkbox"
                                    name="13 or older"
                                />
                                {' '}
                                <Label
                                    htmlFor="emailCheckbox"
                                >
                                    I am at least 13 years old
                                </Label>
                            </FormGroup>
                            <br/>
                            <FormGroup row>
                                <Button type="submit" color="danger" block>
                                    Sign up
                                </Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}

export default EmailModal;