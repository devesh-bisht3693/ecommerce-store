import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = mainCarouselData.map((item) => <img className='cursor-pointer' src={item.image} alt='' role="presentation"/>)

export const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        animationType="fadeout"
        infinite
        disableButtonsControls
    />
);