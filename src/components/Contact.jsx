import {
  Jumbotron,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "../css/contact.css";
import imgContact from "../assets/Group 35686.svg";
import getStart from "../assets/arrow-down-sign-to-navigate-9.svg";
import React, { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    number: "",
    subject: "",
    message: "",
    check: false,
  });
  const handleChange = (event) => {
    console.log(event.target.name);
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value || event.target.checked,
    }));
  };
  return (
    <div>
      <Container fluid id="contact" className="tag">
        <Row id="row">
          <Col id="photo-contact" class="triangle" md={6} sm={0}>
            <img src={imgContact} id="imgContact" alt="imgContact" />
          </Col>
          <Col id="form" md={6} sm={12}>
            <div id="overnow">
              <h1 id="ser4">Send Us message</h1>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Your Email*"
                    id="forms"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Your Name*"
                    id="forms"
                    aria-label="Username"
                    name="name"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    value={values.name}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Phone Number*"
                    id="forms"
                    name="number"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    value={values.number}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Subject"
                    id="forms"
                    name="subject"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    value={values.subject}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Your Message"
                    name="message"
                    id="forms"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                    value={values.message}
                  />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    id="check"
                    name="check"
                    checked={values.check}
                    onChange={handleChange}
                    label="By sending this message, you confirm that you have read and agreed to our privacy-policy."
                  />
                </Form.Group>

                <Button
                  style={{ color: "white" }}
                  id="button1"
                  size="lg"
                  variant="primary"
                  onClick={() => console.log(values)}
                >
                  Get Started <img id="svg" src={getStart} alt="Get Started" />
                  <img src={getStart} alt="Get Started" />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
