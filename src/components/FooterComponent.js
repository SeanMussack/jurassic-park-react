import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import TelephoneLink from "./TelephoneLinkComponent";
import { PAGES } from "../shared/pages";
import { PAGECATEGORIES } from "../shared/pageCategories";

function RenderFooterLink({page}) {
    var nowrapClassName = null;
    if (page.nowrap) {
        nowrapClassName = "text-nowrap";
    }
    return (
        <li><Link to={page.link} className={nowrapClassName}>{page.name}</Link></li>
    );
}

function RenderFooterColumn({pageCategory}) {
    var nowrapClassName = null;
    if (pageCategory.nowrap) {
        nowrapClassName = "text-nowrap";
    }
    return (
        <Col xs={6} md={3} lg={2} className={(pageCategory.id === 0) ? "d-flex offset-lg-1" : "d-flex"}>
            <div>
                <h5 className={nowrapClassName}>{pageCategory.name}{pageCategory.nameOnlyMdAndUp}</h5>
                <ul className="list-unstyled">
                    {PAGES.filter(page => page.category === pageCategory.id).map(page => {
                        return (
                            <RenderFooterLink page={page} key={PAGES.indexOf(page)} />
                        );
                    })}
                </ul>
            </div>
        </Col>
    );
}

function Footer(props) {
    return (
        <footer className="site-footer">
            <Container fluid>
                <Row>
                    {PAGECATEGORIES.map(pageCategory => {
                        return (
                            <RenderFooterColumn pageCategory={pageCategory} key={pageCategory.id} />
                        );
                    })}
                    <Col xs={12} md={4} lg={2} className="stay-connected d-flex ">
                        <div className="text-center">
                            <h5 className="text-nowrap">Stay Connected</h5>
                            <TelephoneLink/>
                            <div>
                                <button data-toggle="modal" data-target="#newsletterModal" className="btn btn-danger">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>Email Sign-up
                                </button>
                            </div>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/JurassicWorld"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook link</span></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/JurassicPark2go"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter link</span></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=-w-58hQ9dLk"><i className="fab fa-youtube" aria-hidden="true"></i><span className="sr-only">Youtube link</span></a>
                        </div>
                    </Col>
                    <Col md={6} lg={{size: 6, offset: 3}} className="d-flex justify-content-center">
                        <Container fluid>
                            <Row className="justify-content-around align-items-center">
                                <Link to='./home'><img src="/assets/images/logos/Jurassic_Park_logo.png" width="200" className="m-3 m-md-0"/></Link>
                                <a href='https://jurassicpark.fandom.com/wiki/InGen'><img src="/assets/images/logos/ingen-logo.png" height="80" width="auto"/></a>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="site-copyright">
                    <Col xs={12}>
                        <div><Link to='./privacy-policy'>Privacy Policy</Link></div>
                        <div>All external websites linked were made by <span className="text-nowrap">third parties</span> with no connection to <span className="text-nowrap">this website or its creator.</span></div>
                        <div>For parody use only. No infringement intended.</div>
                        <div>Jurassic Park and Jurassic World are trademarks and copyrights of <span className="text-nowrap">Universal Studios</span> and <span className="text-nowrap">Amblin Entertainment, Inc.</span></div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;