import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx3 wow zoomIn">
              <h2
                id="any"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Skills
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Under the ‘Skills’ section, you’ll find a comprehensive list of
                my technical proficiencies. <br />
                This includes a wide range of programming languages, frameworks,
                and tools.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={2000}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Backend Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>UI/UX Designing</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Database Management</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
