import React from "react";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        
      </p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1005/600/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This Blogs website</h3>
            <p>
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1010/600/400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>You can create your own blogs here</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/1015/600/400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Lets start</h3>
            <p>
              .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutUs;
