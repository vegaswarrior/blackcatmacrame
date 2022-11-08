import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import jenny from '../components/images/gennyAbout.jpg'
import "./products.css";

function Story() {
  return (
     <Container fluid className='about_me_container'>
        <Row>
          <h1 className='text-center'>All About Me</h1>
        </Row>
        <Row className='d-flex justify-content-center '>
           <img src={jenny} id="about_me_pic" />
        </Row>
        <Row>
          <Col>
              <p className='about_me_para text-center'><span className='greetings'><strong>Greetings and Welcome to Black Cat Macrame! Where I create handmade artisan jewelry.</strong></span></p>
              
                         <p className='about_me_para'>My name is Genny. I’m the proud owner of Black Cat Macrame. The Jewelry Maker, The Photographer, The Writer, and the Poster for all my Social Networks. I’m a small business with a big heart.❤️</p>
                          <p className='about_me_para'>What is macrame?</p>
                          <p className='about_me_para'><span className='greetings'>MACRAME</span> is The technique I utilize to create my jewelry that has been practiced for centuries by various ethnic groups. This craft uses different types of knots and threads to create intricate patterns and forms. Macrame jewelry is famous for being very durable and long-lasting.</p>
                          <p className='about_me_para'>✦ Spiritual jewelry that combines the ancient macramé technique and the magical power of healing crystals.</p>
                          <p className='about_me_para'>✦ Sacred Geometry & Spiritual Symbolism.</p>
                          <p className='about_me_para'>✦ Wearable art that respects the environment and all living beings.</p>
                          <p className='about_me_para'>✦ Unique pieces that will enhance your inner beauty and strength. I offer handmade gifts for free spirits, gypsy souls, and bohemian wild hearts on a spiritual journey.</p>
                          <p className='about_me_para'>✦ Handcrafted intuitively, with love and intention, to bring harmony and happiness to its future owner.</p>
                          <p className='about_me_para'>I can create custom pieces upon request, so if you have questions or would like to order something, please contact me.
                            It has been a very rewarding experience for me to create some pieces for some amazing clients who have challenged me to grow as an artist. So I'm sure I can bring your vision to life.</p>
                          <p className='about_me_para'><span className='greetings'>This is my journey.</span>
                            Macrame first caught my attention while I was adjusting to life abroad . I learned all the basic knots from my mother-in-law, who is also quite crafty, but I wanted to learn more intricate designs and learn more about macrame. And that's when I started watching YouTube tutorials. As I perfected all the basic skills, I started to hone my craft and create my own style of design.</p>
                          <p className='about_me_para'>My unique style and years of experience have allowed me to perfect my craft. My macrame journey is ever-continuous. As long as my hands let me, I’m determined to keep pushing forward and I'm excited to create more and more amazing pieces of art. Making macrame inspires me and brings joy to my life.</p>
                          <p className='about_me_para'>Making art out of strings is a very fulfilling experience for me. Despite whatever challenges life throws at me, I am confident that I can sit down, pick up some strings, and build something of value. I believe that my creations are beautiful, distinctive, and hopefully inspirational.
                              Each one is made with love and gratitude. Please accept my sincere thanks for stopping by and I hope you enjoy my creations.</p>
                          <p className='about_me_para'>Cheers Genny💗</p>
          </Col>
        </Row>
     </Container>
  )
}

export default Story




  


