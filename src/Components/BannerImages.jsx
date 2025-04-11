import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuBank from "../BannerImages/AUBank.png";
import DBS_D from "../BannerImages/DBS-D.png";
import DBS_D_Banner from "../BannerImages/DBS_D_Banner.png";
import Lenskart_D from "../BannerImages/Lenskart-D.png";
import Gyftr_Nykaa_D from "../BannerImages/Gyftr_Nykaa_D.png";
import Reward_program_d from "../BannerImages/Reward_program_d.png";
import DBS_D_Banner1 from "../BannerImages/DBS_D_Banner1.png";
import "./banner.css";

// Custom Left Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-black/80 transition"
  >
    <i className="fa-solid fa-chevron-left"></i>
  </button>
);

// Custom Right Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-black/80 transition"
  >
    <i className="fa-solid fa-chevron-right"></i>
  </button>
);

function BannerImages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
  };

  const BannerImages = [
    AuBank,
    DBS_D,
    DBS_D_Banner,
    Lenskart_D,
    Gyftr_Nykaa_D,
    Reward_program_d,
    DBS_D_Banner1,
  ];

  return (
    <div className="relative w-full mt-12 sm:mt-12 md:mt-24 lg:mt-26">
      <Slider {...settings}>
        {BannerImages.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              className="w-full h-[180px] sm:h-[300px] md:h-[360px] lg:h-[450px] sm:object-contain " 
              alt={`banner-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerImages;
