import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../screens/homescreen.css'
import ContactImage from '../components/images/contactMe1.png'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
    <Container fluid className='contact_container'>
       {/* <img src={ContactImage} className="contact_background_image"></img> */}
    </Container>
    
    <Container>
      <Row>
        <Col>
          <h1 className='text-center'>Fill Out Form to Contact Me</h1>
            <ContactForm />
        </Col>
      </Row>
    </Container>
    
    </>

  )
}

export default Contact


          {/* <div className='left_side_div'>
               <div className='mt-3'><span className='text-dark'><strong>Phone Number:</strong></span> <span>716-336-7973</span></div>
               <div className='mt-3'><span className='text-dark'><strong>E-Mail:</strong></span> <span>vegaswarrior888@gmail.com</span></div>
               <div className='mt-3'><span className='text-dark'><strong>Address:</strong></span> <span>Instabul Turkey</span></div>

               <h3 className='text-center text-primary '>Follow Us</h3>
 

          </div> */}


                  {/* <div className='right_side_div'>
          
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
        </div> */}