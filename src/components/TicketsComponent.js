import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Jumbotron from "./JumbotronComponent";
import CartItem from "./CartItemComponent";
import TableOfBenefits from "./TableOfBenefitsComponent";
import { CARTITEMS } from "../shared/cartItems";

class TicketsComponent extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Tickets"
                    subtitle="Regular admission, discounts, VIP packages, and more"
                    isRightAligned="true"
                />
                <div className="container-fluid">
                    <CartItem cartItem={CARTITEMS[0]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[1]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[2]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[3]}/>
                </div>
                <hr/>
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