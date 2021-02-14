import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, Row } from "reactstrap";
import Jumbotron from "./JumbotronComponent";
import BannerOfImages from "./BannerOfImages";
import ImageAndText from "./ImageAndTextComponent";
import { VISITORCENTERCARDS } from "../shared/visitorCenterCards";
import { BANNEROFIMAGES } from "../shared/bannerOfImages";
import { IMAGEANDTEXTDATA } from "../shared/imageAndTextData";

class RenderVisitorCenterCard extends Component {
    constructor(props) {
        super(props);
        this.props = {
            visitorCenterCard: null
        }
    }
    render() {
        return(
            <Card className="visitor-center-card d-flex flex-wrap mx-auto" key={this.props.visitorCenterCard.key}>
                <img 
                    className="card-img-top"
                    src={this.props.visitorCenterCard.src}
                    alt={this.props.visitorCenterCard.alt}
                />
                <CardBody className="p-2 p-md-4">
                    <CardText>
                        {this.props.visitorCenterCard.text}
                        <Link to={this.props.visitorCenterCard.href}>{this.props.visitorCenterCard.linkText}</Link>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

class VisitorCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="mainContent">
                <Jumbotron
                    title="Visitor Center"
                    subtitle="Your one-stop shop for Jurassic Park info, tours, dining, gifts, and more!"
                />
                <div className="container">
                    <Row className="row-content">
                        <p>Located at the center of Isla Nublar, the Visitor Center is the first stop in your unforgettable Jurassic Park adventure. From shopping and snacks to science and a show, all under one roof!</p>
                    </Row>
                </div>
                <div className="container-fluid">
                    <div className="row row-content">
                        <RenderVisitorCenterCard visitorCenterCard={VISITORCENTERCARDS[0]}/>
                        <RenderVisitorCenterCard visitorCenterCard={VISITORCENTERCARDS[1]}/>
                        <RenderVisitorCenterCard visitorCenterCard={VISITORCENTERCARDS[2]}/>
                        <RenderVisitorCenterCard visitorCenterCard={VISITORCENTERCARDS[3]}/>
                    </div>
                </div>
                <BannerOfImages bannerOfImages={BANNEROFIMAGES[0]}/>
                <div className="container-fluid">
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[2]}/>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[3]}/>
                </div>
            </div>
        );
    }
}

export default VisitorCenter;