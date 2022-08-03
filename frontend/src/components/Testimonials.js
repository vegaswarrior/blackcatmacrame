import React from 'react'
import './products.css'
import {Carousel, Row, Container, Col} from 'react-bootstrap'
import reviewBackgroundImg from '../components/images/testimonials-bg.jpg'


function Testimonials() {
  return (
    <Container fluid className='review_container'>
        <Row>
            <Col md={12}>
                <h2 className='text-primary text-center jumboH3'>This is The Awesome</h2>
                <h2 className='text-primary text-center jumboH4'>Customers had to Say!</h2>
            </Col>
           

    <Carousel fade className='review_carousel'>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'><strong>"Beautiful Piece"</strong></p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Kim Miller </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 13th, 2022</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>"Genny has such beautiful macrame work and the quality is really spectacular. She
          has a craftsmanship and pricision you don't learn by simply watching YouTube videos. Shipping was super fast, especially considering this was a custom piece. 
          Thanks again Genny! I wear them everyday."
          </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Eric Stever </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>June 20th, 2022</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>That was a gift for my boyfriend and he really liked it! Good quality and fast shipping! Thanks!</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Genevieve Quellet </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Nov 8th, 2021</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>This is the 4th Review</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>This is the 5th Review</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>This is the 6th Review</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
      </Carousel.Item>
    </Carousel>



        </Row>
    </Container>
  )
}

export default Testimonials