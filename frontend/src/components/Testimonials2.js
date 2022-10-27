import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        /> */}

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;





import React from 'react'
import './products.css'
import {Carousel, Row, Container, Col} from 'react-bootstrap'
import reviewBackgroundImg from '../components/images/testimonials-bg.jpg'




function Testimonials() {
  return (
    <Container  className='review_container'>
        <Row>
            <Col md={12}>
                <h2 className='text-primary text-center jumboH3'>This is The Awesome</h2>
                <h2 className='text-primary text-center jumboH4'>Customers had to Say!</h2>
            </Col>
           

  
<Container className='test_container'>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active carousel_height">
                                                   <p className='text-center'>"Genny has such beautiful macrame work and the quality is really spectacular. She
                                                       has a craftsmanship and pricision you don't learn by simply watching YouTube videos. 
                                                       Shipping was super fast, especially considering this was a custom piece. 
                                                       Thanks again Genny! I wear them everyday."</p> 
                                                    <p className='text-center'>Eric Stever</p>
                                                    <p className='text-center'>June 20th, 2022</p>
    </div>
    <div class="carousel-item">
                                               <p className='text-center'>"Beautiful Piece"</p> 
                                               <p className='text-center'>Kim Miller</p>
                                               <p className='text-center'>July 13th, 2022</p>
    </div>
    <div class="carousel-item" >
                                     <p className='text-center'>"That was a gift for my boyfriend and he really liked it! Good quality and fast shipping! Thanks!"</p> 
                                      
                                      <p className='text-center'><strong>Genevieve Quellet</strong></p>
                                  
                                     <p className='text-center'>Nov 8th, 2021</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true">
  <div className="carousel-inner">
    <div className="carousel-item active carousel_height">
                                             <p className='text-center'>"Genny has such beautiful macrame work and the quality is really spectacular. She
                                                       has a craftsmanship and pricision you don't learn by simply watching YouTube videos. 
                                                       Shipping was super fast, especially considering this was a custom piece. 
                                                       Thanks again Genny! I wear them everyday."</p> 
                                              <p className='text-center'>Eric Stever</p>
                                              <p className='text-center'>June 20th, 2022</p>
              
    </div>
    <div className="carousel-item active carousel_height">
                                               <p className='text-center'>"Beautiful Piece"</p> 
                                               <p className='text-center'>Kim Miller</p>
                                               <p className='text-center'>July 13th, 2022</p>
              
    </div>
    <div className="carousel-item active carousel_height">
                <p className='text-center'>"That was a gift for my boyfriend and he really liked it! Good quality and fast shipping! Thanks!"</p> 
                                      
                                              <p className='text-center'><strong>Genevieve Quellet</strong></p>
                                          
                                             <p className='text-center'>Nov 8th, 2021</p>
              
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
</Container>
        </Row>
    </Container>
  )
}
