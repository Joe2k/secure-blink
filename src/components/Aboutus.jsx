import { Jumbotron, Button } from "react-bootstrap";
import "../css/aboutus.css";
import aboutPic from "../assets/Group 35699.svg";
import getStart from "../assets/arrow-down-sign-to-navigate.svg";
import dots from "../assets/Group 35650.svg";

function Aboutus() {
  return (
    <div>
      <Jumbotron fluid id="about">
        <img id="aboutPic" src={aboutPic} alt="About Us" />
        <div id="about-container">
          <h2 id="te1">
            <span id="te3"></span>ABOUT US
          </h2>
          <h2 id="te2">Great Digital Agency</h2>
          <p id="p1">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.
          </p>
          <p id="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
            odio, turpis accumsan congue. Quisque blandit dui Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In convallis porta mauris non aliquam.
          </p>
          <Button
            style={{ color: "#0e77ff" }}
            id="button"
            size="lg"
            variant="primary"
          >
            Get Started <img id="svg" src={getStart} alt="Get Started" />
            <img src={getStart} alt="Get Started" />
          </Button>
        </div>
        <img id="dots" src={dots} alt="dots" />
      </Jumbotron>
    </div>
  );
}

export default Aboutus;
