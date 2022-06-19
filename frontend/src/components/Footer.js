import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container fluid className='footer_container mt-5'> 
        <Row>
          <Col className='text-center py-3 text-info'>
            <ul>
              <li><a href='/' />Home</li>
              <li>Collectiosn</li>
              <li>About</li>
              <li>Contant</li>
            </ul>
          </Col>
          <Col className='text-center py-3 text-info'>Col 2</Col>
          <Col className='text-center py-3 text-info'>Col 3</Col>
          <Col className='text-center py-3 text-info'>Copyright &copy; Black Cat Macrame</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

