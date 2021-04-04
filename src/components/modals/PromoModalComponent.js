import { Component } from "react";
import { Modal, ModalBody, ModalHeader, Container,
    Form, FormGroup, Label, Input, Button } from "reactstrap";

export function togglePromoModal() {
    this.setState({isPromoModalOpen: !this.state.isPromoModalOpen});
}

class PromoModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isPromoModalOpen}
                toggle={this.props.togglePromoModal}
            >
                <ModalHeader
                    toggle={this.props.togglePromoModal}
                    className="bg-warning"
                >
                    Promo Code
                </ModalHeader>
                <ModalBody>
                    <Container fluid>
                        <Form >
                            <FormGroup row>
                                <Label
                                    className="sr-only"
                                    htmlFor="promoCode"
                                >
                                    Promo code
                                </Label>
                                <Input
                                    id="promoCode"
                                    placeholder="Enter promo code"
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Button type="submit" color="danger" block>
                                    Enter Code
                                </Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}

export default PromoModal;