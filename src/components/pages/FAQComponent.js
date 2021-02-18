import { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import InfoAccordion from "../page-elements/InfoAccordionComponent";
import { INFOACCORDIONS } from "../../shared/infoAccordions";

class FAQ extends Component {
    render() {
        return (
            <div id="mainContent">
                <Container>
                    <Row className="row-content">
                        <h1>Frequently Asked Questions</h1>
                    </Row>
                    <Row>
                        <Col>
                            <InfoAccordion 
                                id="faqAccordion"
                                data={INFOACCORDIONS}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FAQ;