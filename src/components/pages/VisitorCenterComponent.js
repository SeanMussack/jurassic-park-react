import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Jumbotron from "../page-elements/JumbotronComponent";
import GenCard from "../page-elements/GenCardComponent";
import BannerOfImages from "../page-elements/BannerOfImagesComponent";
import ImageAndText from "../page-elements/ImageAndTextComponent";
import { CARDDATA } from "../../shared/cardData";
import { BANNEROFIMAGES } from "../../shared/bannerOfImages";
import { IMAGEANDTEXTDATA } from "../../shared/imageAndTextData";

const pageTitle = "Visitor Center";
const pageSubtitle = "Your one-stop shop for Jurassic Park info, tours, dining, gifts, and more!";
const pageText = "Located at the center of Isla Nublar, the Visitor Center is the first stop in your unforgettable Jurassic Park adventure. From shopping and snacks to science and a show, all under one roof!";

class VisitorCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="mainContent">
                <Jumbotron
                    title={pageTitle}
                    subtitle={pageSubtitle}
                />
                <Container>
                    <Row className="row-content">
                        <p>{pageText}</p>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="row-content">
                        <GenCard cardType="visitor-center-card" cardData={CARDDATA[0]}/>
                        <GenCard cardType="visitor-center-card" cardData={CARDDATA[1]}/>
                        <GenCard cardType="visitor-center-card" cardData={CARDDATA[2]}/>
                        <GenCard cardType="visitor-center-card" cardData={CARDDATA[3]}/>
                    </Row>
                </Container>
                <BannerOfImages bannerOfImages={BANNEROFIMAGES[0]}/>
                <Container fluid>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[2]}/>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[3]}/>
                </Container>
            </div>
        );
    }
}

export default VisitorCenter;