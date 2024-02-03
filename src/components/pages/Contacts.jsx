import React, { useState } from "react";
import "./contact.css";
import img from "../../assets/img/contact-img.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);

  const submitForm = (e) => {
    setSpinner(true);
    e.preventDefault();
    sendmail();
  };

const sendmail = () => {
  var params = {
    from_name: name,
    from_number: number,
    email_id: email,
    message: message,
    
  }
  emailjs.send("service_i72pbvm","template_j9b39pg", params).then(function (response) {
    console.log('SUCCESS!', response.status, response.text);
    setSpinner(false);
    setEmail("");
    setName("");
    setNumber("");
    setMessage("");
    alert("Your message has been sent successfully");
  }, function (error) {
    console.log('FAILED...', error);
  });
}

  const handlechange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <>
      <Container id="contact" fluid className="pt-5 ">
        <Container>
        <Col xs={12} sm={12} style={{ backgroundColor: "" }}>
              <Container className=" pb-0 mb-0" fluid style={{display:"flex",justifyContent:"center"}}>
              <span style={{
                  backgroundColor: "",
                  color: "#ffc107",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "2rem",
                  textAlign:"center",
                  
                 
                }}data-aos="fade-down" data-aos-duration="1000">Get in Touch</span>
              </Container>
                
              <Container className="pt-0 mt-0" fluid style={{display:"flex",justifyContent:"center"}}>
              <span
                style={{
                  backgroundColor: "",
                  color: "white",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "3rem",
                  textAlign:"center"
                }}
                id="any"
                data-aos="slide-up" data-aos-duration="1000"
              >
                
                Connect with Me with <br /> Confidence
              </span>
              </Container>
            </Col>

        <Container fluid className="py-5">
          <Row>
            {/* only laptop */}
            <Col sm={6} className=" px-5" id="onlylap">
              

              
            <Form data-aos="slide-right" data-aos-duration="1000" style={{display:"flex",flexDirection:"column"}}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    value={name}
                    onChange={handlechange}
                    placeholder="Type Your name"
                    style={{backgroundColor:"transparent",color:"black",height:"70px",borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" style={{display:"flex",flexDirection:"row", gap:"20px"}}>

                <Form.Group className="mb-0">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="number"
                    value={number}
                    onChange={handlechange}
                    placeholder="Type Your number"
                    style={{backgroundColor:"transparent",height:"70px" ,borderRadius:"30px",border:"3px solid #49273f",color:"white"}}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-0"
                  controlId="exampleForm.ControlInput1" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handlechange}
                    placeholder="name@example.com"
                    style={{backgroundColor:"transparent",color:"white",height:"70px", borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>

                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={message}
                    onChange={handlechange}
                    placeholder="Type your message here..."
                    rows={5}
                    style={{backgroundColor:"transparent",color:"white",borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>


                <Button variant="outline-warning"  onClick={submitForm}>
                  {spinner&&<Spinner animation="border" size="sm"></Spinner>} Submit
                </Button>
              </Form>
           
            </Col>

            <Col xs={12} sm={6} >
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                src={img}
                fluid
                id="float"
                
              />
            </Col>

            {/* only phone */}
            <Col xs={12} className="pt-5" id="onlyphone">
              
              
                 <Form data-aos="slide-up" data-aos-duration="1000" style={{display:"flex",flexDirection:"column"}}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    value={name}
                    onChange={handlechange}
                    placeholder="Type Your name"
                    style={{backgroundColor:"transparent",color:"black",height:"70px",borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" style={{display:"flex",flexDirection:"row", gap:"20px"}}>

                <Form.Group className="mb-0">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="number"
                    value={number}
                    onChange={handlechange}
                    placeholder="Type Your number"
                    style={{backgroundColor:"transparent",height:"70px" ,borderRadius:"30px",border:"3px solid #49273f",color:"white"}}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-0"
                  controlId="exampleForm.ControlInput1" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handlechange}
                    placeholder="name@example.com"
                    style={{backgroundColor:"transparent",color:"white",height:"70px", borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>

                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={message}
                    onChange={handlechange}
                    placeholder="Type your message here..."
                    rows={5}
                    style={{backgroundColor:"transparent",color:"white",borderRadius:"30px",border:"3px solid #49273f"}}
                  />
                </Form.Group>


                <Button variant="outline-warning"  onClick={submitForm}>
                  {spinner&&<Spinner animation="border" size="sm"></Spinner>} Submit
                </Button>
              </Form>
             
            </Col>
          </Row>
        </Container>
        </Container>
      </Container>

    
    </>
  );
}
