import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reward_program_d1 from "../BannerImages/Reward_program_d1.png";

function LatestChartbusters() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  const products = [
    Reward_program_d1,
    "https://static.woohoo.in/media/assets/banner/unipin_voucher_-1440x274.jpg",
    "https://static.woohoo.in/media/assets/banner/nykaa-1440x274_1.jpg",
    "https://static.woohoo.in/media/assets/banner/1440x274_202.jpg",
  ];

  return (
    <div className="w-full bg-[#291022] py-6 md:py-12 px-2 sm:px-4 lg:px-8">
      <Slider {...settings}>
        {products.map((image, index) => (
          <div
            key={index}
            className="w-full bg-white p-1 md:p-2 text-center rounded-lg overflow-hidden"
          >
            {/* Container with increased height for mobile */}
            <div className="">
              <img
                src={image}
                className="rounded-lg w-full object-contain max-h-[800px] sm:max-h-[300px] mx-auto"
                alt="banner"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestChartbusters;