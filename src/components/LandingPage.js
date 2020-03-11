import React from "react";
import { Row,Col,Image, Container } from "react-bootstrap";
import portrait from "../assets/avtar.png";

const Landing = () => {
  return (
    
    <div>
      <Container fluid className="header-color kokeilu">
    <Row>
      <Col>
        <Image fluid className="avatar-img" src={portrait}  alt="Omakuva" />
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="banner-text">
          <h1 >Arto Halonen</h1>
          <hr />
            <p>HTML | CSS | Bootstrap | JavaScript | React | Ionic | Node.js | Firebase | MongoDB </p>
            <h2 >Contact Me</h2>
          
            <p>0406895550 &nbsp; |&nbsp;  <a href="mailto:c8haar00@students.oamk.fi" > @  &nbsp;</a>  |  
            <a className="LI-simple-link" href='https://fi.linkedin.com/in/arto-halonen?trk=profile-badge'> &nbsp;LinkedIn</a> </p>
          </div>
          
          </Col>
      </Row>
      </Container>
      
        </div>
  );
};

export default Landing;
