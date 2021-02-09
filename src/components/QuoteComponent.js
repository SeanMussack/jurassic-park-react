import React from 'react';

const Quote = ({quote}) => {

    return (
        <div className="container">
            <div className="row row-content">
                <div className="card talking-head-card">
                    <div className="card-body row align-items-center">
                        <blockquote className={"blockquote col-12 col-md-8 col-lg-7" + ((quote.reverseOrder) ? " order-md-2" : " offset-lg-1")}>
                            <p><i className="fa fa-quote-left" aria-hidden="true"></i>{quote.text}<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                        </blockquote>
                        <div className="talking-head-column col-12 col-md-4">
                            <img className="talking-head" src={quote.source.image} alt={quote.source.name} />
                            <footer className="blockquote-footer"><cite title="Source Title">{quote.source.name}</cite>{((quote.source.title) ? <React.Fragment>,<br/>{quote.source.title}</React.Fragment> : null)}</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;