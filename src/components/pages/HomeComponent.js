import React from 'react';
import { Container, Row } from "reactstrap";
import CarouselXL from "../page-elements/CarouselXLComponent";
import QuoteCard from '../page-elements/QuoteCardComponent';
import BannerOfImages from "../page-elements/BannerOfImagesComponent";
import GenCard from "../page-elements/GenCardComponent";
import { QUOTES } from '../../shared/quotes';
import { BANNEROFIMAGES } from "../../shared/bannerOfImages";
import { CARDDATA } from '../../shared/cardData';

function Home() {
    return (
        <div id="mainContent">
            <CarouselXL />
            <QuoteCard quote={QUOTES[0]} />
            <BannerOfImages bannerOfImages={BANNEROFIMAGES[2]}/>
            <Container fluid className="px-lg-5">
                <Row className="row-content px-lg-5">
                    <GenCard cardType="index-card" cardData={CARDDATA[7]}/>
                    <GenCard cardType="index-card" cardData={CARDDATA[8]}/>
                    <GenCard cardType="index-card" cardData={CARDDATA[9]}/>
                </Row>
            </Container>
        </div>
    );
}

export default Home;