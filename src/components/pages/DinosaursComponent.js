import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Card, CardBody, CardHeader, CardText,
    Container, Row, Col } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

function capitalize(string) {
    return (
        string.charAt(0).toUpperCase() + string.slice(1)
    );
}

class RenderDinosaurCard extends Component {
    constructor(props) {
        super(props);
        this.props = {
            dinosaur: null,
        }
        this.state = {
            isCardOpen: false
        }
        this.toggleCard = this.toggleCard.bind(this);
    }
    toggleCard() {
        this.setState({
            isCardOpen: !this.state.isCardOpen
        })
    }
    render() {
        return (
            <Card className={this.props.dinosaur.diet + " bg-light"} key={this.props.dinosaur.key}>
                <CardHeader onClick={this.toggleCard} className="p-2">
                    <img className="dino-icon my-auto" src={this.props.dinosaur.icon} aria-hidden="true"/>
                    <h3 className="my-auto pl-5">
                        {this.props.dinosaur.name}
                        <i className={(this.state.isCardOpen ? "fa fa-minus" : "fa fa-plus") + " d-none d-sm-block"} aria-hidden="true"></i>
                    </h3>
                </CardHeader>
                <Collapse isOpen={this.state.isCardOpen}>
                    <CardBody onClick={this.toggleCard} className="p-0 row align-items-center">
                        <img className="dino-image d-flex col-12 col-md mx-auto" src={this.props.dinosaur.image}/>
                        <CardText className="col-12 col-md my-auto mx-lg-5">
                            {this.props.dinosaur.text}
                        </CardText>
                        <Col className="dino-info-column" xs={12} md={6} lg={3}>
                            <h5>Diet:</h5>
                            <p>{capitalize(this.props.dinosaur.diet)}</p>
                            <h5>Name Meaning:</h5>
                            <p>"{this.props.dinosaur.nameMeaning}"</p>
                            <h5>Region:</h5>
                            <p>{this.props.dinosaur.region}</p>
                            <h5>Epoch:</h5>
                            <p>{this.props.dinosaur.epoch}</p>
                        </Col>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

class RenderDinosaursAccordion extends Component {
    constructor(props) {
        super(props);
        this.props = {
            dinosaurs: null
        }
        this.state = {
            openCard: null
        }
    }
    render() {
        return (
            <div id="dinosaursAccordion" className="infoAccordion">
                <Stagger in>
                    {this.props.dinosaurs.map((dinosaur) => {
                        return (
                            <Fade in key={dinosaur.name}>
                                <RenderDinosaurCard dinosaur={dinosaur}/>
                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
}

function Dinosaurs (props) {
    return (
        <div id="mainContent">
            <Container>
                <Row className="row-content">
                    <h1>Dinosaurs</h1>
                </Row>
            </Container>
            <Container>
                <Row className="row-content">
                    <p>Come see the magestic creatures that have made Jurassic Park famous! The genetic engineers in our <Link to="/laboratory">Laboratory</Link> are de-extincting new species all the time.</p>
                </Row>
            </Container>
            <Container>
                <Row className="px-xl-3">
                    <Col>
                        <RenderDinosaursAccordion dinosaurs={props.dinosaurs} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dinosaurs;