import React, {useState, useRef} from "react";
import { Row, Col, Image, Container, Button, Overlay, Tooltip,  } from "react-bootstrap";
import portrait from "../assets/avtar.png";
import { FaLinkedin } from "react-icons/fa";
import { IoIosAt, IoIosPhonePortrait } from "react-icons/io";


const Landing = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <Container fluid className="header-color kokeilu">
        <Row>
          <Col>
            <Image fluid className="avatar-img" src={portrait} alt="Omakuva" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="banner-text">
              <h1>Arto Halonen</h1>
              <hr />
              <p>
                HTML | CSS | Bootstrap | JavaScript | React | Ionic | Node.js |
                Firebase | MongoDB{" "}
              </p>
              <h2>Contact Me</h2>
              <p className="puhelin" >
              <a  ref={target} onClick={() => setShow(!show)}><IoIosPhonePortrait size={56} /></a>
              <Overlay target={target.current} show={show} placement="right" >
              {props => (
          <Tooltip size={56} id="overlay-example" {...props}>
            +358406895550
          </Tooltip>
        )}
      </Overlay>
                |&nbsp;{" "}
                <a href="mailto:c8haar00@students.oamk.fi"> <IoIosAt size={42}   /> &nbsp;</a> |
                <a target="_blank"
                  className="LI-simple-link"
                  href="https://fi.linkedin.com/in/arto-halonen?trk=profile-badge"
                >
                  {" "}
                 <FaLinkedin size={42} />
                </a>{" "}
                </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
