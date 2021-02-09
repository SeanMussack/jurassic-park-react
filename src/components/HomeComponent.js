import React from 'react';
import CarouselXL from "./CarouselXLComponent";

function Home(props) {
    return (
        <div id="mainContent">
            <CarouselXL />
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">Test A</div>
                    <div className="col-md m-1">Test B</div>
                    <div className="col-md m-1">Test C</div>
                </div>
            </div>
        </div>
    );
}

export default Home;