import React, {Component} from 'react';

const telNum = "18005553466";
const telText = "1-800-555-DINO";
const telIcon = "fa fa-phone";

class TelephoneLink extends Component {
    static defaultProps = {
        hideIcon: false,
    }
    render() {
        return (
            <React.Fragment>
                {   (this.props.hideIcon)
                    ?   <a href={"tel:+" + telNum}>
                            {telText}
                        </a>
                    :   <a className="btn btn-link" role="button" href={"tel:+" + telNum}>
                            <i className={telIcon} aria-hidden="true"></i>
                            {telText}
                        </a>
                }
            </React.Fragment>
        );
    }
}

export default TelephoneLink;