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
          <p className='testPara d-flex align-items-center justify-content-center'><strong>This is the 1st Review</strong></p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>This is the 2nd Review</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
      </Carousel.Item>
      <Carousel.Item>
          <p className='testPara d-flex align-items-center justify-content-center'>This is the 3rd Review</p>
          <p className='text-dark d-flex align-items-center justify-content-center'>Allen Young </p>
          <p className='text-dark d-flex align-items-center justify-content-center'>July 7th</p>
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