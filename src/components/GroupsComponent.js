import React, { Component } from 'react';
import Jumbotron from "./JumbotronComponent";
import CartItem from "./CartItemComponent";
import { CARTITEMS } from "../shared/cartItems";

class SeasonPasses extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Groups"
                    subtitle="Reduced pricing available for larger groups"
                    isRightAligned="true"
                />
                <div className="container-fluid">
                    <CartItem cartItem={CARTITEMS[7]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[8]}/>
                </div>
            </div>
        );
    }
}

export default SeasonPasses;