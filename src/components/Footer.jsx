import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="p-0 m-0">
        <Row className="align-items-center p-0 m-0"  style={{display:"flex",flexDirection:"row",justifyContent:"end", alignItems:"end"}}>
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} style={{display:"flex",justifyContent:"start", alignItems:"end"}}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end pt-2" style={{display:"flex",flexDirection:"column",justifyContent:"start", alignItems:"end",}}>
            <div className="social-icon" style={{display:"flex",flexDirection:"row",justifyContent:"start", alignItems:"end"}}>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
