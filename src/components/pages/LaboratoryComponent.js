import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Jumbotron from "../page-elements/JumbotronComponent";
import BannerOfImages from "../page-elements/BannerOfImagesComponent";
import GenCard from "../page-elements/GenCardComponent";
import { BANNEROFIMAGES } from "../../shared/bannerOfImages";
import { CARDDATA } from '../../shared/cardData';

const pageTitle = "Laboratory";
const pageSubtitle = "See our scientists at work in the Genetics Lab";

class Laboratory extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title={pageTitle}
                    subtitle={pageSubtitle}
                />
                <Container>
                    <div className="row-content my-md-5">
                        <p>Welcome to the Laboratory, where you can learn all about the magic of DNA!</p>
                        <p>Explore the lab and learn all about genetics in one of our guided tours. You'll see how our geneticists unlock the secrets of amber to create the dinosaurs on our Island Tour. </p>
                        <p>The Laboratory is located within our <Link to="/visitor-center">Visitor Center</Link>.</p>
                    </div>
                </Container>
                <BannerOfImages bannerOfImages={BANNEROFIMAGES[1]}/>
                <Container fluid className="px-lg-5">
                    <Row id="hatchery" className="row-content px-lg-5">
                        <GenCard cardType="lab-card" cardData={CARDDATA[4]}/>
                        <GenCard cardType="lab-card" cardData={CARDDATA[5]}/>
                        <GenCard cardType="lab-card" cardData={CARDDATA[6]}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Laboratory;