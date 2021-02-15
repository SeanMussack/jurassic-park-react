import React, { Component } from 'react';
import { Container, Row, Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import Jumbotron from "../page-elements/JumbotronComponent";

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
            <Card className="cafe-card d-flex flex-wrap mx-auto">
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
                <Jumbotron
                    title="Cretaceous Cafe"
                    subtitle="Grab a meal fit for a Tyrannosaurus!"
                />
                <Container>
                    <Row className="row-content">
                        <p>
                            Located in the <Link to="/visitor-center">Visitor Center</Link>, the Cretaceous Cafe has everything you need to stay well-fed and energized.
                        </p>
                    </Row>
                </Container>
                <Container>
                    <h2 className="text-center">Menu:</h2>
                    <Row className="row-content">
                        {this.props.cafeMenu.map((cafeMenuItem) => {
                            return (
                                <CafeCard cafeMenuItem={cafeMenuItem} />
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cafe;