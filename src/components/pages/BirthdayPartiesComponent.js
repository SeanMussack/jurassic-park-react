import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Jumbotron from "../page-elements/JumbotronComponent";
import CartItem from "../page-elements/CartItemComponent";
import { CARTITEMS } from "../../shared/cartItems";

class BirthdayParties extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Birthday Parties"
                    subtitle="Get the coolest party since the dawn of time"
                    isRightAligned="true"
                />
                <Container fluid>
                    <CartItem cartItem={CARTITEMS[9]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[10]}/>
                </Container>
            </div>
        );
    }
}

export default BirthdayParties;