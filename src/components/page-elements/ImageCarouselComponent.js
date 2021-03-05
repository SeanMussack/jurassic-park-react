import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

function RenderCarouselItem (carouselItem) {
    return (
        <CarouselItem
            key={carouselItem.src}
        >
            <img className="d-block w-100" src={carouselItem.src} alt={carouselItem.alt} />
        </CarouselItem>
    );
}

function ImageCarousel ({items}) {
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
    return (
        <Carousel 
            className="col-12 col-md-6"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            slide
            pause={false}
            ride="carousel"
        >
            {items.map((carouselItem) => RenderCarouselItem(carouselItem))}
        </Carousel>
    );
}

export default ImageCarousel;