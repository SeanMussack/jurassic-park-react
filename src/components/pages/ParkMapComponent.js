import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';

class ParkMap extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div id="mainContent">
                    <Container>
                        <Row className='row-content align-items-center'>
                            <h2 className='col-12'>Park Map</h2>
                        </Row>
                        <Row className='row-content align-items-center'>
                            <Col xs={12} md={6}>
                                <Button onClick={this.props.toggleParkMapModal} color='link'>
                                    <img
                                        id='parkMapImg'
                                        className='img-fluid img-shadow'
                                        src='assets/images/large/Isla Nublar-md.jpg'
                                        alt='A map of Isla Nublar'
                                    />
                                </Button>
                            </Col>
                            <Col xs={12} md={6} className='my-3'>
                                <p>Plan your visit to Jurassic Park by downloading our Park Map.</p>
                                <p>Copies of the Park Map are also available in the <Link to='/visitor-center'>Visitor Center.</Link></p>
                                <p class="text-center">
                                    <a download class="btn btn-danger download-park-map-button" role="button" href="assets/images/large/Isla Nublar.jpg">Download Park Map</a>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ParkMap;