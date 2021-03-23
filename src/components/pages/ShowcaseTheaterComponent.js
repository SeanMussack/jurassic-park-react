import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import QuoteCard from '../page-elements/QuoteCardComponent';
import { QUOTES } from '../../shared/quotes';

function EmbeddedVideo() {
    return (
        <Col xs={12} lg={8} className="py-3 pr-0">
            <Row className="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/h58lRIVHhGc" allowfullscreen></iframe>
            </Row>
        </Col>
    );
}

function ShowcaseTheater() {
    return (
        <div id="mainContent">
            <Container>
                <Row className="row-content">
                    <h2>Showcase Theater</h2>
                </Row>
                <Row className="row-content">
                    <EmbeddedVideo />
                    <Col xs={12} lg={4} className="align-self-center">
                        <p>Ready for a movie? At the Showcase Theater, you can sit back and relax as Mr. DNA tells you all about the miracle of cloning that makes Jurassic Park possible.</p>
                        <p>The Showcase Theater can be found in the <Link to="/visitor-center">Visitor Center</Link>, next to the <Link to="/laboratory">Laboratory</Link>.</p>
                    </Col>
                </Row>
            </Container>
            <QuoteCard quote={QUOTES[3]} />
        </div>
    );
}

export default ShowcaseTheater;