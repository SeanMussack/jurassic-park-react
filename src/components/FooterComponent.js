import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2 offset-lg-1 d-flex">
                        <div>
                            <h5>Park Info</h5>
                            <ul className="list-unstyled">
                                <li>Calendar & Hours</li>
                                <li>Park Map</li>
                                <li>Getting Here</li>
                                <li>Accessibility</li>
                                <li>Jobs</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;