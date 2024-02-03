import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import adobe from "../../assets/img/adobe.gif"
import tailwind from "../../assets/img/tailwind.png"
import c from "../../assets/img/c.png"
import canva from "../../assets/img/canva.png"
import css from "../../assets/img/css.png"
import express from "../../assets/img/express.png"
import figma from "../../assets/img/figma.gif"
import firebase from "../../assets/img/firebase.png"
import github from "../../assets/img/github.gif"
import html from "../../assets/img/html.png"
import java from "../../assets/img/java.gif"
import javascript from "../../assets/img/javascript.gif"
import mysql from "../../assets/img/mysql.gif"
import mongo from "../../assets/img/mongo.png"
import node from "../../assets/img/node.png"
import python from "../../assets/img/python.gif"
import react from "../../assets/img/react.gif"
import bootstrap from "../../assets/img/bootsrap.png"
import colorSharp from "../../assets/img/color-sharp.png";
import { Col, Row } from "react-bootstrap";

export const Tech_stack = () => {
  

  return (
    <section className="skill mt-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx2 wow zoomIn">
              <h2>Tech Stack</h2>
              <p>
              In the ‘Tech Stack’ section, you’ll discover the diverse range of technologies I’ve mastered as a <br /> Full-Stack Web Developer.  This includes various programming languages, frameworks, and tools that I’ve utilized in my projects.
              </p>
              <div className="col-12" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <Row style={{display:"flex",justifyContent:"center"}}>
               
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={c} alt="meter1" className="hov" />
                        <h5>C</h5>
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={java} alt="meter2" />
                        <h5>Java</h5>
                        </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={javascript} alt="meter1" />
                        <h5>Javascript</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={python} alt="meter1" />
                        <h5>Python</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={html} alt="meter1" />
                        <h5>Html</h5>
                        
                    </div>
                    </Col>
                    
                    
                    
            </Row>

            <Row style={{display:"flex",justifyContent:"center"}}>
                    <Col   xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={css} alt="meter1" className="hov" />
                        <h5>Vanilla CSS</h5>
                    </div>
                    </Col>
                    <Col  xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={tailwind} alt="meter1" />
                        <h5>Tailwind CSS</h5>
                        
                    </div>
                    </Col>
                    <Col  xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={meter1} alt="meter1" />
                        <h5>Material UI</h5>
                        
                    </div>
                    </Col>
                    <Col  xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={bootstrap} alt="meter1" />
                        <h5>Bootstrap</h5>
                        
                    </div>
                    </Col>                    
                    <Col  xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={meter1} alt="meter1" />
                        <h5>Next UI</h5>
                        
                    </div>
                    </Col>
                    
            </Row>

            <Row style={{display:"flex",justifyContent:"center"}}>
                
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={react} alt="meter1" />
                        <h5>React</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={node} alt="meter1" />
                        <h5>Node.js</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={express} alt="meter1" />
                        <h5>Express.js</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={mongo} alt="meter1" />
                        <h5>MongoDB</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={github} alt="meter1" className="hov" />
                        <h5>Git & GitHub</h5>
                    </div>
                    </Col>
            </Row>

            <Row style={{display:"flex",justifyContent:"center"}}>
                
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={mysql} alt="meter2" />
                        <h5>MYSQL</h5>
                        </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={firebase} alt="meter1" />
                        <h5>Firebse</h5>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={canva} alt="meter1" className="hov" />
                        <h5>Canva</h5>
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={figma} alt="meter1" className="hov" />
                        <h5>Figma</h5>
                    </div>
                    </Col>
                    <Col xs={6} md={2} className="mb-0 dis">
                    <div className="skill-bx2 wow zoomIn item item1">
                        <img src={adobe} alt="meter1" />
                        <h5>Adobe XD</h5>
                        
                    </div>
                    </Col>
            </Row>

            
            </div>
            </div>
          </div>
          
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
