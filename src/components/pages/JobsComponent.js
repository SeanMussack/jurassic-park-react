import React from 'react';
import { Container, Row, Col } from "reactstrap";

import Jumbotron from "../page-elements/JumbotronComponent";
import QuoteCard from '../page-elements/QuoteCardComponent';
import ImageCarousel from '../page-elements/ImageCarouselComponent';
import EmailLink from '../EmailLinkComponent';
import TelephoneLink from '../TelephoneLinkComponent';

import { QUOTES } from '../../shared/quotes';
import { JOBSBENEFITS } from '../../shared/jobsBenefits';
import { IMAGECAROUSELS } from '../../shared/imageCarousels';

function RenderContact () {
    return (
        <Container>
            <hr/>
            <Row className="row-content my-md-5">
                <Col>
                    <h2>Contact Employment Services</h2>
                    <p>
                        For job inquiries, email us at <EmailLink/>
                        <br/>or call us at <TelephoneLink hideIcon="false"/>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

function RenderJobsBenefitsList () {
    return (
        <Col size={12} md={6} lg={{size: 4, offset: 1}} >
            <ul className="text-white pl-4">
                {JOBSBENEFITS.map((benefit) => <li>{benefit}</li>)}
            </ul>
        </Col>
    );
}

function RenderJobsBenefitsBanner () {
    return (
        <Container fluid className="banner pb-4 pb-md-5">
            <Row className="py-3 py-md-5">
                <Col>
                    <h2>Benefits of a job at Jurassic Park:</h2>
                </Col>
            </Row>
            <Row className="align-items-center">
                <RenderJobsBenefitsList />
                <ImageCarousel items={IMAGECAROUSELS[0]} />
            </Row>
        </Container>
    );
}

function Jobs () {
    return (
        <div id="mainContent" className="jobs">
            <Jumbotron
                title="Employment"
                subtitle="Come work for us and see what a job with InGen can offer!"
            />
            <QuoteCard quote={QUOTES[1]} />
            <RenderJobsBenefitsBanner />
            <QuoteCard quote={QUOTES[2]} />
            <RenderContact />
        </div>
    );
}

export default Jobs;