import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import hero_circle from '../assets/logo/about-us-hero-circle.png';
import logo from '../assets/logo/logo.jpeg'
import { Zomato, Swiggy, PizzaHutt } from '../FoodImages/FoodImages';
import './about.css'
import HugoBoss from '../assets/HugoBoss.png'

// images
import makemytrip_hotel from "../assets/makemytrip_hotel.jpeg"
import makemytrip_holiday from "../assets/makemytrip_holiday.jpeg"

function About() {
  const images = ['https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg', logo, Swiggy, makemytrip_holiday, Zomato]

  const topRef = useRef(null)
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <div ref={topRef}>
      <Header />

      {/* About Us Hero Section */}
      <div className="w-full flex justify-center  mt-24 sm:mt-36">
        <div className="w-full  flex flex-col lg:flex-row items-center">
          <div className="relative    w-full flex justify-center overflow-visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1461 331.3"
              className="sm:w-full sm:h-full min-w-80  sm:top-32"

            >
              <defs>
                <linearGradient id="ellipseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0652C5" />
                  <stop offset="100%" stopColor="#D4418E" />
                </linearGradient>
              </defs>
              <ellipse cx="500" cy="-349.2" rx="600.5" ry="680.5" fill="url(#ellipseGradient)" />
              <circle cx="1125" cy="-114.7" r="225" fill="#412db2" />
              <circle cx="1382.89" cy="262.57" r="26.75" fill="#ffce03" />
              <text x="30%" y="35%" textAnchor="middle" fontSize="50" fill="white" fontWeight="bold">
                About Us
              </text>
              <text x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white">
                <tspan x="31%" dy="0">We believe in the power of gifts.</tspan>
                <tspan x="32%" dy="1.5em">It looks like a smile, feels like a hug,</tspan>
                <tspan x="33%" dy="1.5em">and sounds like an ecstatic “Thank you!”</tspan>
              </text>
            </svg>
            {/* Fliping Card */}
            <div className='absolute top-28 right-1/2 translate-x-1/2 sm:top-44 sm:right-60'>
              <div className="card w-40 sm:w-72 sm:h-52">
                <div className="card-inner">
                  <div className="card-front">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={HugoBoss} alt="Hero Circle" />
                  </div>
                  <div className="card-back">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={hero_circle} alt="Hero Circle" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* About Us Description */}
      <div className=' mt-20 flex flex-col gap-6 sm:gap-0  sm:flex-row  items-center justify-start w-full sm:ps-14'>
        <section className="w-full rounded-md max-w-5xl mx-auto px-6 py-10 bg-[#F6F6F6] bg-[#ffd1dc] text-zinc-800">
          <h2 className="text-2xl font-bold mb-4 "><span className='custom-gradient'>About Us</span></h2>
          <p>
            Welcome to CouponSphere, your ultimate destination for exclusive deals, discounts, and savings. We believe that shopping should be rewarding, and that’s why we provide our customers with the best coupon codes to help them save big on their favorite brands and services.
          </p>
          <br />
          <p>
            At CouponSphere, we are dedicated to making online shopping more affordable and enjoyable. Whether you’re looking for discounts on fashion, electronics, travel, or daily essentials, our platform ensures that you get the best deals every time you shop.
          </p>

          {/* Mission */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Our Mission</span></h2>
          <p>
            Our mission is to help customers save money effortlessly by providing the latest and most valuable coupon codes. We aim to bridge the gap between brands and shoppers by offering verified and exclusive discounts that enhance the shopping experience.
          </p>
          <br />
          <p>
            We believe in making savings accessible to everyone by continuously updating our platform with fresh offers, special promotions, and limited-time deals.
          </p>

          {/* What We Offer */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>What We Offer</span></h2>
          <ul className="list-disc ml-5">
            <li>Verified Coupon Codes: We provide authentic and regularly updated discount codes from top brands and e-commerce platforms.</li>
            <li>Exclusive Deals: Enjoy special promotions and limited-time offers that you won’t find anywhere else.</li>
            <li>Wide Range of Categories: From fashion and electronics to travel and food, we have discounts for every need.</li>
            <li>User-Friendly Experience: Our platform makes it easy to find and apply the best coupons, ensuring maximum savings with minimal effort.</li>
          </ul>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Why Choose CouponSphere?</span></h2>
          <ul className="list-disc ml-5">
            <li>Save More, Shop Smart: We bring you the latest discounts so you can enjoy great deals without compromising on quality.</li>
            <li>Trust & Reliability: All our coupons are carefully curated and tested to ensure they work.</li>
            <li>Exclusive Rewards: Sign up for special member-only offers and extra savings on your favorite brands.</li>
            <li>Daily Updates: We keep our platform updated with fresh deals, ensuring you never miss out on a great offer.</li>
          </ul>

          {/* Call to Action */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Start Saving Today!</span></h2>
          <p>
            Unlock amazing discounts with CouponSphere and make every purchase more rewarding. Browse our latest deals, grab the best coupon codes, and enjoy unbeatable savings.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4 "><span className='custom-gradient'> Happy Shopping!</span></h2>
        </section>
        <div className=' w-full max-w-5xl  flex flex-col items-center justify-center gap-20 pb-5'>
          {
            images.map((image, index) => (
              <img key={index}
                className={`max-w-full w-52 sm:w-60 h-auto rounded-lg scale-105 hover:scale-110 transition-all duration-500 cursor-pointer ${index % 2 == 0 ? 'tilt-left' : 'tilt-right'}`}
                src={image}
                alt="Logo"
              />
            ))
          }

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
