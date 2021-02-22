import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import Jumbotron from "../page-elements/JumbotronComponent";
import ImageCarousel from '../page-elements/ImageCarouselComponent';
import { IMAGECAROUSELS } from '../../shared/imageCarousels';

function GiftShop () {
    return (
        <div id="mainContent">
            <Jumbotron
                title="Gallimimus Gift Shop"
                subtitle="Show off your dinosaur love with some Jurassic Park merchandise"
            />
            <Container fluid>
                <Row className="row-content align-items-center">
                    <Col className="gift-shop-column" size={12} md={4} lg={6}>
                        <p>We have all kinds of great gifts available for sale in our Gallimimus Gift Shop, from graphic tees to adorable plush dinosaurs.</p>
                        <p>Find the Gift Shop in the <Link to="/visitor-center">Visitor Center</Link>.</p>
                    </Col>
                    <ImageCarousel items={IMAGECAROUSELS[1]} />
                </Row>
            </Container>
        </div>
    );
}

export default GiftShop;