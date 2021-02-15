import React from 'react';
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
    var colClassName = "col-6 col-md-3 col-lg-2 d-flex";
    if (pageCategory.id === 0) {
        colClassName = colClassName + " offset-lg-1";
    }
    var nowrapClassName = null;
    if (pageCategory.nowrap) {
        nowrapClassName = "text-nowrap";
    }

    return (
        <div className={colClassName}>
            <div>
                <h5 className={nowrapClassName}>{pageCategory.name}{pageCategory.nameOnlyMdAndUp}</h5>
                <ul className="list-unstyled">
                    {PAGES.filter(page => page.category === pageCategory.id).map(page => {
                        return (
                            <RenderFooterLink page={page} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">
                    {PAGECATEGORIES.map(pageCategory => {
                        return (
                            <RenderFooterColumn pageCategory={pageCategory} />
                        );
                    })}
                    <div className="stay-connected col-12 col-md-4 col-lg-2 d-flex ">
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
                    </div>
                    <div className="col col-md-6 col-lg-6 offset-lg-3 d-flex justify-content-center">
                        <div className="container-fluid">
                            <div className="row justify-content-around align-items-center">
                                <Link to='./home'><img src="/assets/images/logos/Jurassic_Park_logo.png" width="200" className="m-3 m-md-0"/></Link>
                                <a href='https://jurassicpark.fandom.com/wiki/InGen'><img src="/assets/images/logos/ingen-logo.png" height="80" width="auto"/></a>
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