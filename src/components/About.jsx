import React from "react";
import Contact from "./pages/Contact1";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
// import simpleParallax from "simple-parallax-js";
// import { LuPhoneCall } from "react-icons/lu";
import anshuman from "../assets/img/anshuman.jpeg";
import edu from "../assets/img/edu.gif";
import exp from "../assets/img/exp.gif";
import cour from "../assets/img/cour.gif";
import hob from "../assets/img/hob.png";
import ring from "../assets/img/ring.gif";
import email from "../assets/img/email.gif";
import linkdien from "../assets/img/linkdien.gif"
import { HiMinus } from "react-icons/hi";
import ListGroup from "react-bootstrap/ListGroup";
export default function About() {
  const handleDownload = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file.
    const pdfPath =
      "https://drive.google.com/file/d/1WPW0RuvPdIHDJBIelbo9mzpckKfGzgfq/view?usp=sharing";

    // Create a temporary link element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired filename for the user
    link.download = "downloaded_file.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document after the download starts
    document.body.removeChild(link);
  };

 
  return (
    <>
      <Container fluid className="pt-5 about">
        <Container className="pt-4 ">
          <Row style={{}}>
            <Col xs={12} sm={9} style={{}}>
              <Card
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  paddingLeft: "10px",
                  paddingRight: "50px",
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
                    My Resume
                  </span>
                  
                  <span
                    style={{
                      fontWeight: "700",
                      color: "white",
                      fontSize: "2.8rem",
                    }}
                    id="phone"
                    className="mt-4"
                  >
                    <br />
                    My Resume
                  </span>
                </Card.Body>
              </Card>
              <br />
              <Card
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  paddingLeft: "10px",
                  paddingRight: "50px",
                }}
              >
                <Card.Body
                  data-aos="slide-right"
                  style={{ paddingBottom: "10px" }}
                >
                  <span
                    style={{
                      fontWeight: "400",
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    I enjoy every step of the design process, from discussion
                    and <br />
                    collaboration to concept and execution
                  </span>
                </Card.Body>
              </Card>
              <Button
                variant="outline-warning"
                className=""
                style={{
                  borderRadius: "50px",
                  border: "2px solid #ffc107",
                  color: "white",
                  fontWeight: "700",
                  transform: "translateX(20px)",

                }}
                onClick={handleDownload}
              >
                Download Resume
              </Button>
              <br />
              <Col xs={12} sm={3} id="phone" style={{ objectFit: "cover" }}>
                <br />
                <Image src={anshuman} roundedCircle />
              </Col>
              <Row>
                <Col xs={12} sm={6} style={{ backgroundColor: "transparent" }}>
                  <ListGroup style={{ backgroundColor: "transparent" }}>
                    <ListGroup.Item
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffc107",
                        fontWeight: "700",
                        fontSize: "2.5rem",
                        border: "none",
                      }}
                    >
                      <HiMinus style={{ fontSize: "2rem" }} />
                      Education
                    </ListGroup.Item>

                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                    >
                      {" "}
                      <Badge bg="white" square>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={edu}
                          alt=""
                        />
                      </Badge>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">BACHELOR OF TECHNOLOGY</div>
                        <span style={{fontSize:"0.9rem", color:"grey"}}>Silicon Institute of Technology,
                        <br />
                        At-Bhubaneswar,Patia,Odisha</span>
                      </div>
                      <span> 2021-2025</span>
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                    >
                      <Badge bg="white" square>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={edu}
                          alt=""
                        />
                      </Badge>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">HIGHER SECONDARY SCHOOL</div>
                        <span style={{fontSize:"0.9rem", color:"grey"}}>LR DAV Public School <br />
                        At-Cuttack,Odisha</span>
                        
                      </div>
                      <span>2019-2021</span>
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                    >
                      <Badge bg="white" square>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={edu}
                          alt=""
                        />
                      </Badge>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">SECONDARY SCHOOL</div>
                        <span style={{fontSize:"0.9rem", color:"grey"}}>SRI SATHYA SAI SCHOOL <br />
                        At-Cuttack,Odisha</span>
                        
                      </div>
                      <span>2007-2019</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col xs={12} sm={6} style={{ backgroundColor: "transparent" }}>
                  <ListGroup>
                    <ListGroup.Item
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffc107",
                        border: "none",
                        fontWeight: "700",
                        fontSize: "2.5rem",
                      }}
                    >
                      <HiMinus style={{ fontSize: "2rem" }} />
                      Experience
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                    >
                      {" "}
                      <Badge bg="white" square>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={exp}
                          alt=""
                        />
                      </Badge>
                      <div className="ms-2 me-auto">
                        <a href="https://www.nirogh.com/" style={{color:"white"}}>
                        <div className="fw-bold">WEB DEVELOPER INTERN</div>
                        <span style={{fontSize:"0.9rem", color:"grey"}}>At-Axxin Diagnostics</span>
                        </a>
                      </div>
                      <span>MAY/2023-Running</span>
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                    >
                      <Badge bg="white" square>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={exp}
                          alt=""
                        />
                      </Badge>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">APP DEVELOPER</div>
                        <span style={{fontSize:"0.9rem", color:"grey"}}>At-NIROGH GLOBAL</span>
                        
                      </div>
                      <span>MAR/2023-MAY/2023</span>
                    </ListGroup.Item>
                    <br />
                  </ListGroup>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={3} id="laptop" style={{ objectFit: "cover" }}>
              <br />
              <Image src={anshuman} roundedCircle />
            </Col>

            <Col xs={12} sm={6} style={{ backgroundColor: "transparent" }}>
              <ListGroup>
                <ListGroup.Item
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffc107",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "2.5rem",
                  }}
                >
                  <HiMinus style={{ fontSize: "2rem" }} />
                  Certification
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={cour}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">WEB DEVELOPMENT</div>
                    <span style={{fontSize:"0.9rem", color:"grey"}}>At-UDEMY</span>
                    
                  </div>
                  <span>FEB/2022</span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={cour}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">MACHINE LEARNING</div>
                    <span style={{fontSize:"0.9rem", color:"grey"}}>At-SILICON INSTITUTE OF TECHNOLOGY</span>
                  </div>
                  <span>SEP/2022</span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={cour}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">ETHICAL HACKING</div>
                    <span style={{fontSize:"0.9rem", color:"grey"}}>At-NPTEL</span>
                    
                  </div>
                  <span>OCT/2023</span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={cour}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">UI/UX DESINING</div>
                    <span style={{fontSize:"0.9rem", color:"grey"}}>At-UDEMY</span>
                  </div>
                  <span>SEP/2023</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} sm={6} style={{ backgroundColor: "transparent" }}>
              <ListGroup>
                <ListGroup.Item
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffc107",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "2.5rem",
                  }}
                >
                  <HiMinus style={{ fontSize: "2rem" }} />
                  Hobbies
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={hob}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">EVENT MANAGEMENT</div>
                  </div>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={hob}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">PHOTOGRAPHY</div>
                  </div>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={hob}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">TRAVELLING</div>
                  </div>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge bg="white" square>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={hob}
                      alt=""
                    />
                  </Badge>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">EDITING</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} sm={12} style={{ backgroundColor: "" }}>
              <Container className="pt-5 pb-0 mb-0" fluid style={{display:"flex",justifyContent:"center"}}>
              <span style={{
                  backgroundColor: "",
                  color: "#ffc107",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "2rem",
                  textAlign:"center"
                }}>Get in Touch</span>
              </Container>
                
              <Container className="pt-0 mt-0" fluid style={{display:"flex",justifyContent:"center"}}>
              <span
                style={{
                  backgroundColor: "",
                  color: "white",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "3.5rem",
                  textAlign:"center"
                }}
              >
                
                Connect with Me with <br /> Confidence
              </span>
              </Container>
            </Col>
            
            <Col xs={12} sm={6} style={{ backgroundColor: "" }}>
              <br />
              <br />
            <ListGroup className="pt-1">
               
            <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold" id="laptop" style={{fontSize:"1.4rem",color:"grey",fontWeight:"200"}}>Please fill out the form on this section <br /> to contact with me. Or call between <br /> 9:00 a.m. and 8:00 p.m. </div>
                    <div className="fw-bold" id="phone" style={{fontSize:"1.4rem",color:"grey",fontWeight:"200"}}>Please fill out the form on this section  to contact with me. Or call between  9:00 a.m. and 8:00 p.m. </div>
                  </div>
                  
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center gap-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge square  bg="white"  >
                  {/* <LuPhoneCall style={{fontSize:"3rem",color:"violet"}} /> */}
                  <img src={ring} alt="" />
                  </Badge>
                  
                  <div className="ms-2 me-auto d-flex justify-content-start align-items-start flex-column ">
                  <span style={{fontSize:"1rem"}}>Call Me</span>
                    <div className="fw-bold d-flex justify-content-center align-items-center" >
                      <a
                        href="tel:+91 637 020 2497"
                        style={{ color: "white",fontSize:"1.8rem" }}
                      >
                        +91 9178662419
                      </a>
                    </div>
                  </div>
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center gap-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge square  bg="white"  >
                  {/* <LuPhoneCall style={{fontSize:"3rem",color:"violet"}} /> */}
                  <img src={email} alt="" />
                  </Badge>
                  
                  <div className="ms-2 me-auto d-flex justify-content-start align-items-start flex-column ">
                  <span style={{fontSize:"1rem"}}>Mail Me</span>
                    <div className="fw-bold d-flex justify-content-center align-items-center" >
                      <a
                        href="mailto:anshumannayak430@gmail.com "
                        style={{ color: "white",fontSize:"1.8rem" }}
                        id="phone"
                      >
                        anshumannayak <br />430@gmail.com
                      </a>
                      <a
                        href="mailto:anshumannayak430@gmail.com "
                        style={{ color: "white",fontSize:"1.8rem" }}
                        id="laptop"
                      >
                        anshumannayak430@gmail.com
                      </a>
                    </div>
                  </div>
                </ListGroup.Item>
<br />
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center gap-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  <Badge square  bg="white"  >
                  {/* <LuPhoneCall style={{fontSize:"3rem",color:"violet"}} /> */}
                  <img src={linkdien} alt="" />
                  </Badge>
                  
                  <div className="ms-2 me-auto d-flex justify-content-start align-items-start flex-column ">
                  <span style={{fontSize:"1rem"}}>Reach Me</span>
                    <div className="fw-bold d-flex justify-content-center align-items-center" >
                      <a
                        href="https://www.linkedin.com/in/anshuman-nayak-402a571b9/"
                        style={{ color: "white",fontSize:"1.8rem" }}
                      >
                        anshuman-nayak
                      </a>
                    </div>
                  </div>
                </ListGroup.Item>
                
                
              </ListGroup>

            </Col>

            <Col xs={12} sm={6} style={{ backgroundColor: "" }}>
              <br />
              <br />
            <Contact />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
