import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "../css/customers.css";
import dp from "../assets/Ellipse 216@2x.png";
import { useState } from "react";
import right from "../assets/109617.svg";
import left from "../assets/109617-1.svg";

function Customers() {
  const [index, setIndex] = useState(0);
  return (
    <Container id="container">
      <Row id="row">
        <Col id="photo" md={6} sm={12}>
          <img src={dp} id="dp" alt="profile pic" />
        </Col>
        <Col id="review" md={6} sm={12}>
          <div id="customer-container">
            <h2 id="te1">SELECTED CUSTOMERS</h2>
            <h2 id="te2">Check what our client say about us</h2>
            <Carousel activeIndex={index} controls={false} indicators={false}>
              <Carousel.Item>
                <p id="p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ex turpis accumsan congue. Quisque blandit dui
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. In convallis porta mauris
                  non aliquam.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p id="p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ex turpis accumsan congue. Quisque blandit dui
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. In convallis porta mauris
                  non aliquam.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p id="p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ex turpis accumsan congue. Quisque blandit dui
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. In convallis porta mauris
                  non aliquam.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p id="p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ex turpis accumsan congue. Quisque blandit dui
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. In convallis porta mauris
                  non aliquam.
                </p>
              </Carousel.Item>
            </Carousel>
            <img
              src={left}
              id="left"
              alt="left"
              onClick={() => {
                if (index > 0) setIndex(index - 1);
                else setIndex(3);
              }}
            />
            <img
              src={right}
              id="right"
              alt="right"
              onClick={() => {
                if (index < 3) setIndex(index + 1);
                else setIndex(0);
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Customers;
