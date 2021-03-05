import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Jumbotron from "../page-elements/JumbotronComponent";
import ImageAndText from "../page-elements/ImageAndTextComponent";
import { IMAGEANDTEXTDATA } from "../../shared/imageAndTextData";

class GettingHere extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div id="mainContent">
                <Jumbotron
                    title="Getting Here"
                    subtitle="By sea or by air"
                    isRightAligned="true"
                />
                <Container fluid>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[0]}/>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[1]}/>
                </Container>
            </div>
        );
    }
}

export default GettingHere;