import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Jumbotron from "../page-elements/JumbotronComponent";
import CartItem from "../page-elements/CartItemComponent";
import { CARTITEMS } from "../../shared/cartItems";

class SeasonPasses extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Groups"
                    subtitle="Reduced pricing available for larger groups"
                    isRightAligned="true"
                />
                <Container fluid>
                    <CartItem cartItem={CARTITEMS[7]} addToCart={this.props.addToCart} />
                    <hr/>
                    <CartItem cartItem={CARTITEMS[8]}/>
                </Container>
            </div>
        );
    }
}

export default SeasonPasses;