import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import header from "../../assets/img/newbg.svg";
import bg1 from "../../assets/img/bg1.svg";
export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="laptopbanner">
            <div>
              <span className="tagline" data-aos="fade-down-right" data-aos-duration="1000">Welcome to my Portfolio</span>
              <h1 style={{ fontSize: '3.6rem' }} data-aos="zoom-in" data-aos-duration="2000">
                {" "}
                Hi! I'm Anshuman a <br />{" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `WEB DEVELOPER`,
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    `WEB DESIGNER`,
                    1000,
                    `UI/UX DESIGNER`,
                    1000,
                    `BACKEND DEVELOPER`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  //   
                  repeat={Infinity}
                />
              </h1>
              <p data-aos="slide-right" data-aos-duration="1000">
              I am a qualified and professional full-stack web developer with
              two-year track record in Database Administration and Website Design. Adept at creating efficient web applications, I bring creativity and analytical prowess to my work. As a team player with a keen eye for detail, I consistently exceed project expectations. Proficient in various programming languages and frameworks, I excel in dynamic environments.”
              </p>
              <button  onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>

          <Col xs={12} md={6} xl={7} className="phonebanner">
            <div>
              <br />
              <br />
              <span className="tagline " data-aos="slide-down" data-aos-duration="1000">Welcome to my Portfolio</span>
              <h2 id="any" data-aos="zoom-in" data-aos-duration="2000" style={{ fontSize: '2.1rem', display: 'inline-block',fontWeight:"700" }}>
                {" "}
                Hi! I'm Anshuman a <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `WEB DEVELOPER`,
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    `WEB DESIGNER`,
                    1000,
                    `UI/UX DESIGNER`,
                    1000,
                    `BACKEND DEVELOPER`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                    
                  repeat={Infinity}
                />
              </h2>
            
              <p data-aos="slide-left" data-aos-duration="1000" style={{ fontSize: '1rem', display: 'inline-block' }}>
              I am a qualified and professional full-stack web developer with
              two-year track record in Database Administration and Website Design. Adept at creating efficient web applications, I bring creativity and analytical prowess to my work. As a team player with a keen eye for detail, I consistently exceed project expectations. Proficient in various programming languages and frameworks, I excel in dynamic environments.”
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5} className="pt-0">
            <div data-aos="zoom-in" data-aos-duration="2000" className="pt-0" >
              <img  src={bg1}  alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
