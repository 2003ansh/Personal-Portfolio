import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/port.png";
import projImg2 from "../assets/img/text.png";
import projImg3 from "../assets/img/health.png";
import projImg4 from "../assets/img/nirogh.png";
import projImg5 from "../assets/img/todo.png";
import projImg6 from "../assets/img/erp.png";
export default function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Showcasing my work",
      techStack: "React, react-bootstrap, AOS,emailjs",
      imgUrl: projImg1,
      github: "https://github.com/2003ansh/Personal-Portfolio",
      Url: "#",
    },
    {
      title: "Nirogh Company Official Website",
      description: "Design & Development",
      techStack: "React, Node.js, Express.js, MongoDB, JWT, Bcrypt,Emailjs",
      imgUrl: projImg4,
      github: "",
      Url: "https://nirogh.com/",
    },
    {
      title: "Text Analyser Webapp",
      description: "Analyse your text ar ease",
      techStack: "React, react-bootstrap, Particles.js,rapiAPI",
      imgUrl: projImg2,
      github: "https://github.com/2003ansh/TextAnalyzer",
      Url: "https://stunning-quokka-cd6165.netlify.app/",
    },
    {
      title: "HealthTracker WebApp",
      description:
        "Track your Calorie Intake and maintain a healthy lifestyle using diet plans",
      techStack:
        "React, Node.js, Express.js, MongoDB, JWT, Bcrypt, Material-UI, AOS,Deeplearning",
      imgUrl: projImg3,
      github:
        "https://github.com/2003ansh/Food-Recognition-and-Nutrition-Analysis",
      Url: "https://willowy-croissant-a0433b.netlify.app/",
    },

    {
      title: "Student ERP System",
      description:
        "Helps in managing the student data and their academic records",
      techStack: "React, Node.js, Express.js, MongoDB, JWT, Bcrypt",
      imgUrl: projImg6,
      github: "https://github.com/2003ansh/STL",
      Url: "#",
    },
    
    {
      title: "Todo App",
      description: "Manage your tasks with ease",
      techStack: "Html, CSS, Javascript",
      imgUrl: projImg5,
      github: "https://github.com/2003ansh/todolist",
      Url: "https://2003ansh.github.io/todolist/",
    },
  ];
  return (
    <>
      <Container fluid className="pt-5">
        <Container className="pt-4 " id="laptop">
          <Row>
            <Card
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingLeft: "10px",
                paddingRight: "50px",
                paddingBottom: "30px",
              }}
            >
              <Card.Body
                data-aos="slide-right"
                style={{
                  borderBottom: "2px solid #DCDCDC",
                  paddingBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "3rem",
                  }}
                  id="laptop"
                >
                  My Projects
                </span>

                <span
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "3rem",
                  }}
                  id="phone"
                  className="mt-5"
                >
                  <br />
                  My Projects
                </span>
              </Card.Body>
            </Card>

            {projects.map((project,key) => (
              <Col key={key} xs={12} sm={4}>
                <Card className="bg-dark text-white mb-3 shad" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <Card.Img src={project.imgUrl} alt="Card image" />
                  <Card.Body>
                    <Card.Title style={{ color: "#0D9276", fontSize: "26px" }}>
                      {project.title}
                    </Card.Title>
                    {/*#40A2E3
#FFF6E9
#BBE2EC
#0D9276 */}
                    <Card.Text style={{ paddingBottom: "10px" }}>
                      <span style={{ color: "#BBE2EC", fontSize: "21px" }}>
                        Description:
                      </span>{" "}
                      {project.description}
                    </Card.Text>
                    <Card.Text style={{}}>
                      <span style={{ color: "#637A9F", fontSize: "18px" }}>
                        Technology Used:
                      </span>{" "}
                      {project.techStack}
                    </Card.Text>
                    <div
                      className="pt-3"
                      style={{ display: "flex", gap: "20px" }}
                    >
                      <a href={project.github}>
                        <Button variant="outline-primary">Github Link</Button>
                      </a>
                      <a href={project.Url}>
                        <Button variant="outline-info">Click to See</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="pt-5 " id="phone">
          <Row>
            <Card
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingLeft: "10px",
                paddingRight: "50px",
                paddingBottom: "30px",
              }}
            >
              <Card.Body
                data-aos="slide-right"
                style={{
                  borderBottom: "2px solid #DCDCDC",
                  paddingBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "3rem",
                  }}
                  id="phone"
                  className="mt-0"
                >
                  My Projects
                </span>
              </Card.Body>
            </Card>

            {projects.map((project,key) => (
              <Col key={key} xs={12} sm={4} className="pb-4">
                <Card data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bg-dark text-white mb-3 shad">
                  <Card.Img src={project.imgUrl} alt="Card image" />
                  <Card.Body>
                    <Card.Title style={{ color: "#0D9276", fontSize: "25px" }}>
                      {project.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        
                        paddingBottom: "5px",
                        
                      }}
                    >
                     <span style={{
                        color: "#BBE2EC",
                       
                        fontSize: "20px",
                      }}>Description:</span> {project.description}
                    </Card.Text>
                    <Card.Text >
                     <span style={{ color: "#637A9F", fontSize: "18px" }}>Technology Used: </span> {project.techStack}
                    </Card.Text>
                    <div
                      className="pt-3"
                      style={{ display: "flex", gap: "20px" }}
                    >
                      <a href={project.github}>
                        <Button variant="outline-primary">Github Link</Button>
                      </a>
                      <a href={project.Url}>
                        <Button variant="outline-info">Click to See</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
