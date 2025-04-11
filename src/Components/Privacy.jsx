import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import hero_circle from '../assets/logo/about-us-hero-circle.png';
import logo from '../assets/logo/logo.jpeg'
import { Zomato, Swiggy, PizzaHutt } from '../FoodImages/FoodImages';
import './about.css'

// images
import makemytrip_hotel from "../assets/makemytrip_hotel.jpeg"
import makemytrip_holiday from "../assets/makemytrip_holiday.jpeg"

function Privacy() {
  const images = [logo, 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg', makemytrip_holiday, makemytrip_hotel]

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
                Privacy Policy
              </text>
              <text className='hidden' x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white">
                <tspan x="31%" dy="0">We believe in the power of gifts.</tspan>
                <tspan x="32%" dy="1.5em">It looks like a smile, feels like a hug,</tspan>
                <tspan x="33%" dy="1.5em">and sounds like an ecstatic “Thank you!”</tspan>
              </text>
            </svg>
            {/* Fliping Card */}
            <div className='absolute top-28 right-1/2 translate-x-1/2 sm:top-44 sm:right-60'>
              <div className="card w-40 sm:w-72 sm:h-52">
                <div className="card-inner">
                  <div className="card-front ">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={hero_circle} alt="Hero Circle" />
                  </div>
                  <div className="card-back">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={PizzaHutt} alt="Hero Circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* About Us Description */}
      <div className=' mt-20 flex  gap-16 flex-col   items-center justify-between w-full'>
        <section className="w-full rounded-md   px-6 py-10 bg-[#F6F6F6] bg-[#ffd1dc] text-zinc-800">
          <h2 className="text-2xl font-bold mb-4 "><span className='custom-gradient'>Privacy Policy</span></h2>
          <p>
            CouponSphere is owned and operated by Inspire Labs Solutions Pvt. Ltd. By using this website, you agree to the terms and conditions outlined in this policy. If you do not agree with these terms, please discontinue the use of this website.
          </p>
          <br />
          <p>
            We are committed to protecting and respecting your privacy. This policy, along with our website's terms and conditions, outlines how we collect, use, and safeguard your personal data. Please read this policy carefully to understand our practices regarding your personal information.
          </p>

          {/* Mission */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Changes to the Privacy Policy</span></h2>
          <p>
            If we make any changes to our privacy policy, we will update this page immediately and may also post notices on other sections of the website. Your continued use of the website signifies your acceptance of any updates. If you have any concerns or questions regarding this policy or how we process your personal data, please contact us at privacy@couponsphere.in.
          </p>


          {/* What We Offer */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Data Collection and Usage</span></h2>
          <p>
            CouponSphere is the sole owner of the data collected on this website. We do not sell, share, or rent your personal information in ways that differ from what is disclosed in this policy.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>We may collect and process the following types of data:</span></h2>
          <ul className="list-disc ml-5">
            <li>
              Contact Information: Data provided when subscribing to our newsletter, submitting discounts, or reaching out to us.
            </li>
            <li>
              Survey Responses: We may request information for research surveys, but participation is optional.
            </li>
            <li>
              Website Activity Data: Information such as traffic data, location details, communication logs, and accessed resources may be recorded for analytical purposes.
            </li>

          </ul>


          <p>
            Your privacy is important to us, and we ensure that your data is handled with the highest level of security and confidentiality.
          </p>

        </section>
        <div className="w-full overflow-x-auto overflow-y-hidden">
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

export default Privacy
