import React from 'react'
import { Container, Row, Col, Form,  } from 'react-bootstrap'
import '../screens/homescreen.css'

function Contact() {
  return (
    <>
        <Container fluid className='contact_background_image'>
       {/* <div className='contact_background_image'>
         
       </div> */}
    </Container>
    
    <Container className='form_container'>
      <Row>
        <Col>
          <div className='left_side_div'>
               <div className='mt-3'><span className='text-dark'><strong>Phone Number:</strong></span> <span>716-336-7973</span></div>
               <div className='mt-3'><span className='text-dark'><strong>E-Mail:</strong></span> <span>vegaswarrior888@gmail.com</span></div>
               <div className='mt-3'><span className='text-dark'><strong>Address:</strong></span> <span>Instabul Turkey</span></div>

               <h3 className='text-center text-primary '>Follow Us</h3>
 

          </div>
        </Col>
        <Col>
        <div className='right_side_div'>
           <h1>Contact Me</h1>
           <Form className='text-center'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="E-Mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
         </Form>
        </div>
        </Col>
      </Row>
    </Container>
    
    </>

  )
}

export default Contact