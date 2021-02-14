import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Jumbotron from "./JumbotronComponent";
import CartItem from "./CartItemComponent";
import TableOfBenefits from "./TableOfBenefitsComponent";
import { CARTITEMS } from "../shared/cartItems";

class SeasonPasses extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Season Passes"
                    subtitle="Experience the fun all year long"
                    isRightAligned="true"
                />
                <div className="container-fluid">
                    <CartItem cartItem={CARTITEMS[4]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[5]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[6]}/>
                </div>
                <hr/>
                <Row className="row-content">
                    <Col xl={{size: 10, offset: 1}}>
                        <TableOfBenefits
                            cartItem1={CARTITEMS[4]}
                            cartItem2={CARTITEMS[5]}
                            cartItem3={CARTITEMS[6]}
                            isSeasonPass={true}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SeasonPasses;