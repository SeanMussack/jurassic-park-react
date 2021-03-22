import { Link } from 'react-router-dom';
import { Container, Row } from "reactstrap";
import CarouselMD from "../page-elements/CarouselMDComponent";

function IslandTour() {
    return (
        <div id="mainContent">
            <Container>
                <Row className="row-content align-items-center pt-2 m-0 m-md-4">
                    <h2 className="col-12">Island Tour</h2>
                    <CarouselMD />
                </Row>
                <Row className="row-content align-items-center">
                    <p>This is the tour you've been waiting for! Also known as the Safari Tour or the Park Ride, our Island Tour (narrated by Richard Kiley) is sure to be the ride of a lifetime. From the moment you pass through our famous <Link to="/park-gate">Park Gate</Link> until you catch the first glimpse of your favorite <Link to="/dinosaurs">dinosaurs</Link>, you'll be on a prehistoric adventure you'll never forget!</p>
                </Row>
            </Container>
        </div>
    );
}

export default IslandTour;