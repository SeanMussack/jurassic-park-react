import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, Button } from "reactstrap";
import { Link } from 'react-router-dom';

class GenCard extends Component {
    static defaultProps = {
        cardType: null,
        cardData: null
    }
    render() {
        return (
            <Card
                className={this.props.cardType + " d-flex flex-wrap mx-auto"} 
                key={this.props.cardData.key}
            >
                <CardImg 
                    top
                    src={this.props.cardData.src}
                    alt={this.props.cardData.alt}
                />
                <CardBody className="p-2 p-md-4">
                    {(  (this.props.cardData.title)
                        ? <h4 className="card-title">
                            {this.props.cardData.title}
                            {(  (this.props.cardData.titleHref)
                                ? <Link to={this.props.cardData.titleHref}>
                                    {this.props.cardData.titleLinkText}
                                </Link>
                                : <React.Fragment/>
                            )}
                        </h4>
                        : <React.Fragment/>
                    )}
                    <CardText>
                        {this.props.cardData.text}
                        {(  (this.props.cardData.href)
                            ? <Link to={this.props.cardData.href}>
                                {this.props.cardData.linkText}
                            </Link>
                            : <React.Fragment/>
                        )}
                        {(  (this.props.cardData.text2)
                            ? <React.Fragment><br/>{this.props.cardData.text2}</React.Fragment>
                            : <React.Fragment/>
                        )}
                    </CardText>
                </CardBody>
                {(  (this.props.cardData.buttonSrOnly)
                    ? <div className="d-flex justify-content-end">
                        <Link className="btn btn-danger" to={this.props.cardData.href}>
                            Learn More<span className="sr-only">{this.props.cardData.buttonSrOnly}</span>
                        </Link>
                    </div>
                    : <div></div>
                )}
            </Card>
        );
    }
}

export default GenCard;