import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/port.png";
import projImg2 from "../../assets/img/text.png";
import projImg3 from "../../assets/img/health.png";
import projImg4 from "../../assets/img/nirogh.png";
import projImg5 from "../../assets/img/todo.png";
import projImg6 from "../../assets/img/erp.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import intern1 from "../../assets/img/internship1.png";
// import 'animate.css';../
import TrackVisibility from "react-on-screen";
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Showcasing my work",
      imgUrl: projImg1,
    },
    {
      title: "Text Analyser",
      description: "Analyse your text ar ease",
      imgUrl: projImg2,
    },
    {
      title: "HealthTracker Website",
      description: "Track your Calorie Intake",
      imgUrl: projImg3,
    },
    {
      title: "Nirogh Company Official Website",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Todo App",
      description: "Manage your tasks with ease",
      imgUrl: projImg5,
    },
  ];
  return (
    <>
      <section
        className="project"
        id="projects"
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Experience</h2>
                    <p style={{ textAlign: "left" }}>
                      In the ‘Experience’ section, you’ll find a detailed
                      account of my professional journey as a Full-Stack Web
                      Developer. This section showcases my ability to apply
                      technical skills, creativity, and analytical thinking in
                      real-world scenarios.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Internships</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Certification</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                            <Col size={12} sm={6} md={4}>
                              <div
                                style={{
                                  height: "250px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Link to={"/projects"}>
                                  <div
                                    className="p-0"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <h3>
                                      Click to <br /> know more{" "}
                                      <ArrowRightCircle></ArrowRightCircle>
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            <Col size={12} sm={6} md={4}>
                              <div className="proj-imgbx">
                                <img src={intern1} />
                                <div className="proj-txtx">
                                  <h4>Web Developer Intern</h4>
                                  <span>At-Axxin Diagnostics</span>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  );
}
