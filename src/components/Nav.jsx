import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/call.png";
import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
export default function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled pt-0" : " pt-0"}>
        <Container className="pt-1">
          <Navbar.Brand href="/">
            <img style={{width:"50px"}} src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{gap:"15px"}}>
              <Link
                to="/"
                style={{ textDecoration: "none",color: "white",fontSize:"20px" }}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Link>
              
                <Link
                  to="/about"
                  style={{ textDecoration: "none",color: "white",fontSize:"20px" }}
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  About
                </Link>
              
              
              <Link
                to="/projects"
                style={{ textDecoration: "none",color: "white",fontSize:"20px" }}
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/anshuman-nayak-402a571b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="Icon" /></a>
              <a href="anshumannayak430@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="tel:+91 9178662419"><img src={navIcon3} alt="Icon" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
