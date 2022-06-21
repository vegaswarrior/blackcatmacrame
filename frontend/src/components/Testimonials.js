import React from 'react'
import './products.css'


const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

  
// function Reviews() {
//   return (
    // <Container fluid className='review_container'>
    //     <Row>
    //         <Col md={12}>
    //             <h2 className='text-primary text-center'>This is The Awesome things our customers had to say!</h2>
    //         </Col>
           

    // <Carousel fade className='bg-dark review_carousel'>
    //   <Carousel.Item>
    //       <p className='text-center'>This is the first Review</p>
    //     <Carousel.Caption>
    //       <h3 className='text-dark'>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Second slide&bg=282c34"
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3 className='text-dark'>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //      <p className='text-center text-dark' >This is the second review</p>

    //     <Carousel.Caption>
    //       <h3 className='text-dark'>Third slide label</h3>
    //       <p>
    //       <p className='text-dark'>This is the second review</p>
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>



    //     </Row>
    // </Container>
//   )
// }

export default Testimonials