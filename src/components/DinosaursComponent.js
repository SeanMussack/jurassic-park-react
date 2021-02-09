import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap';

function RenderDinosaurCard({dinosaur}) {
    return (
        <div/>
    );
}
function RenderDinosaursAccordion({dinosaurs}) {
    return (
        <div/>
    );
}

class Dinosaurs extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
    }
    
    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

    render () {
        return (
            <div id="mainContent">
                <div className="container">
                    <div className="row row-content">
                        <h1>Dinosaurs</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-content">
                        <p>Come see the magestic creatures that have made Jurassic Park famous! The genetic engineers in our <Link to="/laboratory">Laboratory</Link> are de-extincting new species all the time.</p>
                    </div>
                </div>
                <div className="container">
                    <div class="row px-xl-3">
                        <div class="col">
                            <div id="dinosaursAccordion" className="infoAccordion">
                                {this.props.dinosaurs.map((dinosaur) => {
                                    return (
                                        <Card className={dinosaur.diet + " bg-light"} key={dinosaur.key}>
                                            <Collapse aria-expanded="false">
                                                <CardHeader onClick={this.toggle}>
                                                    <img className="dino-icon" src={dinosaur.image} aria-hidden="true"/>
                                                    <h3>Test0987</h3>
                                                </CardHeader>
                                            </Collapse>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dinosaurs;