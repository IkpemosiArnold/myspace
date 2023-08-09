import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import jetAge from "../assets/JetAgeSolutions.png";
import theosis from "../assets/TheosisInvite.png";
import lvmedia from "../assets/LVMEDIA.png";
import magnuminsight from "../assets/MangnumInsight.png";
import fatmin from "../assets/Fatmin.png";

const Home = () => {
  const [today, setToday] = useState("");
  useEffect(() => {
    const dayOfWeekName = new Date().toLocaleString("default", {
      weekday: "long",
    });
    setToday(dayOfWeekName);
  }, []);
  return (
    <div className="App">
      <Container>
        <nav className="navbar">
          <h2>Ikpemosi Arnold</h2>

          <p className="work-status">
            <span className="green-glow"> </span>Open to work
          </p>

          <a href="mailto:IkpemosiArnold@outlook.com">Send me an email</a>
        </nav>
        <h1>
          Software Engineer <br></br>
        </h1>

        <p className="profile-summary">
          Currently, I write code and help businesses scale their operations by
          figuring out what their customers really need and making sure the
          product meets these needs seamlessly.
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

        <h3>Projects</h3>
        <div className="work-section">
          <div className="work-boxes">
            <a href="https://lvmedia.ng/">
              <img
                className="work-image"
                src={lvmedia}
                alt="screenshot of lvmedia landing page"
                loading="lazy"
              />
            </a>
            <p className="work-desc">
              Frontend and Backend for LVmedia.ng, B2C platform that allows
              users to purchase social media services<br></br>
              <span className="subheading">ReactJs, NodeJs, MongoDB</span>
            </p>
          </div>
          <div className="work-boxes">
            <a href="https://magnuminsight.com">
              <img
                className="work-image"
                src={magnuminsight}
                alt="screenshot of MagnumInsight Login page"
                loading="lazy"
              />
            </a>
            <p className="work-desc">
              Frontend for MagnumInsight, a Canadian Immigration Consulting
              Company. Focus especially on User Dashboard<br></br>
              <span className="subheading">ReactJs, NodeJs</span>
            </p>
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
            <p className="work-desc">
              Frontend and Backend for Theosis, An AI powered game <br></br>
              <span className="subheading">Svelte, Python, NodeJs</span>
            </p>
          </div>
          <div className="work-boxes">
            <a href="#">
              {" "}
              <img
                className="work-image"
                src={jetAge}
                alt="screenshot of jetage website"
                loading="lazy"
              />
            </a>
            <p className="work-desc">
              Website for Jetage, Renewable Energy Consulting Company <br></br>
              <span className="subheading">Wordpress</span>
            </p>
          </div>
        </div>
        <h3>Toolkit</h3>
        <span className="subheading">Languages, Platforms and tools</span>
        <p className="profile-summary">
          Svelte, NodeJs, React, HTML, JavaScript, TypeScript, Python, Framer,
          Wordpress, Webflow{" "}
        </p>
        <footer>Have a wonderful {today} 🤗</footer>
      </Container>
    </div>
  );
};

export default Home;
