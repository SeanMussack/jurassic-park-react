import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="fixed-top">
                <div className="container-fluid">
                    SkipBox
                </div>
            </header>
        );
    }
}

export default Header;