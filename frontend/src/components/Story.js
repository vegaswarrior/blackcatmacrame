import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import jenny from '../components/images/gennyAbout.jpg'
import heart_image from '../components/images/redHeart1.png'
import black_heart from '../components/images/blackheart.png'
import jenny2 from '../components/images/jenny2.jpg'
import "./products.css";

function Story() {
  return (
    <>
        <Container fluid className='about_me_container'>
          <Row>
            <Col lg={6} className="text-center left_about_col">
              <Row>
                <Col>
                    <h1 className='text-center about_h1'>All About Me</h1>
                </Col>
                <Row>
                <Col>
                    <i class="fa-solid fa-heart"></i>
                   
                      <img src={jenny} className="about_me_pic heart-shape" />
                    <i class="fa-solid fa-heart"></i>
                </Col>
                 <Row>
                   <Col> 
                   <i class="fa-solid fa-heart"></i>
                   </Col>
                 </Row>
                </Row>

              </Row>
            </Col>
            <Col lg={6} className=" text-center right_about_col">
              <Row>
                <Col>
                <p className='about_me_para'> Hi there 👋 and welcome to  Black Cat Macrame. Where I make Handmade Artisan Jewelry.
                                      My Name is Genny and my beloved Kitty Cat is the inspiration for my Name. I started Macrame long before I got my beautiful Black Cat, and now she is always right alongside me every day while I work. And so was born the name for my Business. Black Cat Macrame.
                                      I’ve been perfecting my craft for almost 7 years.  I believe my skills and style are extremely unique to the Macrame World. I was born in Georgia US and raised in Buffalo NY.</p>
        <p className='about_me_para'> I met my wonderful husband and got married in 2004. We both worked hard jobs to support ourselves while at the same time he was going to school to earn a master's degree. 
          After obtaining his degree, he was able to get a job that allowed us to move back to his home country In 🇹🇷 Turkey. 
          Whatever life is, the first and foremost is always family. My Husband’s Father had died, and at that same time we also found out his mother had been diagnosed with MS. My husband is the only child,.and  he felt in his heart we had to come, and so we did.  I have been going back and forth between seeing my family and living here. It’s been challenging being in a foreign land. But also very rewarding. I’ve gotten the opportunity to see what life is like on the other side of the world.</p>

          <p className='about_me_para'>  I was first introduced to Macrame by my mother-in-law Nihal, while  I was adjusting to life in a foreign country. My Mother-In-Law, who is quite crafty, taught Me all the basic knots, but from there I took off. I gobbled up all the information I could about Macrame.
          When I first started I was like wow how are these people all doing such amazing things with string?</p>

          <p className='about_me_para'>And that's when  I started watching YouTube tutorials.  As  I perfected all the basic skills, I realized there is so much more that can be done with string, time, my two hands, and my amazing kitty cat lurking around me.😁
          I started making these amazing things that I had not seen in the macrame world. I love colors and I love string! I'm very much like a cat 😻lol.
          So you keep going and you learn,  and put together knot after knot and keep tying knots... and then one day you realize... WOW, I’m pretty good at this!</p>

          <p className='about_me_para'>I have had the wonderful opportunity to make some custom pieces for some amazing clients that challenged me to be even more creative than I thought was possible.
          My Macrame journey is ever ongoing. I don’t think I can stop. As long as my hands let me, I’m going to keep pushing forward and I'm going to make more and more amazing pieces of art.</p>

          <p className='about_me_para'>I had dabbled in other crafts throughout my life, but I clung to macrame the most. It inspires me and brings joy to my life. I love my craft.</p>

          <p className='about_me_para'>Making art out of string is so fulfilling for me. Whatever challenges life throws at me, I know I can sit down pick up some string, and make something beautiful.
          I hope somehow I will inspire someone to know that whatever your circumstances in life, you should do whatever it is that makes you happy.</p>


       
          <p className='about_me_para'>I think my creations are beautiful, unique, and hopefully inspiring. I make them all with love and gratitude.</p>
          <p className='about_me_para'>I hope you enjoyed learning a little bit about the Women behind  Black Cat Macrame.</p>
          <p className='about_me_para'>Cheers! And Much Much ❤️</p>
          <p className='about_me_para'> Genny</p>
                </Col>
              </Row>
            </Col>
           
          </Row>
        </Container>
     </>
  )
}

export default Story

