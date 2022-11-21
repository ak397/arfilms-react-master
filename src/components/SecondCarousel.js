import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function SecondCarousel() {
  return (
    <MDBCarousel showControls dealy={1000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./aghori/IMG_6699.jpg'
        alt=''
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./aghori/IMG_6700.jpg'
        alt=''
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./aghori/IMG_6438.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}