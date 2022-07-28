import React from "react";
import Slider from "react-slick";

import "../App.css";

function Carousel() {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="text-carousel">
      <Slider {...settings}>
        <div className="carousel-card">
          <h1>Lorem ipsum #1</h1>
          <p>
            Donec nec justo eget felis facilisis fermentum.
            <br /> Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
        <div className="carousel-card">
          <h1>Lorem ipsum #2</h1>
          <p>
            Donec nec justo eget felis facilisis fermentum.
            <br /> Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
        <div className="carousel-card">
          <h1>Lorem ipsum #3</h1>
          <p>
            Donec nec justo eget felis facilisis fermentum.
            <br /> Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
        <div className="carousel-card">
          <h1>Lorem ipsum #4</h1>
          <p>
            Donec nec justo eget felis facilisis fermentum.
            <br /> Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
        <div className="carousel-card">
          <h1>Lorem ipsum #5</h1>
          <p>
            Donec nec justo eget felis facilisis fermentum.
            <br /> Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
