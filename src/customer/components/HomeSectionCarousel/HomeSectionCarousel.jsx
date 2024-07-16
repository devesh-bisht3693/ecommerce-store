import React, { useState } from "react";
import HomeSectionCard from "../Cards/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSectionCarousel = ({ data, sectionName }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowStyles = {
    display: "block",
    color: "black",
    width: "40px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1,
    transition: "color 0.3s ease",
  };

  const NextArrow = (props) => {
    const { className, style, onClick, isVisible } = props;
    return (
      <KeyboardArrowRightIcon
        className={className}
        style={{
          ...style,
          ...arrowStyles,
          display: isVisible ? "flex" : "none",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick, isVisible } = props;
    return (
      <KeyboardArrowLeftIcon
        className={className}
        style={{
          ...style,
          ...arrowStyles,
          display: isVisible ? "flex" : "none",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    afterChange: (next) => setCurrentSlide(next),
    nextArrow: (
      <NextArrow isVisible={currentSlide < data.slice(0, 16).length - 6} />
    ),
    prevArrow: <PrevArrow isVisible={currentSlide > 0} />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <Slider {...settings}>
          {data.slice(0, 16).map((item) => (
            <HomeSectionCard data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
