import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Jumbotron from "../page-elements/JumbotronComponent";
import CartItem from "../page-elements/CartItemComponent";
import TableOfBenefits from "../page-elements/TableOfBenefitsComponent";
import { CARTITEMS } from "../../shared/cartItems";

class TicketsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Tickets"
                    subtitle="Regular admission, discounts, VIP packages, and more"
                    isRightAligned="true"
                />
                <div className="container-fluid">
                    {CARTITEMS.slice(0, 4).map((item) => {
                        return (
                            <React.Fragment>
                                <CartItem cartItem={item} addToCart={this.props.addToCart} />
                                <hr/>
                            </React.Fragment>
                        );
                    })}
                </div>
                <Row className="row-content">
                    <Col xl={{size: 10, offset: 1}}>
                        <TableOfBenefits
                            cartItem1={CARTITEMS[0]}
                            cartItem2={CARTITEMS[2]}
                            cartItem3={CARTITEMS[3]}
                            isSeasonPass={false}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TicketsComponent;