import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid className='footer_container'> 
        <Row>
          <Col className='text-center py-3 text-info mr-4'>
          <ul className='list-unstyled'>
            <LinkContainer to="/">
                <li><button className='footerButtons'>Home</button></li>
             </LinkContainer>
            <LinkContainer to="story">
                <li><button className='footerButtons'>My Story</button></li>
             </LinkContainer>
            <LinkContainer to="products">
                <li><button className='footerButtons'>Products</button></li>
             </LinkContainer>
            <LinkContainer to="contact">
                <li><button className='footerButtons'>Contact Me</button></li>
             </LinkContainer>
             
  

            </ul>
          </Col>
           <Col>
               <h1 className='text-center text-info'>This is where the center image will be....</h1>
           </Col>
          <Col className='text-center py-3 text-info'>
            <ul className='list-unstyled'>
              <li>
                  <a href="https://www.facebook.com/MacrameBlackCat"><i className="fa-brands fa-facebook footer-icons"></i><span className='text-info'>facebook</span></a>
              </li>
              <li>
                  <a href="https://www.instagram.com/macrameblackcat/?fbclid=IwAR0vuZkalF3G0wG7Mr4G2GlLZSHpwUxf_ZMAIFZ8op5ApSLYCU76R8qWNfU"><i className="fa-brands fa-instagram footer-icons"></i><span className='text-info'>instagram</span></a>
              </li>
              <li className=''>
                  <a href="https://www.etsy.com/shop/MacrameBlackCat?fbclid=IwAR1A5vjBmlsHJOoa8k1dC6WVWdSjjd6Q9c-8mJxZRn4gMajTdp7ahSZBKjI"><i className="fa-brands fa-etsy footer-icons"></i><span className='text-info'>Etsy</span></a>
              </li>
              <li>
                  <a href="https://www.pinterest.com/blackcatmacrame/?invite_code=96f1625f44a14a52a93506da06236db1&sender=340162715513308657"><i className="fa-brands fa-pinterest footer-icons"></i><span className='text-info'>pinterest</span></a>
              </li>
            </ul>
          </Col>



          
        </Row>
      </Container>
      <div className='text-center py-3 copyRight'>Copyright &copy; Black Cat Macrame</div>
    </footer>
  )
}

export default Footer

