import React, { Component } from 'react';
import { Container, Row, Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import Jumbotron from "../page-elements/JumbotronComponent";
import { Fade, Stagger } from 'react-animation-components';

function RenderRegisteredIcon() {
    return (
        <i className="far fa-registered fa-sm" aria-hidden="true"></i>
    );
}

class CafeCard extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cafeMenuItem: null
        }
    }
    render() {
        return (
            <Card className="cafe-card">
                <CardImg top
                    src={this.props.cafeMenuItem.src}
                    alt={this.props.cafeMenuItem.alt}
                />
                <CardBody className="p-2 p-md-4">
                    <h5>
                        {this.props.cafeMenuItem.name}
                        {(this.props.cafeMenuItem.registered)
                            ? RenderRegisteredIcon()
                            : <React.Fragment/>
                        }
                    </h5>
                    <CardText>{this.props.cafeMenuItem.text}</CardText>
                    <p className="cafe-price">
                        {(this.props.cafeMenuItem.price)
                            ? "$" + this.props.cafeMenuItem.price
                            : "Free"
                        }
                    </p>
                </CardBody>
            </Card>
        );
    }
}

class Cafe extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cafeMenu: null
        }
    }
    render() {
        return (
            <div id="mainContent">
                <Container>
                    <Row className="row-content">
                        <h1>Cretaceous Cafe</h1>
                    </Row>
                    <Row className="row-content">
                        <p>
                            Located in the <Link to="/visitor-center">Visitor Center</Link>, the Cretaceous Cafe has everything you need to stay well-fed and energized.
                        </p>
                    </Row>
                    <hr/>
                    <h2 className="text-center">Menu:</h2>
                    <Stagger className="row row-content" in>
                        {this.props.cafeMenu.map((cafeMenuItem) => {
                            return (
                                <Fade in key={cafeMenuItem.id}className="d-flex flex-wrap mx-auto">
                                    <CafeCard cafeMenuItem={cafeMenuItem} />
                                </Fade>
                            );
                        })}
                    </Stagger>
                </Container>
            </div>
        );
    }
}

export default Cafe;