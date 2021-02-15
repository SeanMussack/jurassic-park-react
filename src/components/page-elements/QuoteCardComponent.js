import React from 'react';
import { Container, Row, Card, CardBody, Col} from 'reactstrap';

const QuoteCard = ({quote}) => {
    return (
        <Container>
            <Row className="row-content">
                <Card className="talking-head-card">
                    <CardBody className="row align-items-center">
                        <blockquote className={"blockquote col-12 col-md-8 col-lg-7" + ((quote.reverseOrder) ? " order-md-2" : " offset-lg-1")}>
                            <p>
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                {quote.text}
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </blockquote>
                        <Col md="4" className="talking-head-column">
                            <img 
                                className="talking-head" 
                                src={quote.source.image} 
                                alt={quote.source.name} 
                            />
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{quote.source.name}</cite>
                                {((quote.source.title) 
                                    ? <React.Fragment>,<br/>{quote.source.title}</React.Fragment> 
                                    : null
                                )}
                            </footer>
                        </Col>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    );
}

export default QuoteCard;