import React, { Component } from 'react';
import Jumbotron from "./JumbotronComponent";
import ImageAndText from "./ImageAndTextComponent";
import { IMAGEANDTEXTDATA } from "../shared/imageAndTextData";

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
                <div className="container-fluid">
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[0]}/>
                    <ImageAndText imageAndTextData={IMAGEANDTEXTDATA[1]}/>
                </div>
            </div>
        );
    }
}

export default GettingHere;