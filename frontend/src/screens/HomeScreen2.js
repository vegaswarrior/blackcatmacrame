import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './homescreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../components/Product'




function HomeScreen2() {
  return (
<>
  <Container fluid className='main'>    
    <h1 class="text-center jumboH1 text-info">Welcome To Black Cat Macrame</h1>
      <Row className="home_row">
        <Col className="d-flex justify-content-between align-items-end cat_col">
          <img src='../images/blackcat6.jpg'></img>
          <img src='../images/blackcat5.jpg'></img>
        </Col>
      </Row>
  </Container>

</>
  )
}

export default HomeScreen2