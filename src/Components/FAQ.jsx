import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import hero_circle from '../assets/logo/about-us-hero-circle.png';
import logo from '../assets/logo/logo.jpeg'
import { Zomato, Swiggy, PizzaHutt } from '../FoodImages/FoodImages';
import './about.css'
import { data_1, data_2, data_3, data_4, data_5 } from '../faqdata'

// images
import makemytrip_hotel from "../assets/makemytrip_hotel.jpeg"
import makemytrip_holiday from "../assets/makemytrip_holiday.jpeg"

function Faq() {
  const images = [logo, 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg', makemytrip_holiday, makemytrip_hotel]

  const topRef = useRef(null)
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])



  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
                FAQs
              </text>
              <text className='hidden' x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white">
                <tspan x="31%" dy="0">We believe in the power of gifts.</tspan>
                <tspan x="32%" dy="1.5em">It looks like a smile, feels like a hug,</tspan>
                <tspan x="33%" dy="1.5em">and sounds like an ecstatic “Thank you!”</tspan>
              </text>
            </svg>
            <img className="absolute top-10 right-10 sm:top-44 sm:right-28 w-40 sm:w-48" src={hero_circle} alt="Hero Circle" />
          </div>
        </div>

      </div>

      {/* FAQs Description */}
      <div className=' mt-20 flex  gap-16 flex-col   items-center justify-between w-full'>
        <section className="w-full rounded-md   px-6 py-10 bg-[#F6F6F6] bg-[#ffd1dc] text-zinc-800">
          <h2 className="text-2xl font-bold mb-4 ">
            <span className='custom-gradient'>
              How CouponSphere Works
            </span>
          </h2>
          <div className="w-full">
            {data_1.map((val, index) => (
              <div key={index} className="rounded-lg p-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full text-left font-semibold text-lg bg-gray-100 py-3 px-4 text-zinc-500 flex justify-between items-center"
                >
                  {val.summary}
                  <span

                  >
                    <i className={`text-gray-600 fa-solid ${openIndex === index ? 'fa-caret-up' : "fa-caret-down"}`}></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-full opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 whitespace-pre-line">{val.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 ">
            <span className='custom-gradient'>
              Cashback Facts
            </span>
          </h2>

          <div className="w-full">
            {data_2.map((val, index) => (
              <div key={index} className="rounded-lg p-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full text-left font-semibold text-lg bg-gray-100 py-3 px-4 text-zinc-500 flex justify-between items-center"
                >
                  {val.summary}
                  <span

                  >
                    <i className={`text-gray-600 fa-solid ${openIndex === index ? 'fa-caret-up' : "fa-caret-down"}`}></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-full opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 whitespace-pre-line">{val.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 ">
            <span className='custom-gradient'>
              Tracking
            </span>
          </h2>


          <div className="w-full">
            {data_3.map((val, index) => (
              <div key={index} className="rounded-lg p-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full text-left font-semibold text-lg bg-gray-100 py-3 px-4 text-zinc-500 flex justify-between items-center"
                >
                  {val.summary}
                  <span

                  >
                    <i className={`text-gray-600 fa-solid ${openIndex === index ? 'fa-caret-up' : "fa-caret-down"}`}></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-full opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 whitespace-pre-line">{val.text}</p>
                </div>
              </div>
            ))}
          </div>


          <h2 className="text-2xl font-bold mb-4 ">
            <span className='custom-gradient'>
              Cashback Issues
            </span>
          </h2>

          <div className="w-full">
            {data_4.map((val, index) => (
              <div key={index} className="rounded-lg p-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full text-left font-semibold text-lg bg-gray-100 py-3 px-4 text-zinc-500 flex justify-between items-center"
                >
                  {val.summary}
                  <span

                  >
                    <i className={`text-gray-600 fa-solid ${openIndex === index ? 'fa-caret-up' : "fa-caret-down"}`}></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-full opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 whitespace-pre-line">{val.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 ">
            <span className='custom-gradient'>
              Withdrawal
            </span>
          </h2>

          <div className="w-full">
            {data_5.map((val, index) => (
              <div key={index} className="rounded-lg p-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full text-left font-semibold text-lg bg-gray-100 py-3 px-4 text-zinc-500 flex justify-between items-center"
                >
                  {val.summary}
                  <span

                  >
                    <i className={`text-gray-600 fa-solid ${openIndex === index ? 'fa-caret-up' : "fa-caret-down"}`}></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-full opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 whitespace-pre-line">{val.text}</p>
                </div>
              </div>
            ))}
          </div>




        </section>
        <div className="hidden w-full overflow-x-auto overflow-y-hidden">
          <div className="flex items-center justify-start gap-10 sm:gap-20 py-4 px-4">
            {images.map((image, index) => (
              <img
                key={index}
                className={`max-w-full w-52 sm:w-60 h-auto rounded-lg scale-105 hover:scale-110 transition-all duration-500 cursor-pointer ${index % 2 == 0 ? 'tilt-left' : 'tilt-right'}`}
                src={image}
                alt="Logo"
              />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Faq
