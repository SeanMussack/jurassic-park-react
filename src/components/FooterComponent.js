import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2 offset-lg-1 d-flex">
                        <div>
                            <h5>Park Info</h5>
                            <ul className="list-unstyled">
                                <li><Link to='./calendar-and-hours' className="text-nowrap">Calendar & Hours</Link></li>
                                <li><Link to='./park-map'>Park Map</Link></li>
                                <li><Link to='./getting-here'>Getting Here</Link></li>
                                <li><Link to='./accessibility'>Accessibility</Link></li>
                                <li><Link to='./jobs.'>Jobs</Link></li>
                                <li><Link to='./faq'>FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex ">
                        <div>
                            <h5 className="text-nowrap">Things To Do</h5>
                            <ul className="list-unstyled">
                                <li><Link to='./island-tour'>Island Tour</Link></li>
                                <li><Link to='./laboratory'>Laboratory</Link></li>
                                <li><Link to='./showcase-theater'>Showcase Theater</Link></li>
                                <li><Link to='./cafe'>Cretaceous Cafe</Link></li>
                                <li><Link to='./gift-shop'>Gift Shop</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex ">
                        <div>
                            <h5 className="text-nowrap">Things To See</h5>
                            <ul className="list-unstyled">
                                <li><Link to='./dinosaurs'>Dinosaurs</Link></li>
                                <li><Link to='./visitor-center'>Visitor Center</Link></li>
                                <li><Link to='./gate' >Park Gate</Link></li>
                                <li><Link to='./waterfalls'>Waterfalls</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex ">
                        <div>
                            <h5>Tickets <span className="text-nowrap">& Passes</span></h5>
                            <ul className="list-unstyled">
                                <li><Link to='./tickets' >Tickets</Link></li>
                                <li><Link to='./season-passes' ><span className="text-nowrap">Season Passes</span></Link></li>
                                <li><Link to='./groups'>Groups</Link></li>
                                <li><Link to='./birthday-parties' className=""><span className="text-nowrap">Birthday Parties</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="stay-connected col-12 col-md-4 col-lg-2 d-flex ">
                        <div className="text-center">
                            <h5 className="text-nowrap">Stay Connected</h5>
                            <a className="btn btn-link" role="button" href="tel:+18005553466">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                1-800-555-DINO
                            </a>
                            <div>
                                <button data-toggle="modal" data-target="#newsletterModal" className="btn btn-danger">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>Email Sign-up
                                </button>
                            </div>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/JurassicWorld"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook link</span></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/JurassicPark2go"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter link</span></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=-w-58hQ9dLk"><i className="fab fa-youtube" aria-hidden="true"></i><span className="sr-only">Youtube link</span></a>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-6 offset-lg-3 d-flex justify-content-center">
                        <div className="container-fluid">
                            <div className="row justify-content-around align-items-center">
                                <Link to='./home'><img src="/Jurassic_Park_logo.png" width="200" className="m-3 m-md-0"/></Link>
                                <a href='https://jurassicpark.fandom.com/wiki/InGen'><img src="/ingen-logo.png" height="80" width="auto"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row site-copyright">
                    <div className="col-12">
                        <div><Link to='./privacy-policy'>Privacy Policy</Link></div>
                        <div>All external websites linked were made by <span className="text-nowrap">third parties</span> with no connection to <span className="text-nowrap">this website or its creator.</span></div>
                        <div>For parody use only. No infringement intended.</div>
                        <div>Jurassic Park and Jurassic World are trademarks and copyrights of <span className="text-nowrap">Universal Studios</span> and <span className="text-nowrap">Amblin Entertainment, Inc.</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;