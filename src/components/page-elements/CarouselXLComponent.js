import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { CAROUSELXL } from '../../shared/carouselXL';

function RenderCarouselHeader ({item}) {
    return (
        <React.Fragment>
            {item.captionStart}
            <span className="d-inline d-md-none">{item.captionXS}</span>
            <span className="d-none d-md-inline">{item.captionMD}</span>
            <span className="text-nowrap">{item.captionMiddle}</span>
            <Link className="text-nowrap" to={item.captionLinkSrc}>{item.captionLinkText}</Link>
        </React.Fragment>
    );
}

const CarouselXL = (props) => {
    const items = CAROUSELXL[0];
    //the majority of this was copied from https://reactstrap.github.io/components/carousel/
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="d-block w-100" src={item.src} alt={item.altText} />
                <CarouselCaption captionHeader={RenderCarouselHeader({item})} captionText={""}/>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            className="col-12 col-xl-10 offset-xl-1 px-0"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            slide
            pause={false}
            ride="carousel"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CarouselXL;