import { Jumbotron, Button } from "react-bootstrap";
import "../css/services.css";
import tick from "../assets/Group 35604.svg";
import serImg from "../assets/Group 35621.svg";

function Services() {
  return (
    <div>
      <Jumbotron fluid id="about">
        <div id="rectangle"></div>
        <div id="over">
          <img src={serImg} id="serImg" alt="service" />
          <h1 id="ser1">UI/UX Designing</h1>
          <p id="ser2">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam
            ex odio, is the turpis accu msan congue euisque blandit dui Pelle
            ntesque habitant.
          </p>

          <p id="ser3">
            <img src={tick} id="tick" alt="tick" />
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
          </p>
          <p id="ser3">
            <img src={tick} id="tick" alt="tick" />
            Lorem ipsum dolor sit amet,
          </p>
          <p id="ser3">
            <img src={tick} id="tick" alt="tick" />
            conse ctetur adipi scing elit.
          </p>
          <p id="ser3">
            <img src={tick} id="tick" alt="tick" />
            Lorem ipsum dolor sit amet, conse ctetur
          </p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Services;
