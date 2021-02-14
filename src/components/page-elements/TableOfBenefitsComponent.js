import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from 'react-router-dom';
import { BENEFITS } from "../../shared/benefits";

function isHasBenefit (cartItem, benefit) {
    for (const key in cartItem.benefits) {
        if (cartItem.benefits.hasOwnProperty(key)) {
            if (key === benefit.name) {
                return key;
            }
        }
    }
    return false;
}

function RenderCheckmark(isCheckmarkNotX) {
    if (isCheckmarkNotX){
        return (
            <i class="fa fa-check fa-lg"></i>
        );
    }
    return (
        <i className="fa fa-times fa-lg"></i>
    );
}

class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cartItem1: null,
            cartItem2: null,
            cartItem3: null,
            isSeasonPass: false
        }
    }
    render() {
        return (
            <thead>
                <tr>
                    <th scope="col" className="bg-dark text-white">
                        {(this.props.isSeasonPass)
                            ? <React.Fragment>1993 Season Pass Benefits</React.Fragment>
                            : <React.Fragment>One-day Ticket Benefits</React.Fragment>
                        }
                    </th>
                    <th scope="col" className="bg-dark text-white">{this.props.cartItem1.nameShort}</th>
                    <th scope="col" className="bg-danger text-white">{this.props.cartItem2.nameShort}</th>
                    <th scope="col" className="bg-warning">{this.props.cartItem3.nameShort}</th>
                </tr>
            </thead>
        );
    }
}

class TableRowHeader extends Component {
    constructor(props) {
        super(props);
        this.props = {
            benefit: null,
            isSeasonPass: false
        }
    }    
    render() {
        return (
            <th scope="row" className="text-nowrap">
                {(this.props.benefit.textSeasonPass) && (this.props.isSeasonPass)
                    ? this.props.benefit.textSeasonPass
                    : this.props.benefit.text
                }
                {(this.props.benefit.isNoLinkSeasonPass) && (this.props.isSeasonPass)
                    ? <React.Fragment/>
                    : <React.Fragment>
                        <Link to={this.props.benefit.href}>{this.props.benefit.textLink}</Link>
                        {
                            (this.props.benefit.href2)
                            ? <React.Fragment>
                                    <React.Fragment> and </React.Fragment>
                                    <Link to={this.props.benefit.href2}>{this.props.benefit.textLink2}</Link>
                                </React.Fragment>
                            : <React.Fragment/>
                        }
                    </React.Fragment>
                }
                
            </th>
        );
    }
}

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.props = {
            benefit: null,
            cartItem1: null,
            cartItem2: null,
            cartItem3: null,
            isSeasonPass: false
        }
    }
    render() {
        return (
            <tr>
                <TableRowHeader
                    benefit={this.props.benefit}
                    isSeasonPass={this.props.isSeasonPass}
                />
                <td>{RenderCheckmark(
                    isHasBenefit(this.props.cartItem1, this.props.benefit)
                )}</td>
                <td>{RenderCheckmark(
                    isHasBenefit(this.props.cartItem2, this.props.benefit)
                )}</td>
                <td>{RenderCheckmark(
                    isHasBenefit(this.props.cartItem3, this.props.benefit)
                )}</td>
            </tr>
        );
    }
}

class TableOfBenefits extends Component {
    constructor(props) {
        super(props);
        this.props = {
            cartItem1: null,
            cartItem2: null,
            cartItem3: null,
            isSeasonPass: false
        }
    }
    render() {
        return (
            <Table striped bordered hover className="img-shadow">
                <TableHeader
                    cartItem1={this.props.cartItem1}
                    cartItem2={this.props.cartItem2}
                    cartItem3={this.props.cartItem3}
                    isSeasonPass={this.props.isSeasonPass}
                />
                <tbody>
                    <TableRow benefit={BENEFITS[0]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[1]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[2]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[3]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[4]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[5]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                    <TableRow benefit={BENEFITS[6]}
                        cartItem1={this.props.cartItem1}
                        cartItem2={this.props.cartItem2}
                        cartItem3={this.props.cartItem3}
                        isSeasonPass={this.props.isSeasonPass}
                    />
                </tbody>
            </Table>
        );
    }
}

export default TableOfBenefits;