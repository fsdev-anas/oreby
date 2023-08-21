import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";

const Banner = () => {
  let [dotActice,setDotActive] = useState(0);

  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
        setDotActive(next)
    },
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
      appendDots: dots => (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "8%",
            transform: "translateY(-50%)",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={
            i === dotActice?
            {
                width: "30px",
                color: "#262626",
                borderRight: "3px solid #262626",
                padding: "10px 0",
                fontWeight: "bold",
              }
              :
              {
                width: "30px",
                borderRight: "3px solid white",
                padding: "10px 0",
                color: "transparent"
              }
          }
        >
          0{i + 1}
        </div>
      ),
      
      responsive: [
        {
            breakpoint: 1080,
            settings: {
              dots: true,
              appendDots: dots => (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "6%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div
                    style={
                      i === dotActice?
                      {
                          width: "20px",
                          color: "#262626",
                          borderRight: "3px solid #262626",
                          fontSize: "12px",
                        }
                        :
                        {
                          width: "20px",
                          borderRight: "3px solid white",
                          color: "transparent",
                          fontSize: "12px",
                        }
                    }
                  >
                    0{i + 1}
                  </div>
                ),
  
            }
          },
        {
          breakpoint: 576,
          settings: {
            dots: true,
            appendDots: dots => (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "2%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div
                  style={
                    i === dotActice?
                    {
                        width: "20px",
                        color: "#262626",
                        borderRight: "3px solid #262626",
                        fontSize: "12px",
                      }
                      :
                      {
                        width: "20px",
                        borderRight: "3px solid white",
                        color: "transparent",
                        fontSize: "12px",
                      }
                  }
                >
                  0{i + 1}
                </div>
              ),

          }
        },
      ]
  };
  return (
    <Slider {...settings}>
        <Link to="#">
            <div>
                <Image imgSrc="images/Banner.jpg" />
            </div>
        </Link>
        <Link to="#">
            <div>
                <Image imgSrc="images/Banner.jpg" />
            </div>
        </Link>
        <Link to="#">
            <div>
                <Image imgSrc="images/Banner.jpg" />
            </div>
        </Link>
    </Slider>
  );
}

export default Banner