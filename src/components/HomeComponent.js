import React from 'react';
import CarouselXL from "./CarouselXLComponent";
import Quote from './QuoteComponent';
import { QUOTES } from '../shared/quotes';

function Home(props) {
    return (
        <div id="mainContent">
            <CarouselXL />
            <Quote quote={QUOTES[0]} />
        </div>
    );
}

export default Home;