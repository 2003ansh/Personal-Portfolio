import React from 'react'
import {Card, Col,Container,Row} from "react-bootstrap"
import projImg1 from "../assets/img/port.png";
import projImg2 from "../assets/img/text.png";
import projImg3 from "../assets/img/health.png";
import projImg4 from "../assets/img/nirogh.png";
import projImg5 from "../assets/img/todo.png";
import projImg6 from "../assets/img/erp.png";
export default function Project() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ]
  return (
    <>
    <Container fluid className='pt-5'>
    <Container className="pt-4 " id='laptop'>
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
        
          {
            projects.map((project) => (
              <Col xs={12} sm={4}>
              <Card className="bg-dark text-white mb-3">
              <Card.Img  src={project.imgUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
            </Col>))
           
          }
           

       
       
    </Row>
    </Container>



    <Container className="pt-0 " id='phone'>
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
        
          {
            projects.map((project) => (
              <Col xs={12} sm={4}>
              <Card className="bg-dark text-white mb-3">
              <Card.Img  src={project.imgUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>
            </Col>))
           
          }
           

       
       
    </Row>
    </Container>
    </Container>
    </>
  )
}
