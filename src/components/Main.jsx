import { Jumbotron, Button } from "react-bootstrap";
import "../css/main.css";
import getStart from "../assets/arrow-down-sign-to-navigate-10.svg";
import rocketTriangle from "../assets/Path 37500.svg";
import triangleGreenBg from "../assets/Path 37502.svg";
import t1 from "../assets/Path 37490.svg";
import t2 from "../assets/Path 37489.svg";
import t3 from "../assets/Path 37488.svg";
import t4 from "../assets/Path 37458.svg";
import t5 from "../assets/Path 37486.svg";
import t6 from "../assets/Path 37459.svg";
import t7 from "../assets/Path 37482.svg";

function Main() {
  return (
    <div>
      <Jumbotron fluid id="heading" className="tag">
        <div id="heading-container">
          <h1 id="heading-text">
            Web&nbsp;Design
            <br />
            Web&nbsp;Development
            <br />
            by&nbsp;SB
          </h1>
          <p id="subheading">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.
          </p>
          <Button id="button" size="lg" variant="primary">
            Get Started <img id="svg" src={getStart} alt="Get Started" />
            <img src={getStart} alt="Get Started" />
          </Button>
        </div>
        <img
          class="triangle"
          id="rocketTriangle"
          src={rocketTriangle}
          alt="Rocket"
        />
        <img
          class="triangle"
          id="triangleGreenBg"
          src={triangleGreenBg}
          alt="Rocket"
        />
        <img class="triangle" id="t1" src={t1} alt="Rocket" />
        <img class="triangle" id="t2" src={t2} alt="Rocket" />
        <img class="triangle" id="t3" src={t3} alt="Rocket" />
        <img class="triangle" id="t4" src={t4} alt="Rocket" />
        <img class="triangle" id="t5" src={t5} alt="Rocket" />
        <img class="triangle" id="t6" src={t6} alt="Rocket" />
        <img class="triangle" id="t7" src={t7} alt="Rocket" />
      </Jumbotron>
    </div>
  );
}

export default Main;
