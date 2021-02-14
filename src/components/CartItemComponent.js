import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import TelephoneLink from "./TelephoneLinkComponent";

const defaultDisclaimerTickets = "Valid any one public operating day during the 1993 season.";
const defaultDisclaimerSeasonPasses = "Valid only during the 1993 season.";
const defaultDisclaimerNoPrice = "Call for package details.";

class CartItemColumn extends Component {
    render() {
        return (
            <Col md="4" className="cart-item-column my-auto">
                {this.props.cartItem.textPrice}
                <div className="cart-item-price">${this.props.cartItem.price}</div>
                {(this.props.cartItem.equivalentVisits)
                    ? <React.Fragment>(equivalent to {this.props.cartItem.equivalentVisits} visits)<br/></React.Fragment>
                    : <React.Fragment/>
                }
                plus applicable taxes and fees
                <div className="d-flex justify-content-center mt-3">
                    <Button color="danger">
                        Add                            <span className="sr-only">{this.props.cartItem.buttonSrOnly + " "}</span>
                        to Cart
                    </Button>
                </div>
            </Col>
        );
    }
}

class TelColumn extends Component {
    constructor(props) {
        super(props);
        this.props = {
            text: "",
        }
    }
    render() {
        return (
            <Col md="4" className="tel-column my-auto">
                Call to book today:
                <br/>
                <TelephoneLink/>
                <br/> {(this.props.text)
                        ? this.props.text
                        : <React.Fragment>Special events</React.Fragment>
                    }
                <br/> must be booked at least
                <br/> 5 business days in advance.
            </Col>
        );
    }
}

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cartItem: null
        }
    }
    render() {
        return (
            <Row className="row-content" id={this.props.cartItem.id}>
                <Col md="8" lg={{size: 7, offset: 1}}>
                    <h5>
                        {(this.props.cartItem.icon)
                            ? <i className={this.props.cartItem.icon} aria-hidden="true"></i>
                            : <React.Fragment/>
                        }
                        {this.props.cartItem.name}
                    </h5>
                    <p className="cart-item-subtitle">{this.props.cartItem.subtitle}</p>
                    <p>
                        {this.props.cartItem.text}
                        {(this.props.cartItem.href)
                            ? <React.Fragment>
                                <Link to={this.props.cartItem.href}>{this.props.cartItem.textLink}</Link>
                                {(this.props.cartItem.text2)
                                    ? this.props.cartItem.text2
                                    : <React.Fragment/>
                                }
                                {(this.props.cartItem.href2)
                                ? <React.Fragment>
                                    <Link to={this.props.cartItem.href2}>{this.props.cartItem.textLink2}</Link>.
                                </React.Fragment>
                                : <React.Fragment>.</React.Fragment>}
                            </React.Fragment>
                            : <React.Fragment/>
                        }
                    </p>
                    <p className="cart-item-disclaimer">
                        {(this.props.cartItem.disclaimer)
                            ? <React.Fragment>
                                {this.props.cartItem.disclaimer}
                                <br/>
                            </React.Fragment>
                            : <React.Fragment/>
                        }
                        {(this.props.cartItem.seasonPass)
                            ? defaultDisclaimerSeasonPasses
                            : ((this.props.cartItem.price)
                                ? defaultDisclaimerTickets
                                : defaultDisclaimerNoPrice
                                )
                        }
                    </p>
                </Col>
                {(this.props.cartItem.price)
                    ? <CartItemColumn cartItem={this.props.cartItem}/>
                    : <TelColumn text={this.props.cartItem.textTelColumn}/>
                }
                
            </Row>
        );
    }
}

export default CartItem;