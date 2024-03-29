import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header, { RenderTopShortcuts } from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import EmailModal, { toggleEmailModal } from './modals/EmailModalComponent';
import CartModal, { toggleCartModal, findIndex, increaseQuantity, decrementQuantity, addToCart, removeFromCart, getCartObjectByKey, checkToCombine, combineCartObjects } from './modals/CartModalComponent';
import PromoModal, { togglePromoModal } from './modals/PromoModalComponent';
import ParkMapModal, { toggleParkMapModal } from './modals/ParkMapModalComponent';
import PrivacyPolicy from './pages/PrivacyPolicyComponent';
import ScrollToTop from './ScrollToTop';

import Calendar from "./pages/CalendarComponent";
import ParkMap from './pages/ParkMapComponent';
import GettingHere from './pages/GettingHereComponent';
import Accessibility from './pages/AccessibilityComponent';
import Jobs from './pages/JobsComponent';
import FAQ from './pages/FAQComponent';
import IslandTour from './pages/IslandTourComponent';
import Laboratory from "./pages/LaboratoryComponent";
import ShowcaseTheater from './pages/ShowcaseTheaterComponent';
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
        this.state = {
            isEmailModalOpen: false,
            isCartModalOpen: false,
            isPromoModalOpen: false,
            isParkMapModalOpen: false,
            cart: [],
            numItemsInCart: 0,
        }
        this.toggleEmailModal = toggleEmailModal.bind(this);
        this.toggleCartModal = toggleCartModal.bind(this);
        this.togglePromoModal = togglePromoModal.bind(this);
        this.toggleParkMapModal = toggleParkMapModal.bind(this);
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
    static defaultProps = {
        toggleEmailModal: toggleEmailModal,
        toggleCartModal: toggleCartModal,
        togglePromoModal: togglePromoModal,
        toggleParkMapModal: toggleParkMapModal,
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
    render() {
        return (
            <React.Fragment>
                <Header 
                    toggleEmailModal={this.toggleEmailModal}
                    toggleCartModal={this.toggleCartModal}
                    togglePromoModal={this.togglePromoModal}
                    RenderTopShortcuts={this.RenderTopShortcuts}
                />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <ScrollToTop>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/home' component={Home} />
                                <Route path='/calendar-and-hours' component={Calendar} />
                                <Route path='/park-map' render={() => <ParkMap toggleParkMapModal={this.toggleParkMapModal}/>} />
                                <Route path='/getting-here' component={GettingHere} />
                                <Route path='/accessibility' component={Accessibility} />
                                <Route path='/jobs' component={Jobs} />
                                <Route path='/faq' component={FAQ} />
                                <Route path='/island-tour' component={IslandTour} />
                                <Route path='/laboratory' component={Laboratory} />
                                <Route path='/showcase-theater' component={ShowcaseTheater} />
                                <Route path='/cafe' render={() => <Cafe cafeMenu={CAFEMENU} />} />
                                <Route path='/gift-shop' component={GiftShop} />
                                <Route path='/dinosaurs' render={() => <Dinosaurs dinosaurs={DINOSAURS} />} />
                                <Route path='/visitor-center' component={VisitorCenter} />
                                <Route path='/park-gate' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[1]} />} />
                                <Route path='/waterfalls' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[0]} />} />
                                <Route path='/tickets' render={() => <Tickets addToCart={this.addToCart} />} />
                                <Route path='/season-passes' render={() => <SeasonPasses addToCart={this.addToCart} />} />
                                <Route path='/groups' render={() => <Groups addToCart={this.addToCart} />} />
                                <Route path='/birthday-parties' component={BirthdayParties} />
                                <Route path='/privacy-policy' component={PrivacyPolicy} />
                                <Route path='/404' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[2]} />} />
                                <Redirect to='/404' />
                            </Switch>
                        </ScrollToTop>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
                <EmailModal
                    isEmailModalOpen={this.state.isEmailModalOpen}
                    toggleEmailModal={this.toggleEmailModal}
                />
                <CartModal 
                    isCartModalOpen={this.state.isCartModalOpen} 
                    cart={this.state.cart} 
                    toggleCartModal={this.toggleCartModal}
                    removeFromCart={this.removeFromCart}
                    addToCart={this.addToCart}
                    decrementQuantity={this.decrementQuantity}
                />
                <PromoModal
                    isPromoModalOpen={this.state.isPromoModalOpen}
                    togglePromoModal={this.togglePromoModal}
                />
                <ParkMapModal
                    isParkMapModalOpen={this.state.isParkMapModalOpen}
                    toggleParkMapModal={this.toggleParkMapModal}
                />
            </React.Fragment>
        );
    }
}

//export default Main;
export default withRouter(Main);
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));