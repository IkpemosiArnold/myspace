import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jetAge from "../assets/JetAgeSolutions.png";
import theosis from "../assets/TheosisInvite.png";
import lvmedia from "../assets/LVMEDIA.png";

const Home = () => {
  return (
    <div className="App">
      <Container>
        <h2>
          Hi, I'm Ikpemosi.{" "}
          <span className="subheading">
            On most days I believe there's nothing I can't do.
          </span>
        </h2>

        <p className="profile-summary">
          Currently, I write code and help businesses scale their operations by
          contributing in different capacities; strategy, stakeholder management
          etc., all termed under "Product Management". Previously, I worked as a
          Projects and Programs Manager at a consulting firm focused on Climate
          Change and Sustainable Development.
        </p>
        <p className="profile-summary">
          {" "}
          Connect with me on{" "}
          <span className="contact-link">
            <a href="https://www.linkedin.com/in/arnold-ikpemosi/">Linkedin</a>
          </span>{" "}
          or send me an{" "}
          <span className="contact-link">
            <a href="mailto:IkpemosiArnold@outlook.com">email</a>
          </span>
          .
        </p>
        <h3>Recent Work</h3>
        <div className="work-section">
          <div className="work-boxes">
            <a href="http://jetage.org/">
              {" "}
              <img
                className="work-image"
                src={jetAge}
                alt="screenshot of jetage website"
                loading="lazy"
              />
            </a>
            <p>WP, Design</p>
          </div>

          <div className="work-boxes">
            <a href="https://lvmedia.ng/">
              <img
                className="work-image"
                src={lvmedia}
                alt="screenshot of lvmedia landing page"
                loading="lazy"
              />
            </a>
            <p>ReactJs, NodeJs, MongoDB</p>
          </div>
          <div className="work-boxes">
            <a href="https://theoverse.netlify.app/">
              <img
                className="work-image"
                src={theosis}
                alt="screenshot of theosis landing page"
                loading="lazy"
              />
            </a>
            <p>React, NodeJs</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
