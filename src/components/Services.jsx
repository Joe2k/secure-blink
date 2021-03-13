import { Jumbotron, Button } from "react-bootstrap";
import "../css/services.css";
import tick from "../assets/Group 35604.svg";
import serImg from "../assets/Group 35621.svg";
import arrow from "../assets/Group 35624.svg";

function Services() {
  return (
    <div>
      <Jumbotron fluid id="about" className="tag">
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
        <div id="service-container">
          <h2 id="te1">OUR SERVICES</h2>

          <h2 id="te2">Transforming your ideas into Reality</h2>
          <div class="service-box">Web&nbsp;Development</div>
          <div class="service-box">Mobile&nbsp;Development</div>
          <div class="service-box">UI/UX&nbsp;Designing</div>
          <div class="service-box">Branding</div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Services;
