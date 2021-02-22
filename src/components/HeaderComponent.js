import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, Button } from 'reactstrap';
import { PAGES } from "../shared/pages";
import { PAGECATEGORIES } from "../shared/pageCategories";
import { FEATURED } from "../shared/featured";

function RenderHeaderLink({page}) {
    return (
        <Link className="dropdown-item" to={page.link}><i className={page.icon} aria-hidden="true"></i>{page.name}</Link>
    );
}

function RenderHeaderSubcategory({pageCategory, subcategory}) {
    return (
        <div className="col-md px-0">
            <h4 className="d-none d-md-block">
                {(subcategory == 1) ? pageCategory.subcategory1 : pageCategory.subcategory0}
            </h4>
            {PAGES.filter(page => page.category == pageCategory.id && page.subcategory == subcategory).map(page => {
                return (
                    <RenderHeaderLink page={page} />
                );
            })}
        </div>
    );
}

function RenderFeaturedButton({featured}) {
    return (
        <Link className="btn btn-danger" to={featured.link}>{featured.buttonText}<span className="sr-only">{featured.buttonTextSrOnly}</span>{featured.buttonTextAfter}</Link>
    );
}
function RenderFeatured({featured}) {
    return (
        <div className="navbar-imgcard col-lg-6 d-none d-lg-block">
            <div className="media">
                <img className="d-flex" src={featured.image} alt={featured.alt} />
                <div className="media-body align-self-center">
                    <h5><Link to={featured.link}>{featured.title}</Link></h5>
                    <p>{featured.text}</p>
                    <div className="d-flex justify-content-end">
                        <RenderFeaturedButton featured={featured} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function RenderHeaderCategory({pageCategory}) {
    return (
        <div className="row">
            <RenderFeatured featured={FEATURED.filter(featured => featured.category == pageCategory.id)[0]}/>
            <RenderHeaderSubcategory pageCategory={pageCategory} subcategory='0'/>
            <RenderHeaderSubcategory pageCategory={pageCategory} subcategory='1'/>
        </div>
    );
}

function RenderNavItemLgAndUp({pageCategory}) {
    if (pageCategory.nameOnlyMdAndUp) {
        return (
            <span className="d-md-none d-lg-inline">{pageCategory.nameOnlyMdAndUp}</span>
        );
    }
    return <React.Fragment />
}

function RenderHeaderDropdown({pageCategory}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown className="nav-item col-md px-0" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className={"align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 px-md-2 px-lg-4 px-xl-5 w-100" 
                + (pageCategory.id == 0 ? " ml-md-1" : "") 
                + (pageCategory.id == 3 ? " pr-md-3" : "")
            }>
                {pageCategory.name}
                <RenderNavItemLgAndUp pageCategory={pageCategory}/>
            </DropdownToggle>
            <DropdownMenu className="w-100">
                <RenderHeaderCategory pageCategory={pageCategory} />
            </DropdownMenu>
        </Dropdown>
    );
}
function RenderHeaderDropdowns() {
    return (
        <React.Fragment>
            <RenderHeaderDropdown pageCategory={PAGECATEGORIES.filter(pageCategory => pageCategory.id === 0)[0]} />
            <RenderHeaderDropdown pageCategory={PAGECATEGORIES.filter(pageCategory => pageCategory.id === 1)[0]} />
            <RenderHeaderDropdown pageCategory={PAGECATEGORIES.filter(pageCategory => pageCategory.id === 2)[0]} />
            <RenderHeaderDropdown pageCategory={PAGECATEGORIES.filter(pageCategory => pageCategory.id === 3)[0]} />
        </React.Fragment>
    );
}

function RenderTopShortcuts({toggleCartModal}) {
    return (
        <div className="top-shortcuts col-12 d-flex justify-content-end ml-0">
            <Link to="./tickets"><i className="fa fa-ticket-alt fa-md" aria-hidden="true"></i>Tickets</Link>
            <Link to="./calendar-and-hours"><i className="fa fa-calendar-alt fa-md" aria-hidden="true"></i>Calendar<span className="d-none d-md-inline"> & Hours</span></Link>
            <Link to="./jobs"><i className="fa fa-briefcase fa-md" aria-hidden="true"></i>Jobs</Link>
            <a href="#" data-toggle="modal" data-target="#newsletterModal"><i className="fa fa-envelope fa-md" aria-hidden="true"></i>Email<span className="d-none d-md-inline"> Sign-up</span></a>
            <a onClick={toggleCartModal} href="#" data-toggle="modal"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</a>
            <a href="#" data-toggle="modal" data-target="#promoCodeModal"><i className="fa fa-tag fa-md" aria-hidden="true"></i><span className="d-none d-md-inline">Promo </span>Code</a>
        </div>
    );
}

function RenderNavbarToggler() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end align-self-stretch px-3 px-md-0" id="jurassicParkNavbar">
                <Nav navbar className="align-self-stretch">
                    <div className="row">
                        <RenderHeaderDropdowns />
                    </div>
                </Nav>
            </Collapse>
        </React.Fragment>
    );
}

function Header({toggleCartModal}) {
    return (
        <header className="fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="skipBox">
                        <a className="skipToMainContent" href="#mainContent">Skip To Main Content</a>
                    </div>
                    <RenderTopShortcuts toggleCartModal={toggleCartModal}/>
                </div>
            </div>
            <Navbar dark expand="md" className="px-0 pr-xl-3 pb-1 pb-md-0">
                <div className="container-fluid d-flex pl-md-0 pl-lg-3">
                    <Link to="/home" className="navbar-brand">
                        <img src="/assets/images/logos/Jurassic_Park_logo_name_big.png" height="60" width="auto" />
                    </Link>
                    <RenderNavbarToggler />
                </div>
            </Navbar>
        </header>
    );
}

export default Header;