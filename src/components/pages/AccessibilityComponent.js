import { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import InfoAccordion from "../page-elements/InfoAccordionComponent";
import { INFOACCORDIONS } from "../../shared/infoAccordions";
import Jumbotron from "../page-elements/JumbotronComponent";

class Accessibility extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Guests with Disabilities"
                    subtitle="At Jurassic Park, we strive to be fun for everyone."
                />
                <Container>
                    <Row>
                        <Col>
                            <InfoAccordion
                                id="accessibilityAccordion"
                                data={INFOACCORDIONS[1]}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Accessibility;