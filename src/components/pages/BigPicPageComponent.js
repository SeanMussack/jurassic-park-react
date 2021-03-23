import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class BigPicPage extends Component {
    constructor(props) {
        super(props);
        this.props = {
            bigPicData: null
        }
    }

    render() {
        return (
            <div id="mainContent">
                <Container fluid className="jumbo-img-container">
                    <img 
                        className="jumbo-img-bg img-fluid d-block d-sm-none"
                        src={this.props.bigPicData.srcXs}
                        alt={this.props.bigPicData.alt}
                    />
                    <img 
                        className="jumbo-img-bg img-fluid d-none d-sm-block d-lg-none"
                        src={this.props.bigPicData.srcSm}
                        alt={this.props.bigPicData.alt}
                    />
                    <img 
                        className="jumbo-img-bg img-fluid d-none d-lg-block"
                        src={this.props.bigPicData.srcLg}
                        alt={this.props.bigPicData.alt}
                    />
                    <div className="jumbo-img-text mt-4 mt-md-5 mt-lg-3 mt-xl-5 ml-md-3 ml-lg-5">
                        <h1>{this.props.bigPicData.title}</h1>
                        <h3>
                            {this.props.bigPicData.subtitle}
                            {(this.props.bigPicData.subtitleLinkSrc)
                                ? <Link to={this.props.bigPicData.subtitleLinkSrc}>
                                    {this.props.bigPicData.subtitleLinkText}
                                </Link>
                                : <React.Fragment/>}
                        </h3>
                        <p className="d-none d-md-block">{this.props.bigPicData.text}</p>
                        {(this.props.bigPicData.VIPonly)
                            ? <i>
                                Note: only available with <Link to="/tickets#VIP">VIP-level passes</Link>.
                            </i>
                            : <React.Fragment/>}
                    </div>
                </Container>
            </div>
        );
    }
}

export default BigPicPage;