import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header, { RenderTopShortcuts } from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import CartModal, { toggleCartModal, findIndex, increaseQuantity, decrementQuantity, addToCart, removeFromCart, getCartObjectByKey, checkToCombine, combineCartObjects } from './modals/CartModalComponent';

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

class Main extends Component {
    constructor(props) {
        super(props);
        this.props = {
            toggleCartModal: toggleCartModal,
            RenderTopShortcuts: RenderTopShortcuts,
            findIndex: findIndex,
            increaseQuantity: increaseQuantity,
            decrementQuantity: decrementQuantity,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            getCartObjectByKey: getCartObjectByKey,
            checkToCombine: checkToCombine,
            combineCartObjects: combineCartObjects,
        }
        this.state = {
            isCartModalOpen: false,
            cart: [],
            numItemsInCart: 0,
        }
        this.toggleCartModal = toggleCartModal.bind(this);
        this.RenderTopShortcuts = RenderTopShortcuts.bind(this);
        this.findIndex = findIndex.bind(this);
        this.increaseQuantity = increaseQuantity.bind(this);
        this.decrementQuantity = decrementQuantity.bind(this);
        this.addToCart = addToCart.bind(this);
        this.removeFromCart = removeFromCart.bind(this);
        this.decrementQuantity = decrementQuantity.bind(this);
        this.getCartObjectByKey = getCartObjectByKey.bind(this);
        this.checkToCombine = checkToCombine.bind(this);
        this.combineCartObjects = combineCartObjects.bind(this);
    }
    render() {
        return (
            <div>
                <Header 
                    toggleCartModal={this.toggleCartModal}
                    RenderTopShortcuts={this.RenderTopShortcuts}
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
                    decrementQuantity={this.decrementQuantity}
                />
            </div>
        );
    }
}

//export default Main;
export default withRouter(Main);
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));