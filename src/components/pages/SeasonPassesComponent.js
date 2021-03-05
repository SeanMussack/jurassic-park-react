import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Jumbotron from "../page-elements/JumbotronComponent";
import CartItem from "../page-elements/CartItemComponent";
import TableOfBenefits from "../page-elements/TableOfBenefitsComponent";
import { CARTITEMS } from "../../shared/cartItems";

class SeasonPasses extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Season Passes"
                    subtitle="Experience the fun all year long"
                    isRightAligned="true"
                />
                <Container fluid>
                    {CARTITEMS.slice(4, 7).map((item) => {
                        return (
                            <React.Fragment>
                                <CartItem cartItem={item} addToCart={this.props.addToCart} />
                                <hr/>
                            </React.Fragment>
                        );
                    })}
                    <Row className="row-content d-none d-md-block">
                        <Col xl={{size: 10, offset: 1}}>
                            <TableOfBenefits
                                cartItem1={CARTITEMS[4]}
                                cartItem2={CARTITEMS[5]}
                                cartItem3={CARTITEMS[6]}
                                isSeasonPass={true}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SeasonPasses;