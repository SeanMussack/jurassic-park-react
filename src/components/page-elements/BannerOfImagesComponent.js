import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

function RenderImage({image}) {
    return (
        <Col xs={6} md={4}>
            <img
                className="img-fluid"
                src={image.src}
                alt={image.alt}
            />
        </Col>
    );
}

function RenderImages({images}) {
    return (
        images.map((image) => {
            return (
                <RenderImage image={image} />
            );
        })
    );
}

class BannerOfImages extends Component {
    constructor(props){
        super(props);
        this.props = {
            bannerOfImages: null
        }
    }
    render() {
        return(
            <div className="banner container-fluid">
                <Row>
                    <Col lg={{size: 8, offset: 2}}>
                        <Row className="align-items-center">
                            <Col>
                                <Row className="mt-3 mx-2">
                                    <h3>{this.props.bannerOfImages.header}</h3>
                                </Row>
                                <Row className="m-2">
                                    <RenderImages images={this.props.bannerOfImages.images}/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BannerOfImages;