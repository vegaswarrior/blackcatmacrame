import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap'
import '../screens/homescreen.css'

function ContactForm() {

  return (


    <Container className='form_container'>
      <Row>
          <Form  action="https://formspree.io/f/xoqbakor" method="POST"  className='form_1'>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control  className="inputFields"  name="firstName" placeholder="Enter Name" />
            </Form.Group>            
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Phone Number</Form.Label> */}
              <Form.Control  name="Phone Number" type='number' placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3" name="email" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3"  controlId="formBasicPassword">
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control  className="messageInput" name="message" placeholder="Enter Message Here!" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-5'>
              Submit
            </Button>
          </Form>

      </Row>
    </Container>

  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;