import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <header className="fixed-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="skipBox">
                            <a className="skipToMainContent" href="#mainContent">Skip To Main Content</a>
                        </div>
                        <div className="top-shortcuts col-12 d-flex justify-content-end ml-0">
                            <Link to="./tickets"><i className="fa fa-ticket-alt fa-md" aria-hidden="true"></i>Tickets</Link>
                            <Link to="./calendar-and-hours"><i className="fa fa-calendar-alt fa-md" aria-hidden="true"></i>Calendar<span className="d-none d-md-inline"> & Hours</span></Link>
                            <Link to="./jobs"><i className="fa fa-briefcase fa-md" aria-hidden="true"></i>Jobs</Link>
                            <a href="#" data-toggle="modal" data-target="#newsletterModal"><i className="fa fa-envelope fa-md" aria-hidden="true"></i>Email<span className="d-none d-md-inline"> Sign-up</span></a>
                            <a href="#" data-toggle="modal" data-target="#cartModal"><i className="fa fa-shopping-cart fa-md" aria-hidden="true"></i>Cart</a>
                            <a href="#" data-toggle="modal" data-target="#promoCodeModal"><i className="fa fa-tag fa-md" aria-hidden="true"></i><span className="d-none d-md-inline">Promo </span>Code</a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-dark px-0 pr-xl-3 pb-1 pb-md-0">
                    <div className="container-fluid d-flex pl-md-0 pl-lg-3">
                        <Link className="navbar-brand mx-auto" to="./home"><img src="/Jurassic_Park_logo_name_big.png" height="60" width="auto" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#jurassicParkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end align-self-stretch px-3 px-md-0" id="jurassicParkNavbar">
                            <div className="navbar-nav align-self-stretch">
                                <div className="row">
                                    <div className="col-md nav-item px-0 dropdown">
                                        <Link to='#' className="nav-link dropdown-toggle align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 ml-md-1 px-md-2 px-lg-4 px-xl-5 w-100" id="dropdownParkInfo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Park Info</Link>
                                        <div className="dropdown-menu w-100" aria-labelledby="dropdownParkInfo">
                                            <div className="row">
                                                <div className="navbar-imgcard col-md-5 col-lg-6 d-none d-lg-block">
                                                    <div className="media">
                                                        <img className="d-flex" src="img/thumbnails/helicopter-thumbnail.png" alt="Helicopter over the ocean" />
                                                        <div className="media-body align-self-center">
                                                            <h5><Link to="/getting-here" >Getting to Isla Nublar</Link></h5>
                                                            <p>Jurassic Park is conveniently located on a beautiful tropical island off the coast of Costa Rica. Plan your trip by boat or helicopter today!</p>
                                                            <div className="d-flex justify-content-end">
                                                                <Link className="btn btn-danger " to="/getting-here">Learn More<span className="sr-only"> about Getting to Isla Nublar</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Park
                                                    </h4>
                                                    <Link className="dropdown-item" to="/calendar-and-hours"><i className="fa fa-calendar fa-md" aria-hidden="true"></i>Calendar & Hours</Link>
                                                    <Link className="dropdown-item" to="/park-map"><i className="fa fa-map fa-md" aria-hidden="true"></i>Park Map</Link>
                                                    <Link className="dropdown-item " to="/getting-here"><i className="fa fa-ship fa-md" aria-hidden="true"></i>Getting Here</Link>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Info
                                                    </h4>
                                                    <Link className="dropdown-item" to="/accessibility"><i className="fa fa-wheelchair fa-md" aria-hidden="true"></i>Accessibility</Link>
                                                    <Link className="dropdown-item" to="/jobs"><i className="fa fa-briefcase fa-md" aria-hidden="true"></i>Jobs</Link>
                                                    <Link className="dropdown-item" to="/faq"><i className="fa fa-question-circle fa-md" aria-hidden="true"></i>FAQ</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md nav-item px-0 dropdown">
                                        <a className="nav-link dropdown-toggle align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 px-md-2 px-lg-4 px-xl-5 w-100" href="#" id="dropdownThingsToDo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Things To Do</a>
                                        <div className="dropdown-menu w-100" aria-labelledby="dropdownThingsToDo">
                                            <div className="row">
                                                <div className="navbar-imgcard col-md-5 col-lg-6 d-none d-lg-block">
                                                    <div className="media">
                                                        <img className="d-flex" src="img/thumbnails/island-tour-thumbnail.png" alt="Island tour" />
                                                        <div className="media-body align-self-center">
                                                            <h5><a href="things-to-do/island-tour.html">Tour the Island in Style</a></h5>
                                                            <p>Get up close and personal with our dinosaurs on an automatic tour of beautiful Isla Nublar. Sit back, relax, and let our track-guided vehicles do the driving!</p>
                                                            <div className="d-flex justify-content-end">
                                                                <a className="btn btn-danger " href="things-to-do/island-tour.html">Learn More<span className="sr-only"> about Touring the Island</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Tours & Shows
                                                    </h4>
                                                    <a className="dropdown-item" href="things-to-do/island-tour.html"><i className="fa fa-car fa-md" aria-hidden="true"></i>Island Tour</a>
                                                    <a className="dropdown-item" href="things-to-do/laboratory.html"><i className="fa fa-flask fa-md" aria-hidden="true"></i>Laboratory</a>
                                                    <a className="dropdown-item" href="things-to-do/showcase-theater.html"><i className="fa fa-film fa-md" aria-hidden="true"></i>Showcase Theater</a>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Shopping
                                                    </h4>
                                                    <a className="dropdown-item " href="things-to-do/cafe.html"><i className="fa fa-coffee fa-md" aria-hidden="true"></i>Cretaceous Cafe</a>
                                                    <a className="dropdown-item " href="things-to-do/gift-shop.html"><i className="fa fa-gift fa-md" aria-hidden="true"></i>Gift Shop</a>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md nav-item px-0 dropdown">
                                        <a className="nav-link dropdown-toggle align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 px-md-2 px-lg-4 px-xl-5 w-100" href="#" id="dropdownThingsToSee" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Things To See</a>
                                        <div className="dropdown-menu w-100" aria-labelledby="dropdownThingsToSee">
                                            <div className="row">
                                                <div className="navbar-imgcard col-md-5 col-lg-6 d-none d-lg-block">
                                                    <div className="media">
                                                        <img className="d-flex" src="img/thumbnails/dinos-thumbnail.png" alt="Dinosaurs at the watering hole" />
                                                        <div className="media-body align-self-center">
                                                            <h5><a href="things-to-see/dinosaurs.html">Meet Our Dinosaurs</a></h5>
                                                            <p>Learn all about the amazing creatures you'll be seeing on Isla Nublar. From pack hunters to herbivores, our dinosaurs come in all shapes and sizes.</p>
                                                            <div className="d-flex justify-content-end">
                                                                <a className="btn btn-danger " href="things-to-see/dinosaurs.html">Learn More<span className="sr-only"> about Our Dinosaurs</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Attractions
                                                    </h4>
                                                    <a className="dropdown-item" href="things-to-see/dinosaurs.html"><i className="fa fa-binoculars fa-md" aria-hidden="true"></i>Dinosaurs</a>
                                                    <a className="dropdown-item" href="things-to-see/visitor-center.html"><i className="fa fa-institution fa-md" aria-hidden="true"></i>Visitor Center</a>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Sights
                                                    </h4>
                                                    <a className="dropdown-item " href="things-to-see/gate.html"><i className="fa fa-columns fa-md" aria-hidden="true"></i>Park Gate</a>
                                                    <a className="dropdown-item " href="things-to-see/waterfalls.html"><i className="fa fa-camera fa-md" aria-hidden="true"></i>Waterfalls</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md nav-item px-0 dropdown">
                                        <a className="nav-link dropdown-toggle align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 pl-md-2 pr-md-3 px-lg-4 px-xl-5 w-100" href="#" id="dropdownTickets" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tickets<span className="d-md-none d-lg-inline"> & Passes</span></a>
                                        <div className="dropdown-menu w-100" aria-labelledby="dropdownTickets">
                                            <div className="row">
                                                <div className="navbar-imgcard col-md-5 col-lg-6 d-none d-lg-block">
                                                    <div className="media">
                                                        <img className="d-flex" src="img/thumbnails/birthday-thumbnail.png" alt="Birthday cakes" />
                                                        <div className="media-body align-self-center">
                                                            <h5><a href="tickets-and-passes/birthday-parties.html" className="">Have a Dino-mite Birthday</a></h5>
                                                            <p>Get the coolest birthday party since the dawn of time! With optional free gifts and special VIP packages, you'll have everything you need to enjoy your special day.</p>
                                                            <div className="d-flex justify-content-end">
                                                                <a className="btn btn-danger " href="tickets-and-passes/birthday-parties.html">Book <span className="sr-only">Your Birthday Party </span>Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Admission
                                                    </h4>
                                                    <a className="dropdown-item" href="tickets-and-passes/tickets.html"><i className="fa fa-ticket fa-md" aria-hidden="true"></i>Tickets</a>
                                                    <a className="dropdown-item " href="tickets-and-passes/season-passes.html"><i className="fa fa-id-card " aria-hidden="true"></i>Season Passes</a>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="d-none d-md-block">
                                                        Events
                                                    </h4>
                                                    <a className="dropdown-item " href="tickets-and-passes/groups.html"><i className="fa fa-group fa-md" aria-hidden="true"></i>Groups</a>
                                                    <a className="dropdown-item " href="tickets-and-passes/birthday-parties.html"><i className="fa fa-birthday-cake fa-md" aria-hidden="true"></i>Birthday Parties</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;