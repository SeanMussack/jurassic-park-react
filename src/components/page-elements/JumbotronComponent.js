import React, { Component } from 'react';

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.props = {
            title: '',
            subtitle: '',
            isRightAligned: false,
        }
    }
    render() {
        return(
            <div className={"jumbotron" + (this.props.isRightAligned ? " text-right" : "")}>
                <h1 className="pt-lg-5">{this.props.title}</h1>
                <h3 className="py-md-2">{this.props.subtitle}</h3>
            </div>
        );
    }
}

export default Jumbotron;