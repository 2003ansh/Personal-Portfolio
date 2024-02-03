import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/call.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="p-0 m-0 pt-1">
        <Row
          className="align-items-center p-0 m-0"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          {/* <MailchimpForm /> */}
          <Col
            xs={6}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "70px" }} src={logo} alt="Logo" />
              <span>Anshuman Nayak</span>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            className="text-center text-sm-end pt-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "end",
              
            }}
          >
            <div
              className="social-icon"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <a href="https://www.linkedin.com/in/anshuman-nayak-402a571b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="anshumannayak430@gmail.com">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="tel:+91 9178662419">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
