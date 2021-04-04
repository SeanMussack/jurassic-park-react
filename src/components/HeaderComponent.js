import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarToggler, Collapse, 
    Dropdown, DropdownToggle, DropdownMenu, 
    Container, Row, Col, Button } from 'reactstrap';
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
        <Col className="px-0">
            <h4 className="d-none d-md-block">
                {(subcategory == 1) ? pageCategory.subcategory1 : pageCategory.subcategory0}
            </h4>
            {PAGES.filter(page => page.category == pageCategory.id && page.subcategory == subcategory).map(page => {
                return (
                    <RenderHeaderLink page={page} key={page.name}/>
                );
            })}
        </Col>
    );
}

function RenderFeaturedButton({featured}) {
    return (
        <Link className="btn btn-danger" to={featured.link}>{featured.buttonText}<span className="sr-only">{featured.buttonTextSrOnly}</span>{featured.buttonTextAfter}</Link>
    );
}
function RenderFeatured({featured}) {
    return (
        <Col lg={6} className="navbar-imgcard d-none d-lg-block">
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
        </Col>
    );
}

function RenderHeaderCategory({pageCategory}) {
    return (
        <Row>
            <RenderFeatured featured={FEATURED.filter(featured => featured.category == pageCategory.id)[0]}/>
            <RenderHeaderSubcategory pageCategory={pageCategory} subcategory='0'/>
            <RenderHeaderSubcategory pageCategory={pageCategory} subcategory='1'/>
        </Row>
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
    const showDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }
    const hideDropdown = () => {
        setDropdownOpen(false);
    }
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown 
            className="nav-item col-md px-0" 
            isOpen={dropdownOpen} 
            toggle={toggle}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
        >
            <DropdownToggle 
                caret 
                className={"align-self-md-stretch pt-md-3 pb-md-4 mt-md-2 px-2 px-md-2 px-lg-4 px-xl-5 w-100" 
                    + (pageCategory.id == 0 ? " ml-md-1" : "") 
                    + (pageCategory.id == 3 ? " pr-md-3" : "")
                }
            >
                {pageCategory.name}
                <RenderNavItemLgAndUp pageCategory={pageCategory}/>
            </DropdownToggle>
            <DropdownMenu className="w-100" onClick={hideDropdown}>
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

export function RenderTopShortcuts({toggleEmailModal, toggleCartModal, togglePromoModal}) {
    return (
        <Col xs={12} className="top-shortcuts d-flex justify-content-end ml-0">
            <Link to="./tickets"><i className="fa fa-ticket-alt fa-md" aria-hidden="true"></i>Tickets</Link>
            <Link to="./calendar-and-hours"><i className="fa fa-calendar-alt fa-md" aria-hidden="true"></i>Calendar<span className="d-none d-md-inline"> & Hours</span></Link>
            <Link to="./jobs"><i className="fa fa-briefcase fa-md" aria-hidden="true"></i>Jobs</Link>
            <Button onClick={toggleEmailModal} color="link">
                <i className="fa fa-envelope fa-md" aria-hidden="true"></i>
                Email<span className="d-none d-md-inline"> Sign-up</span>
            </Button>
            <Button onClick={toggleCartModal} color="link">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="text-nowrap">Cart ({this.state.numItemsInCart})</span>
            </Button>
            <Button onClick={togglePromoModal} color="link">
                <i className="fa fa-tag" aria-hidden="true"></i>
                <span className="d-none d-md-inline">Promo </span>Code
            </Button>
        </Col>
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

function Header({toggleEmailModal, toggleCartModal, togglePromoModal, RenderTopShortcuts}) {
    return (
        <header className="fixed-top">
            <Container fluid>
                <Row>
                    <div className="skipBox">
                        <a className="skipToMainContent" href="#mainContent">Skip To Main Content</a>
                    </div>
                    <RenderTopShortcuts
                        toggleEmailModal={toggleEmailModal}
                        toggleCartModal={toggleCartModal}
                        togglePromoModal={togglePromoModal}
                    />
                </Row>
            </Container>
            <Navbar dark expand="md" className="px-0 pr-xl-3 pb-1 pb-md-0">
                <Container fluid className="d-flex pl-md-0 pl-lg-3">
                    <Link to="/home" className="navbar-brand">
                        <img src="/assets/images/logos/Jurassic_Park_logo_name_big.png" height="60" width="auto" />
                    </Link>
                    <RenderNavbarToggler />
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;