import React, { Component } from "react";
import { Card, Collapse } from "reactstrap";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import { Fade, Stagger } from 'react-animation-components';

class RenderInfoAccordionCard extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cardData: null,
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
            <Card key={this.props.cardData.key} onClick={this.toggleCard}>
                <CardHeader className="p-2">
                    <h3 className="my-auto">
                        {(  (this.props.cardData.icon)
                            ? <i className={this.props.cardData.icon} aria-hidden="true"></i>
                            : <React.Fragment/>
                        )}
                        {this.props.cardData.title}
                        {(  (this.props.cardData.titleMdAndUp)
                            ? <span className="d-none d-md-inline">{this.props.cardData.titleMdAndUp}</span>
                            : <React.Fragment/>
                        )}
                        <i className={(this.state.isCardOpen ? "fa fa-minus" : "fa fa-plus") + " d-none d-sm-block"} aria-hidden="true"></i>
                    </h3>
                </CardHeader>
                <Collapse isOpen={this.state.isCardOpen}>
                    <CardBody>
                        <p>
                            {   (this.props.cardData.italic)
                                ?<i>{this.props.cardData.text}</i>
                                :this.props.cardData.text
                            }
                        </p>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

class InfoAccordion extends Component {
    constructor(props) {
        super(props);
        this.props = {
            data: null
        }
    }
    render() {
        return (
            <div className="infoAccordion">
                <Stagger in>
                    {this.props.data.cards.map((cardData) => {
                        return (
                            <Fade in key={cardData.key}>
                                <RenderInfoAccordionCard cardData={cardData}/>
                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
}

export default InfoAccordion;