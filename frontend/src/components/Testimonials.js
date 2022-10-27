import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Rain from '../components/images/rain.jpg'

function Testimonials() {
  return (
    <>
    
    <Carousel className='first_carousel'>
      <Carousel.Item className='carousel_item'>
        <img className="d-block w-100 carousel_item" />
        <Carousel.Caption>
        <h1 className='text-center '>This is what our Awesome Customers Had To Say!</h1>
        <p className='text-center text-dark'>"Genny has such beautiful macrame work and the quality is really spectacular. She
         has a craftsmanship and pricision you don't learn by simply watching YouTube videos. 
         Shipping was super fast, especially considering this was a custom piece. 
        Thanks again Genny! I wear them everyday."</p> 
        <p className='text-center text-dark'>Eric Stever</p>
        <p className='text-center text-dark'>June 20th, 2022</p>                                    
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel_item'>
        <img className="d-block w-100 carousel_item" />
        <Carousel.Caption>
        <h1 className='text-center '>This is what our Awesome Customers Had To Say!</h1>
        <p className='text-center text-dark'>"Genny has such beautiful macrame work and the quality is really spectacular. She
         has a craftsmanship and pricision you don't learn by simply watching YouTube videos. 
         Shipping was super fast, especially considering this was a custom piece. 
        Thanks again Genny! I wear them everyday."</p> 
        <p className='text-center text-dark'>Eric Stever</p>
        <p className='text-center text-dark'>June 20th, 2022</p>                                    
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel_item'>
        <img className="d-block w-100 carousel_item" />
        <Carousel.Caption>
          <h1 className='text-center '>This is what our Awesome Customers Had To Say!</h1>
          <h3>Third slide label</h3>
          <p className='text-dark'> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Testimonials;