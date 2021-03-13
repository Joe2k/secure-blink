import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../css/contact.css";
import imgContact from "../assets/Group 35686.svg";

function Contact() {
  return (
    <div>
      <Container fluid id="contact" className="tag">
        <Row id="row">
          <Col id="photo-contact" class="triangle" md={6} sm={0}>
            <img src={imgContact} id="imgContact" alt="imgContact" />
          </Col>
          <Col id="form" md={6} sm={12}>
            <div id="overnow"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
