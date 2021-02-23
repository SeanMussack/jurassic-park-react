import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import CartModal from './modals/CartModalComponent';

import Calendar from "./pages/CalendarComponent";
import GettingHere from './pages/GettingHereComponent';
import Accessibility from './pages/AccessibilityComponent';
import Jobs from './pages/JobsComponent';
import FAQ from './pages/FAQComponent';
import Laboratory from "./pages/LaboratoryComponent";
import Cafe from "./pages/CafeComponent";
import GiftShop from './pages/GiftShopComponent';
import Dinosaurs from './pages/DinosaursComponent';
import VisitorCenter from "./pages/VisitorCenterComponent";
import BigPicPage from "./pages/BigPicPageComponent";
import Tickets from './pages/TicketsComponent';
import SeasonPasses from './pages/SeasonPassesComponent';
import Groups from "./pages/GroupsComponent";
import BirthdayParties from "./pages/BirthdayPartiesComponent";

import { DINOSAURS } from '../shared/dinosaurs';
import { BIGPICPAGEDATA } from "../shared/bigPicPageData";
import { CAFEMENU } from "../shared/cafeMenu";

/*const mapStateToProps = state => {
    return {
        dinosaurs: state.dinosaurs,
        isCartModalOpen: state.isCartModalOpen,
        cart: state.cart,
    }
}

const mapDispatchToProps = {
//    fetchDinosaurs: () => (fetchDinosaurs()),
    addToCart: cartItem => (addToCart(cartItem)),
    toggleCartModal: () => (toggleCartModal()),
}*/

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartModalOpen: false,
            cart: [],
        }
        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    toggleCartModal() {
        this.setState({isCartModalOpen: !this.state.isCartModalOpen});
    }
    compareCartItems(cartItem1, cartItem2) {
        if (cartItem2 === null) {
            console.log("cartItem2 === null");
        }
        if (cartItem1.key === cartItem2.key) {
            console.log("return true");
            return true;
        } else {
            console.log("return false");
            return false;
        }
    }
    increaseQuantity(cartObject, increaseAmount) {
        cartObject.quantity = cartObject.quantity + increaseAmount;
    }
    addToCart(cartItem) {
        const addedQuantity = (
            (cartItem.minimumQuantity)
            ? cartItem.minimumQuantity
            : 1
        );
        const foundIndex = this.state.cart.findIndex((cartObject) => this.compareCartItems(cartItem, cartObject.cartItem));
        console.log("foundIndex = " + foundIndex);
        if (foundIndex > -1) {
            const foundCartObject = this.state.cart[foundIndex];
            this.increaseQuantity(foundCartObject, addedQuantity);
        } else {
            const newCartObject = {
                cartItem: cartItem,
                quantity: addedQuantity
            }
            this.setState({cart: this.state.cart.concat(newCartObject)});
        }
        if (!(this.state.isCartModalOpen)) {
            this.toggleCartModal();
        }
    }
    removeFromCart(cartItem) {
        const index = this.state.cart.findIndex((cartObject) => this.compareCartItems(cartItem, cartObject.cartItem));
        console.log("index = " + index);
        var newCart = [];
        if (this.state.cart.length > 1 && index > -1) {
            (   (index === 0)
                ? newCart = this.state.cart.slice(1, this.state.cart.length)
                : newCart = this.state.cart.slice(0, index).concat(this.state.cart.slice(index + 1, this.state.cart.length))
            )
        } else if (index === -1) {
            newCart = this.state.cart;
        }
        this.setState({cart: newCart});
    }
    /*componentDidMount() {
        this.props.fetchDinosaurs();
    }*/
    render() {
        return (
            <div>
                <Header 
                    //openCartModal={openCartModal}
                    toggleCartModal={this.toggleCartModal}
                />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/home' component={Home} />
                            <Route path='/calendar-and-hours' render={() => <Calendar/>} />
                            <Route path='/getting-here' render={() => <GettingHere/>} />
                            <Route path='/accessibility' component={Accessibility} />
                            <Route path='/jobs' render={() => <Jobs/>} />
                            <Route path='/faq' render={() => <FAQ/>} />
                            <Route path='/laboratory' render={() => <Laboratory/>} />
                            <Route path='/cafe' render={() => <Cafe cafeMenu={CAFEMENU} />} />
                            <Route path='/gift-shop' component={GiftShop} />
                            <Route path='/dinosaurs' render={() => <Dinosaurs dinosaurs={DINOSAURS} />} />
                            <Route path='/visitor-center' render={() => <VisitorCenter/>} />
                            <Route path='/park-gate' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[1]} />} />
                            <Route path='/waterfalls' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[0]} />} />
                            <Route path='/tickets' render={() => <Tickets addToCart={this.addToCart} />} />
                            <Route path='/season-passes' render={() => <SeasonPasses addToCart={this.addToCart} />} />
                            <Route path='/groups' render={() => <Groups addToCart={this.addToCart} />} />
                            <Route path='/birthday-parties' render={() => <BirthdayParties />} />
                            <Route path='/404' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[2]} />} />
                            <Redirect to='/404' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
                <CartModal 
                    isCartModalOpen={this.state.isCartModalOpen} 
                    cart={this.state.cart} 
                    toggleCartModal={this.toggleCartModal}
                    removeFromCart={this.removeFromCart}
                    addToCart={this.addToCart}
                />
            </div>
        );
    }
}

//export default Main;
export default withRouter(Main);
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));