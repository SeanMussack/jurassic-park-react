import React, {Component} from 'react';

const telNum = "18005553466";
const telText = "1-800-555-DINO";
const telIcon = "fa fa-phone";

class TelephoneLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a className="btn btn-link" role="button" href={"tel:+" + telNum}>
                <i className={telIcon} aria-hidden="true"></i>
                {telText}
            </a>
        );
    }
}

export default TelephoneLink;